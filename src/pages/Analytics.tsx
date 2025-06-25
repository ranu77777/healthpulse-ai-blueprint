
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import HealthScoreChart from '@/components/HealthScoreChart';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  AlertTriangle,
  Calendar,
  Download
} from 'lucide-react';

const Analytics = () => {
  const [timeframe, setTimeframe] = useState('30d');
  const [metric, setMetric] = useState('health_score');

  // Mock data - replace with real data from your analytics system
  const kpis = [
    {
      title: 'Churn Prevention Rate',
      value: '94.2%',
      change: '+2.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Revenue Saved',
      value: '$2.3M',
      change: '+15.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Customer Retention',
      value: '96.8%',
      change: '+1.8%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Risk Reduction',
      value: '67%',
      change: '+8.5%',
      trend: 'up',
      icon: AlertTriangle,
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-slate-900">Analytics Dashboard</h1>
              <Badge className="bg-blue-100 text-blue-800">Enterprise</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">{kpi.title}</p>
                      <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                        <span className="text-xs text-green-600">{kpi.change}</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full bg-${kpi.color}-100`}>
                      <IconComponent className={`h-5 w-5 text-${kpi.color}-600`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="health">Health Trends</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Impact</TabsTrigger>
            <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <HealthScoreChart data={[]} />
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Customer Health Score Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center text-slate-500">
                  Health score trend chart would go here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Revenue Impact Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center text-slate-500">
                  Revenue impact chart would go here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>AI Prediction Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center text-slate-500">
                  AI prediction accuracy chart would go here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
