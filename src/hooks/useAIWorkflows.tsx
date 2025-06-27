
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAIWorkflows = () => {
  const [loading, setLoading] = useState(false);

  const generateWinBackEmail = async (customerId: string) => {
    setLoading(true);
    try {
      const { data: customer } = await supabase
        .from('customers')
        .select('*')
        .eq('id', customerId)
        .single();

      if (!customer) throw new Error('Customer not found');

      const inactiveDays = Math.floor(
        (new Date().getTime() - new Date(customer.last_activity).getTime()) / (1000 * 60 * 60 * 24)
      );

      const response = await supabase.functions.invoke('ai-workflows', {
        body: {
          type: 'win_back',
          data: {
            username: customer.name,
            company: customer.company,
            inactive_days: inactiveDays,
            last_feature: 'Dashboard Analytics'
          }
        }
      });

      if (response.error) throw response.error;

      // Save email campaign
      await supabase.from('email_campaigns').insert({
        customer_id: customerId,
        campaign_type: 'win_back',
        subject: response.data.email_subject,
        body: response.data.email_body,
        status: 'generated'
      });

      return response.data;
    } catch (error) {
      console.error('Error generating win-back email:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const generateOnboardingTip = async (customerId: string) => {
    setLoading(true);
    try {
      const response = await supabase.functions.invoke('ai-workflows', {
        body: {
          type: 'onboarding',
          data: {
            unused_features: ['Health Score Monitoring', 'Risk Alerts', 'Customer Insights'],
            pain_point: 'customer churn prevention'
          }
        }
      });

      if (response.error) throw response.error;
      return response.data;
    } catch (error) {
      console.error('Error generating onboarding tip:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const summarizeFeedback = async (feedbackId: string) => {
    setLoading(true);
    try {
      const { data: feedback } = await supabase
        .from('feedback')
        .select('*')
        .eq('id', feedbackId)
        .single();

      if (!feedback) throw new Error('Feedback not found');

      const response = await supabase.functions.invoke('ai-workflows', {
        body: {
          type: 'feedback_summary',
          data: {
            nps_score: feedback.nps_score,
            feedback_text: feedback.feedback_text
          }
        }
      });

      if (response.error) throw response.error;

      // Update feedback with AI summary
      await supabase
        .from('feedback')
        .update({
          ai_summary: response.data.summary,
          sentiment_score: feedback.nps_score / 10
        })
        .eq('id', feedbackId);

      return response.data;
    } catch (error) {
      console.error('Error summarizing feedback:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const generateChurnSaveEmail = async (customerId: string) => {
    setLoading(true);
    try {
      const response = await supabase.functions.invoke('ai-workflows', {
        body: {
          type: 'churn_save',
          data: {
            churn_reasons: ['Low usage', 'Price concerns'],
            main_benefit: 'reducing customer churn by 40%'
          }
        }
      });

      if (response.error) throw response.error;

      // Save email campaign
      await supabase.from('email_campaigns').insert({
        customer_id: customerId,
        campaign_type: 'churn_save',
        subject: response.data.discount_email_subject,
        body: response.data.discount_email_body,
        status: 'generated'
      });

      return response.data;
    } catch (error) {
      console.error('Error generating churn save email:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    generateWinBackEmail,
    generateOnboardingTip,
    summarizeFeedback,
    generateChurnSaveEmail
  };
};
