
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Target, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Eye,
  BarChart3,
  PieChart,
  Activity,
  Lightbulb,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const PredictionInsights = () => {
  const [selectedModel, setSelectedModel] = useState('churn');

  const modelPerformance = {
    churn: {
      accuracy: 94.2,
      precision: 91.8,
      recall: 89.5,
      f1Score: 90.6,
      confidenceLevel: 96.3
    },
    health: {
      accuracy: 92.7,
      precision: 90.2,
      recall: 88.9,
      f1Score: 89.5,
      confidenceLevel: 94.1
    },
    revenue: {
      accuracy: 87.3,
      precision: 85.6,
      recall: 86.2,
      f1Score: 85.9,
      confidenceLevel: 91.8
    }
  };

  const insights = [
    {
      id: 1,
      type: 'pattern',
      title: 'Payment Behavior Correlation',
      description: 'Customers with late payments (>7 days) show 3.2x higher churn probability',
      confidence: 94,
      impact: 'High',
      recommendation: 'Implement automated payment reminders and grace period notifications',
      icon: Target,
      color: 'blue'
    },
    {
      id: 2,
      type: 'trend',
      title: 'Feature Usage Decline',
      description: 'Customers using <3 core features have 4.1x higher churn risk within 30 days',
      confidence: 91,
      impact: 'High',
      recommendation: 'Create onboarding sequences for underutilized features',
      icon: TrendingDown,
      color: 'red'
    },
    {
      id: 3,
      type: 'opportunity',
      title: 'Expansion Opportunity',
      description: 'High-health customers (>85%) with growing usage show 67% upgrade probability',
      confidence: 89,
      impact: 'Medium',
      recommendation: 'Target expansion campaigns to high-performing segments',
      icon: TrendingUp,
      color: 'green'
    },
    {
      id: 4,
      type: 'alert',
      title: 'Support Ticket Pattern',
      description: 'Multiple unresolved tickets correlate with 89% churn within 60 days',
      confidence: 96,
      impact: 'Critical',
      recommendation: 'Implement escalation protocols for repeat ticket customers',
      icon: AlertCircle,
      color: 'yellow'
    }
  ];

  const predictions = [
    {
      customer: 'Global Dynamics',
      churnProbability: 87,
      timeframe: '14 days',
      keyFactors: ['No recent login', 'Payment delays', 'Support tickets'],
      recommendation: 'Immediate intervention required'
    },
    {
      customer: 'Enterprise Inc',
      churnProbability: 63,
      timeframe: '45 days',
      keyFactors: ['Decreased usage', 'Feature adoption low'],
      recommendation: 'Schedule training session'
    },
    {
      customer: 'TechFlow Solutions',
      churnProbability: 71,
      timeframe: '30 days',
      keyFactors: ['Payment issues', 'Low engagement'],
      recommendation: 'Address billing concerns'
    }
  ];

  const getInsightIcon = (type) => {
    switch (type) {
      case 'pattern':
        return Brain;
      case 'trend':
        return TrendingDown;
      case 'opportunity':
        return TrendingUp;
      case 'alert':
        return AlertCircle;
      default:
        return Lightbulb;
    }
  };

  const getInsightColor = (color) => {
    switch (color) {
      case 'blue':
        return 'text-blue-600 bg-blue-100';
      case 'red':
        return 'text-red-600 bg-red-100';
      case 'green':
        return 'text-green-600 bg-green-100';
      case 'yellow':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  const getRiskColor = (probability) => {
    if (probability >= 80) return 'text-red-600';
    if (probability >= 60) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Model Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-800">
              <Brain className="h-5 w-5 mr-2" />
              AI Model Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600">Overall Accuracy</span>
                <span className="font-bold text-blue-700">94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
              <div className="text-xs text-blue-600">
                Continuously improving with new data
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Target className="h-5 w-5 mr-2" />
              Predictions Made
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700">1,247</div>
            <div className="text-sm text-green-600 mt-1">This month</div>
            <div className="flex items-center text-xs text-green-600 mt-2">
              <TrendingUp className="h-3 w-3 mr-1" />
              +23% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-800">
              <Zap className="h-5 w-5 mr-2" />
              Actions Triggered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700">89</div>
            <div className="text-sm text-purple-600 mt-1">Automated interventions</div>
            <div className="text-xs text-purple-600 mt-2">
              67% success rate
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Insights Tabs */}
      <Tabs defaultValue="insights" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm">
          <TabsTrigger value="insights" className="flex items-center">
            <Lightbulb className="h-4 w-4 mr-2" />
            AI Insights
          </TabsTrigger>
          <TabsTrigger value="predictions" className="flex items-center">
            <Eye className="h-4 w-4 mr-2" />
            Predictions
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center">
            <BarChart3 className="h-4 w-4 mr-2" />
            Model Stats
          </TabsTrigger>
        </TabsList>

        <TabsContent value="insights" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2 text-indigo-600" />
                Key AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {insights.map((insight) => {
                  const IconComponent = getInsightIcon(insight.type);
                  return (
                    <div
                      key={insight.id}
                      className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full ${getInsightColor(insight.color)}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-slate-900">{insight.title}</h3>
                            <div className="flex items-center space-x-2">
                              <Badge variant={insight.impact === 'Critical' ? 'destructive' : insight.impact === 'High' ? 'default' : 'secondary'}>
                                {insight.impact} Impact
                              </Badge>
                              <span className="text-sm text-slate-500">
                                {insight.confidence}% confidence
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-slate-600 mb-3">{insight.description}</p>
                          
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5" />
                              <div>
                                <div className="text-xs font-medium text-blue-800 mb-1">Recommended Action</div>
                                <div className="text-sm text-blue-700">{insight.recommendation}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-purple-600" />
                High-Risk Predictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictions.map((prediction, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900">{prediction.customer}</h3>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-slate-600">
                          Predicted churn in {prediction.timeframe}
                        </span>
                        <div className={`text-xl font-bold ${getRiskColor(prediction.churnProbability)}`}>
                          {prediction.churnProbability}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Progress 
                        value={prediction.churnProbability} 
                        className="h-2"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-700 mb-2">Key Risk Factors:</div>
                        <div className="flex flex-wrap gap-2">
                          {prediction.keyFactors.map((factor, factorIndex) => (
                            <Badge key={factorIndex} variant="outline" className="text-xs">
                              {factor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-700 mb-2">Recommendation:</div>
                        <div className="text-sm text-blue-600">{prediction.recommendation}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Model Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(modelPerformance[selectedModel]).map(([metric, value]) => (
                    <div key={metric} className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 capitalize">
                        {metric.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Progress value={value} className="w-24 h-2" />
                        <span className="text-sm font-medium">{value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Model Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.keys(modelPerformance).map((model) => (
                    <Button
                      key={model}
                      variant={selectedModel === model ? "default" : "outline"}
                      className="w-full justify-start capitalize"
                      onClick={() => setSelectedModel(model)}
                    >
                      {model} Prediction Model
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PredictionInsights;
