
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useIntegrations = () => {
  const [loading, setLoading] = useState(false);

  const syncToHubSpot = async (customerId: string) => {
    setLoading(true);
    try {
      const { data: customer } = await supabase
        .from('customers')
        .select('*')
        .eq('id', customerId)
        .single();

      if (!customer) throw new Error('Customer not found');

      const response = await supabase.functions.invoke('integrations-hub', {
        body: {
          type: 'hubspot',
          action: 'sync_customer',
          data: customer
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error syncing to HubSpot:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const sendSlackAlert = async (customer: any) => {
    setLoading(true);
    try {
      const response = await supabase.functions.invoke('integrations-hub', {
        body: {
          type: 'slack',
          action: 'send_alert',
          data: {
            customer_name: customer.name,
            company: customer.company,
            health_score: customer.health_score,
            status: customer.status,
            risk_level: customer.health_score < 40 ? 'Critical' : customer.health_score < 70 ? 'Medium' : 'Low'
          }
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error sending Slack alert:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createZendeskTicket = async (customerId: string, issue: string) => {
    setLoading(true);
    try {
      const { data: customer } = await supabase
        .from('customers')
        .select('*')
        .eq('id', customerId)
        .single();

      if (!customer) throw new Error('Customer not found');

      const response = await supabase.functions.invoke('integrations-hub', {
        body: {
          type: 'zendesk',
          action: 'create_ticket',
          data: {
            subject: `Customer Health Alert - ${customer.name}`,
            description: issue,
            customer_email: customer.email,
            priority: customer.health_score < 40 ? 'high' : 'normal'
          }
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error creating Zendesk ticket:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const trackIntercomEvent = async (customerId: string, eventName: string, metadata: any) => {
    setLoading(true);
    try {
      const response = await supabase.functions.invoke('integrations-hub', {
        body: {
          type: 'intercom',
          action: 'track_event',
          data: {
            user_id: customerId,
            event_name: eventName,
            metadata
          }
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error tracking Intercom event:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const sendEmail = async (customerId: string, subject: string, content: string) => {
    setLoading(true);
    try {
      const { data: customer } = await supabase
        .from('customers')
        .select('*')
        .eq('id', customerId)
        .single();

      if (!customer) throw new Error('Customer not found');

      const response = await supabase.functions.invoke('integrations-hub', {
        body: {
          type: 'mailjet',
          action: 'send_email',
          data: {
            to_email: customer.email,
            to_name: customer.name,
            subject,
            html_content: content
          }
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    syncToHubSpot,
    sendSlackAlert,
    createZendeskTicket,
    trackIntercomEvent,
    sendEmail
  };
};
