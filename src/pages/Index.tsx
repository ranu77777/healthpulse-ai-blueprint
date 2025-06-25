
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
  LogOut,
  Download
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCustomers } from '@/hooks/useCustomers';
import LandingPage from '@/components/LandingPage';
import AuthPage from '@/components/AuthPage';
import HealthScoreChart from '@/components/HealthScoreChart';
import CustomerList from '@/components/CustomerList';
import RiskAlerts from '@/components/RiskAlerts';
import PredictionInsights from '@/components/PredictionInsights';

const Index = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const { customers, loading: customersLoading, addSampleData, runAnalysis } = useCustomers();
  const { toast } = useToast();
  const [showAuth, setShowAuth] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [healthScores, setHealthScores] = useState([]);

  // Generate mock health score data
  useEffect(() => {
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
  }, [selectedTimeframe]);

  const handleGetStarted = (email: string) => {
    setLeadEmail(email);
    setShowAuth(true);
  };

  const handleAnalysis = async () => {
    if (customers.length === 0) {
      await addSampleData();
      toast({
        title: "Sample data added!",
        description: "We've added some sample customers for you to analyze."
      });
    } else {
      await runAnalysis();
      toast({
        title: "Analysis complete!",
        description: "Customer health scores have been updated with AI insights."
      });
    }
  };

  const handleExport = () => {
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

  // Calculate metrics from real data
  const mockMetrics = {
    totalCustomers: customers.length || 1247,
    healthyCustomers: customers.filter(c => c.status === 'healthy').length || 892,
    atRiskCustomers: customers.filter(c => c.status === 'at_risk').length || 198,
    criticalCustomers: customers.filter(c => c.status === 'critical').length || 157,
    avgHealthScore: customers.length > 0 
      ? Math.round(customers.reduce((sum, c) => sum + c.health_score, 0) / customers.length)
      : 73,
    churnPrevented: 24,
    revenueAtRisk: customers.filter(c => c.status !== 'healthy')
      .reduce((sum, c) => sum + c.revenue, 0) || 145000,
    predictionAccuracy: 94.2
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  HealthPulse
                </h1>
              </div>
              <Badge variant="outline" className="text-xs font-medium">
                AI-Powered
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleAnalysis}>
                <Brain className="h-4 w-4 mr-2" />
                Run Analysis
              </Button>
              <Button size="sm" onClick={handleExport} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{mockMetrics.totalCustomers.toLocaleString()}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Avg Health Score</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{mockMetrics.avgHealthScore}%</div>
              <Progress value={mockMetrics.avgHealthScore} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Revenue at Risk</CardTitle>
              <DollarSign className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">${mockMetrics.revenueAtRisk.toLocaleString()}</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                -5% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">AI Accuracy</CardTitle>
              <Brain className="h-4 w-4 text-indigo-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{mockMetrics.predictionAccuracy}%</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.1% accuracy improvement
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
              <div className="text-3xl font-bold text-green-700">{mockMetrics.healthyCustomers}</div>
              <div className="text-sm text-green-600 mt-1">
                {mockMetrics.totalCustomers > 0 
                  ? `${Math.round((mockMetrics.healthyCustomers / mockMetrics.totalCustomers) * 100)}%`
                  : '71.6%'} of total customers
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
              <div className="text-3xl font-bold text-yellow-700">{mockMetrics.atRiskCustomers}</div>
              <div className="text-sm text-yellow-600 mt-1">
                {mockMetrics.totalCustomers > 0 
                  ? `${Math.round((mockMetrics.atRiskCustomers / mockMetrics.totalCustomers) * 100)}%`
                  : '15.9%'} need attention
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
              <div className="text-3xl font-bold text-red-700">{mockMetrics.criticalCustomers}</div>
              <div className="text-sm text-red-600 mt-1">
                {mockMetrics.totalCustomers > 0 
                  ? `${Math.round((mockMetrics.criticalCustomers / mockMetrics.totalCustomers) * 100)}%`
                  : '12.6%'} immediate action needed
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
      </div>
    </div>
  );
};

export default Index;
