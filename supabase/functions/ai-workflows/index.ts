
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WorkflowRequest {
  type: 'win_back' | 'onboarding' | 'feedback_summary' | 'churn_save';
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    );

    const { type, data }: WorkflowRequest = await req.json();
    const openaiKey = Deno.env.get("OPENAI_API_KEY");

    if (!openaiKey) {
      throw new Error("OpenAI API key not configured");
    }

    let result;
    
    switch (type) {
      case 'win_back':
        result = await generateWinBackEmail(data, openaiKey);
        break;
      case 'onboarding':
        result = await generateOnboardingTip(data, openaiKey);
        break;
      case 'feedback_summary':
        result = await summarizeFeedback(data, openaiKey);
        break;
      case 'churn_save':
        result = await generateChurnSaveEmail(data, openaiKey);
        break;
      default:
        throw new Error("Invalid workflow type");
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in AI workflows:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

async function generateWinBackEmail(data: any, apiKey: string) {
  const prompt = `Act like a friendly customer success manager.

A user named ${data.username} from ${data.company} has not used our platform in ${data.inactive_days} days. They last interacted with the feature: ${data.last_feature}.

Write a warm, personal email reminding them of how this feature helps companies like theirs. End with a supportive offer to help and a link to book a call/demo.

Keep tone: helpful, friendly, non-pushy.

Return JSON with: {"email_subject": "...", "email_body": "..."}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  const result = await response.json();
  return JSON.parse(result.choices[0].message.content);
}

async function generateOnboardingTip(data: any, apiKey: string) {
  const prompt = `A user completed onboarding 3 days ago but hasn't used the key features: ${data.unused_features.join(', ')}.

Generate a short 3-line suggestion that tells the user how these features will solve their biggest pain point: ${data.pain_point}.

Tone: excited, simple, solution-first.

Return JSON with: {"onboarding_tip": "..."}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  const result = await response.json();
  return JSON.parse(result.choices[0].message.content);
}

async function summarizeFeedback(data: any, apiKey: string) {
  const prompt = `You're a customer experience analyst.

A user gave an NPS score of ${data.nps_score} and left this comment:
"${data.feedback_text}"

Give a 1-line summary of their feedback. Also, suggest one product improvement idea based on this.

Return JSON with: {"summary": "...", "improvement_suggestion": "..."}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  const result = await response.json();
  return JSON.parse(result.choices[0].message.content);
}

async function generateChurnSaveEmail(data: any, apiKey: string) {
  const prompt = `A user is about to cancel their subscription. Here are the churn reasons: ${data.churn_reasons.join(', ')}.

Write a short email offering them a 20% discount if they stay. Mention how the product solves ${data.main_benefit}. Keep tone persuasive but respectful.

Return JSON with: {"discount_email_subject": "...", "discount_email_body": "..."}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  const result = await response.json();
  return JSON.parse(result.choices[0].message.content);
}

serve(handler);
