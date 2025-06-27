
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface IntegrationRequest {
  type: 'hubspot' | 'slack' | 'zendesk' | 'intercom' | 'mailjet';
  action: string;
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, action, data }: IntegrationRequest = await req.json();

    let result;
    
    switch (type) {
      case 'hubspot':
        result = await handleHubSpot(action, data);
        break;
      case 'slack':
        result = await handleSlack(action, data);
        break;
      case 'zendesk':
        result = await handleZendesk(action, data);
        break;
      case 'intercom':
        result = await handleIntercom(action, data);
        break;
      case 'mailjet':
        result = await handleMailjet(action, data);
        break;
      default:
        throw new Error("Invalid integration type");
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in integrations:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

async function handleHubSpot(action: string, data: any) {
  const apiKey = Deno.env.get("HUBSPOT_API_KEY");
  
  if (action === 'sync_customer') {
    const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          email: data.email,
          firstname: data.name.split(' ')[0],
          lastname: data.name.split(' ')[1] || '',
          company: data.company,
          health_score: data.health_score,
          last_activity: data.last_activity,
        }
      }),
    });
    
    return await response.json();
  }
}

async function handleSlack(action: string, data: any) {
  const webhookUrl = Deno.env.get("SLACK_WEBHOOK_URL");
  
  if (action === 'send_alert') {
    const message = {
      text: `🚨 Customer Health Alert`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Customer:* ${data.customer_name}\n*Company:* ${data.company}\n*Health Score:* ${data.health_score}%\n*Status:* ${data.status}\n*Risk Level:* ${data.risk_level}`
          }
        }
      ]
    };
    
    const response = await fetch(webhookUrl!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
    
    return { success: response.ok };
  }
}

async function handleZendesk(action: string, data: any) {
  const token = Deno.env.get("ZENDESK_API_TOKEN");
  const subdomain = "your-subdomain"; // Configure this
  
  if (action === 'create_ticket') {
    const response = await fetch(`https://${subdomain}.zendesk.com/api/v2/tickets.json`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticket: {
          subject: data.subject,
          comment: { body: data.description },
          requester: { email: data.customer_email },
          priority: data.priority || 'normal',
          tags: ['healthpulse', 'automated']
        }
      }),
    });
    
    return await response.json();
  }
}

async function handleIntercom(action: string, data: any) {
  const token = Deno.env.get("INTERCOM_ACCESS_TOKEN");
  
  if (action === 'track_event') {
    const response = await fetch("https://api.intercom.io/events", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        event_name: data.event_name,
        created_at: Math.floor(Date.now() / 1000),
        user_id: data.user_id,
        metadata: data.metadata,
      }),
    });
    
    return await response.json();
  }
}

async function handleMailjet(action: string, data: any) {
  const apiKey = Deno.env.get("MAILJET_API_KEY");
  const secretKey = Deno.env.get("MAILJET_SECRET_KEY");
  
  if (action === 'send_email') {
    const auth = btoa(`${apiKey}:${secretKey}`);
    
    const response = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Messages: [{
          From: { Email: "noreply@healthpulse.com", Name: "HealthPulse" },
          To: [{ Email: data.to_email, Name: data.to_name }],
          Subject: data.subject,
          HTMLPart: data.html_content,
        }]
      }),
    });
    
    return await response.json();
  }
}

serve(handler);
