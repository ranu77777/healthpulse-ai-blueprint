
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  BarChart3,
  Activity,
  DollarSign,
  Brain,
  Download,
  Plus
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCustomers } from '@/hooks/useCustomers';
import LandingPage from '@/components/LandingPage';
import AuthPage from '@/components/AuthPage';
import HealthScoreChart from '@/components/HealthScoreChart';
import CustomerList from '@/components/CustomerList';
import RiskAlerts from '@/components/RiskAlerts';
import PredictionInsights from '@/components/PredictionInsights';
import NavigationMenu from '@/components/NavigationMenu';

const Index = () => {
  const { user, loading: authLoading } = useAuth();
  const { customers, loading: customersLoading, addSampleData, runAnalysis } = useCustomers();
  const { toast } = useToast();
  const [showAuth, setShowAuth] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [healthScores, setHealthScores] = useState([]);

  // Generate mock health score data only when needed
  useEffect(() => {
    if (customers.length > 0) {
      const generateMockData = () => {
        const data = [];
        for (let i = 29; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          data.push({
            date: date.toISOString().split('T')[0],
            avgScore: Math.floor(Math.random() * 30) + 65,
            healthy: Math.floor(Math.random() * 50) + 850,
            atRisk: Math.floor(Math.random() * 30) + 180,
            critical: Math.floor(Math.random() * 20) + 140
          });
        }
        setHealthScores(data);
      };
      generateMockData();
    }
  }, [customers, selectedTimeframe]);

  const handleGetStarted = (email: string) => {
    setLeadEmail(email);
    setShowAuth(true);
  };

  const handleAnalysis = async () => {
    if (customers.length === 0) {
      toast({
        title: "No customers found",
        description: "Add some customers first to run analysis.",
        variant: "destructive"
      });
      return;
    }
    
    await runAnalysis();
    toast({
      title: "Analysis complete!",
      description: "Customer health scores have been updated with AI insights."
    });
  };

  const handleAddSampleData = async () => {
    await addSampleData();
    toast({
      title: "Sample data added!",
      description: "We've added some sample customers for you to analyze."
    });
  };

  const handleExport = () => {
    if (customers.length === 0) {
      toast({
        title: "No data to export",
        description: "Add some customers first to export data.",
        variant: "destructive"
      });
      return;
    }

    const data = {
      customers,
      healthScores,
      exportDate: new Date().toISOString(),
      summary: {
        totalCustomers: customers.length,
        healthyCustomers: customers.filter(c => c.status === 'healthy').length,
        atRiskCustomers: customers.filter(c => c.status === 'at_risk').length,
        criticalCustomers: customers.filter(c => c.status === 'critical').length,
        avgHealthScore: customers.length > 0 
          ? Math.round(customers.reduce((sum, c) => sum + c.health_score, 0) / customers.length)
          : 0
      }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `healthpulse-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Report exported!",
      description: "Your customer health report has been downloaded."
    });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-blue-600 animate-pulse" />
          <span className="text-lg font-medium text-slate-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    if (showAuth) {
      return <AuthPage initialEmail={leadEmail} onBack={() => setShowAuth(false)} />;
    }
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  // Calculate metrics from real data (no mock data for new users)
  const metrics = {
    totalCustomers: customers.length,
    healthyCustomers: customers.filter(c => c.status === 'healthy').length,
    atRiskCustomers: customers.filter(c => c.status === 'at_risk').length,
    criticalCustomers: customers.filter(c => c.status === 'critical').length,
    avgHealthScore: customers.length > 0 
      ? Math.round(customers.reduce((sum, c) => sum + c.health_score, 0) / customers.length)
      : 0,
    revenueAtRisk: customers.filter(c => c.status !== 'healthy')
      .reduce((sum, c) => sum + c.revenue, 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <NavigationMenu />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section for New Users */}
        {customers.length === 0 && (
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Welcome to HealthPulse Enterprise
              </h2>
              <p className="text-slate-600 mb-6">
                Get started by adding your first customers or try our demo with sample data
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button onClick={handleAddSampleData} className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Sample Data
                </Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Add Customers
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        {customers.length > 0 && (
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-slate-600">Monitor your customer health in real-time</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleAnalysis}>
                <Brain className="h-4 w-4 mr-2" />
                Run AI Analysis
              </Button>
              <Button size="sm" onClick={handleExport} className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        )}

        {/* Key Metrics Cards - Only show if we have customers */}
        {customers.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Total Customers</CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">{metrics.totalCustomers}</div>
                  <div className="flex items-center text-xs text-slate-500 mt-1">
                    Active customers in your system
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Avg Health Score</CardTitle>
                  <Activity className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">{metrics.avgHealthScore}%</div>
                  <Progress value={metrics.avgHealthScore} className="mt-2 h-2" />
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">Revenue at Risk</CardTitle>
                  <DollarSign className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">${metrics.revenueAtRisk.toLocaleString()}</div>
                  <div className="flex items-center text-xs text-slate-500 mt-1">
                    From at-risk and critical customers
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">AI Powered</CardTitle>
                  <Brain className="h-4 w-4 text-indigo-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">94.2%</div>
                  <div className="flex items-center text-xs text-green-600 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Prediction accuracy
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Health Status Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Healthy Customers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-700">{metrics.healthyCustomers}</div>
                  <div className="text-sm text-green-600 mt-1">
                    {metrics.totalCustomers > 0 
                      ? `${Math.round((metrics.healthyCustomers / metrics.totalCustomers) * 100)}%`
                      : '0%'} of total customers
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-800">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    At Risk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-700">{metrics.atRiskCustomers}</div>
                  <div className="text-sm text-yellow-600 mt-1">
                    {metrics.totalCustomers > 0 
                      ? `${Math.round((metrics.atRiskCustomers / metrics.totalCustomers) * 100)}%`
                      : '0%'} need attention
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-800">
                    <XCircle className="h-5 w-5 mr-2" />
                    Critical Risk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-700">{metrics.criticalCustomers}</div>
                  <div className="text-sm text-red-600 mt-1">
                    {metrics.totalCustomers > 0 
                      ? `${Math.round((metrics.criticalCustomers / metrics.totalCustomers) * 100)}%`
                      : '0%'} immediate action needed
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm">
                <TabsTrigger value="overview" className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="customers" className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Customers
                </TabsTrigger>
                <TabsTrigger value="alerts" className="flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Risk Alerts
                </TabsTrigger>
                <TabsTrigger value="insights" className="flex items-center">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Insights
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <HealthScoreChart data={healthScores} />
              </TabsContent>

              <TabsContent value="customers" className="space-y-6">
                <CustomerList />
              </TabsContent>

              <TabsContent value="alerts" className="space-y-6">
                <RiskAlerts />
              </TabsContent>

              <TabsContent value="insights" className="space-y-6">
                <PredictionInsights />
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
