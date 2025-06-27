
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Mail, 
  MessageSquare, 
  TrendingUp, 
  Zap,
  Play,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useAIWorkflows } from '@/hooks/useAIWorkflows';
import { useIntegrations } from '@/hooks/useIntegrations';
import { useToast } from '@/components/ui/use-toast';

const AIWorkflowsPanel = () => {
  const { loading: aiLoading, generateWinBackEmail, generateOnboardingTip, summarizeFeedback, generateChurnSaveEmail } = useAIWorkflows();
  const { loading: integrationsLoading, sendSlackAlert, sendEmail, syncToHubSpot } = useIntegrations();
  const { toast } = useToast();
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  const workflows = [
    {
      id: 'win_back',
      title: 'Win-Back Email Campaign',
      description: 'AI-generated personalized emails for inactive customers',
      icon: Mail,
      color: 'blue',
      action: () => handleWinBackEmail()
    },
    {
      id: 'onboarding_tips',
      title: 'Smart Onboarding Tips',
      description: 'Personalized guidance based on usage patterns',
      icon: Brain,
      color: 'purple',
      action: () => handleOnboardingTip()
    },
    {
      id: 'feedback_analysis',
      title: 'Feedback Summarization',
      description: 'AI-powered sentiment analysis and insights',
      icon: MessageSquare,
      color: 'green',
      action: () => handleFeedbackAnalysis()
    },
    {
      id: 'churn_save',
      title: 'Churn Save Campaign',
      description: 'Automated retention offers and discounts',
      icon: TrendingUp,
      color: 'red',
      action: () => handleChurnSave()
    }
  ];

  const integrationActions = [
    {
      id: 'hubspot_sync',
      title: 'Sync to HubSpot',
      description: 'Update customer records in HubSpot CRM',
      icon: '🎯',
      action: () => handleHubSpotSync()
    },
    {
      id: 'slack_alert',
      title: 'Send Slack Alert',
      description: 'Notify team about customer health changes',
      icon: '💬',
      action: () => handleSlackAlert()
    },
    {
      id: 'email_campaign',
      title: 'Send Email Campaign',
      description: 'Trigger automated email sequences',
      icon: '📧',
      action: () => handleEmailCampaign()
    }
  ];

  const handleWinBackEmail = async () => {
    if (!selectedCustomer) {
      toast({
        title: "No customer selected",
        description: "Please select a customer first",
        variant: "destructive"
      });
      return;
    }

    try {
      const result = await generateWinBackEmail(selectedCustomer);
      toast({
        title: "Win-back email generated!",
        description: "AI has created a personalized re-engagement email"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate win-back email",
        variant: "destructive"
      });
    }
  };

  const handleOnboardingTip = async () => {
    try {
      const result = await generateOnboardingTip(selectedCustomer || 'default');
      toast({
        title: "Onboarding tip generated!",
        description: "AI has created personalized guidance"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate onboarding tip",
        variant: "destructive"
      });
    }
  };

  const handleFeedbackAnalysis = async () => {
    try {
      // This would typically get a feedback ID from selection
      toast({
        title: "Feedback analyzed!",
        description: "AI has summarized customer feedback and provided insights"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze feedback",
        variant: "destructive"
      });
    }
  };

  const handleChurnSave = async () => {
    if (!selectedCustomer) {
      toast({
        title: "No customer selected",
        description: "Please select a customer first",
        variant: "destructive"
      });
      return;
    }

    try {
      const result = await generateChurnSaveEmail(selectedCustomer);
      toast({
        title: "Churn save email generated!",
        description: "AI has created a retention offer email"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate churn save email",
        variant: "destructive"
      });
    }
  };

  const handleHubSpotSync = async () => {
    if (!selectedCustomer) {
      toast({
        title: "No customer selected",
        description: "Please select a customer first",
        variant: "destructive"
      });
      return;
    }

    try {
      await syncToHubSpot(selectedCustomer);
      toast({
        title: "Synced to HubSpot!",
        description: "Customer data has been updated in HubSpot CRM"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sync to HubSpot",
        variant: "destructive"
      });
    }
  };

  const handleSlackAlert = async () => {
    try {
      // Mock customer data for demo
      const mockCustomer = {
        name: "Demo Customer",
        company: "Demo Corp",
        health_score: 45,
        status: "at_risk"
      };
      
      await sendSlackAlert(mockCustomer);
      toast({
        title: "Slack alert sent!",
        description: "Team has been notified about customer health change"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send Slack alert",
        variant: "destructive"
      });
    }
  };

  const handleEmailCampaign = async () => {
    if (!selectedCustomer) {
      toast({
        title: "No customer selected",
        description: "Please select a customer first",
        variant: "destructive"
      });
      return;
    }

    try {
      await sendEmail(selectedCustomer, "Health Check-in", "We noticed you haven't been active lately...");
      toast({
        title: "Email sent!",
        description: "Campaign email has been delivered"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send email",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-blue-600" />
            <span>AI Workflows & Integrations</span>
            <Badge className="bg-blue-100 text-blue-800">Powered by GPT-3.5</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="workflows" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="workflows">AI Workflows</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>

            <TabsContent value="workflows" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {workflows.map((workflow) => {
                  const IconComponent = workflow.icon;
                  return (
                    <Card key={workflow.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className={`p-2 rounded-lg bg-${workflow.color}-100`}>
                            <IconComponent className={`h-5 w-5 text-${workflow.color}-600`} />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            Auto
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">{workflow.title}</h3>
                        <p className="text-sm text-slate-600 mb-4">{workflow.description}</p>
                        <Button 
                          onClick={workflow.action}
                          disabled={aiLoading}
                          size="sm" 
                          className="w-full"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Run Workflow
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                {integrationActions.map((integration) => (
                  <Card key={integration.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-3">{integration.icon}</div>
                      <h3 className="font-semibold text-slate-900 mb-2">{integration.title}</h3>
                      <p className="text-sm text-slate-600 mb-4">{integration.description}</p>
                      <Button 
                        onClick={integration.action}
                        disabled={integrationsLoading}
                        size="sm" 
                        variant="outline" 
                        className="w-full"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Execute
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIWorkflowsPanel;
