
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  health_score: number;
  status: 'healthy' | 'at_risk' | 'critical';
  last_activity: string;
  revenue: number;
  created_at: string;
}

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchCustomers = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('customers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCustomers(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addSampleData = async () => {
    if (!user) return;

    const sampleCustomers = [
      {
        user_id: user.id,
        name: 'Acme Corporation',
        email: 'contact@acme.com',
        company: 'Acme Corp',
        health_score: 92,
        status: 'healthy' as const,
        last_activity: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        revenue: 25000
      },
      {
        user_id: user.id,
        name: 'TechFlow Solutions',
        email: 'hello@techflow.com',
        company: 'TechFlow',
        health_score: 68,
        status: 'at_risk' as const,
        last_activity: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        revenue: 15000
      },
      {
        user_id: user.id,
        name: 'Global Dynamics',
        email: 'info@globaldynamics.com',
        company: 'Global Dynamics',
        health_score: 35,
        status: 'critical' as const,
        last_activity: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
        revenue: 45000
      }
    ];

    try {
      const { error } = await supabase
        .from('customers')
        .insert(sampleCustomers);

      if (error) throw error;
      await fetchCustomers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add sample data');
    }
  };

  const runAnalysis = async () => {
    // Simulate AI analysis by updating health scores
    if (!user || customers.length === 0) return;

    try {
      const updates = customers.map(customer => ({
        id: customer.id,
        health_score: Math.max(0, Math.min(100, customer.health_score + (Math.random() - 0.5) * 20)),
        status: customer.health_score > 80 ? 'healthy' : customer.health_score > 50 ? 'at_risk' : 'critical'
      }));

      for (const update of updates) {
        await supabase
          .from('customers')
          .update({ 
            health_score: Math.round(update.health_score),
            status: update.status
          })
          .eq('id', update.id);
      }

      await fetchCustomers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed');
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [user]);

  return {
    customers,
    loading,
    error,
    fetchCustomers,
    addSampleData,
    runAnalysis
  };
};
