
-- Create enhanced users table for HealthPulse
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  company text,
  created_at timestamp with time zone DEFAULT now(),
  last_login timestamp with time zone,
  updated_at timestamp with time zone DEFAULT now()
);

-- Create events tracking table
CREATE TABLE IF NOT EXISTS public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.users(id) ON DELETE CASCADE,
  customer_id uuid REFERENCES public.customers(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  feature_name text,
  metadata jsonb,
  timestamp timestamp with time zone DEFAULT now()
);

-- Create churn predictions table
CREATE TABLE IF NOT EXISTS public.churn_predictions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES public.customers(id) ON DELETE CASCADE,
  risk_score float NOT NULL CHECK (risk_score >= 0 AND risk_score <= 1),
  reason text,
  ai_insights jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create feedback table
CREATE TABLE IF NOT EXISTS public.feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES public.customers(id) ON DELETE CASCADE,
  nps_score integer CHECK (nps_score >= 0 AND nps_score <= 10),
  feedback_text text,
  sentiment_score float,
  ai_summary text,
  created_at timestamp with time zone DEFAULT now()
);

-- Create email campaigns table
CREATE TABLE IF NOT EXISTS public.email_campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES public.customers(id) ON DELETE CASCADE,
  campaign_type text NOT NULL, -- 'win_back', 'onboarding', 'churn_save'
  subject text NOT NULL,
  body text NOT NULL,
  sent_at timestamp with time zone,
  opened_at timestamp with time zone,
  clicked_at timestamp with time zone,
  status text DEFAULT 'draft', -- 'draft', 'sent', 'opened', 'clicked'
  created_at timestamp with time zone DEFAULT now()
);

-- Create AI insights table
CREATE TABLE IF NOT EXISTS public.ai_insights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES public.customers(id) ON DELETE CASCADE,
  insight_type text NOT NULL, -- 'churn_risk', 'engagement', 'health_decline'
  title text NOT NULL,
  description text NOT NULL,
  confidence_score float CHECK (confidence_score >= 0 AND confidence_score <= 1),
  action_items jsonb,
  created_at timestamp with time zone DEFAULT now(),
  resolved_at timestamp with time zone
);

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.churn_predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_insights ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own data" ON public.users
  FOR ALL USING (auth.uid() = auth_user_id);

CREATE POLICY "Users can view own events" ON public.events
  FOR ALL USING (user_id IN (SELECT id FROM public.users WHERE auth_user_id = auth.uid()));

CREATE POLICY "Users can view own customer predictions" ON public.churn_predictions
  FOR ALL USING (customer_id IN (SELECT id FROM public.customers WHERE user_id = auth.uid()));

CREATE POLICY "Users can view own customer feedback" ON public.feedback
  FOR ALL USING (customer_id IN (SELECT id FROM public.customers WHERE user_id = auth.uid()));

CREATE POLICY "Users can view own email campaigns" ON public.email_campaigns
  FOR ALL USING (customer_id IN (SELECT id FROM public.customers WHERE user_id = auth.uid()));

CREATE POLICY "Users can view own AI insights" ON public.ai_insights
  FOR ALL USING (customer_id IN (SELECT id FROM public.customers WHERE user_id = auth.uid()));

-- Create function to auto-update health scores based on activities
CREATE OR REPLACE FUNCTION update_customer_health_score()
RETURNS trigger AS $$
BEGIN
  -- Update health score based on recent activity
  UPDATE public.customers 
  SET health_score = GREATEST(0, LEAST(100, 
    CASE 
      WHEN NEW.event_type = 'login' THEN health_score + 5
      WHEN NEW.event_type = 'feature_use' THEN health_score + 3
      WHEN NEW.event_type = 'support_ticket' THEN health_score - 2
      ELSE health_score
    END
  )),
  last_activity = NEW.timestamp,
  updated_at = now()
  WHERE id = NEW.customer_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for auto-updating health scores
CREATE TRIGGER on_event_update_health
  AFTER INSERT ON public.events
  FOR EACH ROW
  EXECUTE FUNCTION update_customer_health_score();

-- Create function to generate daily churn predictions
CREATE OR REPLACE FUNCTION generate_churn_predictions()
RETURNS void AS $$
BEGIN
  INSERT INTO public.churn_predictions (customer_id, risk_score, reason)
  SELECT 
    c.id,
    CASE 
      WHEN f.nps_score <= 6 THEN 0.9
      WHEN c.last_activity < now() - interval '7 days' THEN 0.85
      WHEN c.health_score < 40 THEN 0.75
      WHEN c.health_score < 60 THEN 0.5
      ELSE 0.2
    END as risk_score,
    CASE 
      WHEN f.nps_score <= 6 THEN 'Low NPS score indicates dissatisfaction'
      WHEN c.last_activity < now() - interval '7 days' THEN 'Extended period of inactivity'
      WHEN c.health_score < 40 THEN 'Critical health score decline'
      WHEN c.health_score < 60 THEN 'Below average engagement'
      ELSE 'Low risk - healthy engagement'
    END as reason
  FROM public.customers c
  LEFT JOIN public.feedback f ON c.id = f.customer_id
  WHERE c.status != 'churned'
  ON CONFLICT (customer_id) DO UPDATE 
  SET risk_score = EXCLUDED.risk_score,
      reason = EXCLUDED.reason,
      updated_at = now();
END;
$$ LANGUAGE plpgsql;
