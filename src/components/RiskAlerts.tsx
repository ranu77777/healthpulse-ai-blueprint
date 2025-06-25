
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Clock, 
  TrendingDown, 
  CreditCard, 
  MessageSquare, 
  UserX,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

const RiskAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'churn_risk',
      severity: 'high',
      customer: 'Global Dynamics',
      message: 'Customer shows strong churn signals',
      details: 'No login activity for 12 days, 3 unresolved support tickets, contract expires in 30 days',
      healthScore: 35,
      timestamp: '2 hours ago',
      actions: ['Send retention email', 'Schedule CS call', 'Offer discount'],
      icon: UserX,
      color: 'red'
    },
    {
      id: 2,
      type: 'payment_issue',
      severity: 'high',
      customer: 'TechFlow Solutions',
      message: 'Payment method declined',
      details: 'Last 2 payment attempts failed, account suspension in 5 days',
      healthScore: 68,
      timestamp: '4 hours ago',
      actions: ['Contact billing', 'Update payment method', 'Send invoice'],
      icon: CreditCard,
      color: 'red'
    },
    {
      id: 3,
      type: 'engagement_drop',
      severity: 'medium',
      customer: 'Enterprise Inc',
      message: 'Significant usage decrease',
      details: '60% drop in feature usage over the last 14 days',
      healthScore: 58,
      timestamp: '1 day ago',
      actions: ['Schedule check-in', 'Send feature guide', 'Offer training'],
      icon: TrendingDown,
      color: 'yellow'
    },
    {
      id: 4,
      type: 'support_escalation',
      severity: 'medium',
      customer: 'StartupXYZ',
      message: 'Multiple support tickets',
      details: '5 support tickets in the last week, satisfaction score declining',
      healthScore: 85,
      timestamp: '6 hours ago',
      actions: ['Escalate to senior support', 'Schedule call', 'Product feedback'],
      icon: MessageSquare,
      color: 'yellow'
    },
    {
      id: 5,
      type: 'contract_expiry',
      severity: 'low',
      customer: 'Acme Corporation',
      message: 'Contract renewal approaching',
      details: 'Annual contract expires in 45 days, renewal discussion needed',
      healthScore: 92,
      timestamp: '1 day ago',
      actions: ['Schedule renewal call', 'Prepare proposal', 'Review usage'],
      icon: Calendar,
      color: 'blue'
    }
  ];

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium Priority</Badge>;
      case 'low':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Low Priority</Badge>;
      default:
        return null;
    }
  };

  const getIconColor = (color) => {
    switch (color) {
      case 'red':
        return 'text-red-600 bg-red-100';
      case 'yellow':
        return 'text-yellow-600 bg-yellow-100';
      case 'blue':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-600">High Priority Alerts</p>
                <p className="text-2xl font-bold text-red-700">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600">Medium Priority</p>
                <p className="text-2xl font-bold text-yellow-700">2</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Low Priority</p>
                <p className="text-2xl font-bold text-blue-700">1</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
            Active Risk Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => {
              const IconComponent = alert.icon;
              return (
                <div
                  key={alert.id}
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${getIconColor(alert.color)}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-slate-900">{alert.customer}</h3>
                          {getSeverityBadge(alert.severity)}
                          <span className="text-sm text-slate-500">{alert.timestamp}</span>
                        </div>
                        <div className="text-sm font-medium text-slate-600">
                          Health Score: <span className={`font-bold ${alert.healthScore < 50 ? 'text-red-600' : alert.healthScore < 70 ? 'text-yellow-600' : 'text-green-600'}`}>
                            {alert.healthScore}%
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm font-medium text-slate-800 mb-2">{alert.message}</p>
                      <p className="text-sm text-slate-600 mb-4">{alert.details}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {alert.actions.map((action, index) => (
                            <Button
                              key={index}
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              {action}
                            </Button>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Mail className="h-3 w-3 mr-1" />
                            Email
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                            View Customer
                          </Button>
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
    </div>
  );
};

export default RiskAlerts;
