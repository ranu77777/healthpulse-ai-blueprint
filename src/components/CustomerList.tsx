
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  TrendingDown, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock customer data
  const customers = [
    {
      id: 1,
      name: 'Acme Corporation',
      contact: 'Sarah Johnson',
      email: 'sarah@acme.com',
      phone: '+1 (555) 123-4567',
      healthScore: 92,
      status: 'healthy',
      lastActivity: '2 hours ago',
      revenue: 25000,
      trend: 'up',
      riskFactors: []
    },
    {
      id: 2,
      name: 'TechFlow Solutions',
      contact: 'Michael Chen',
      email: 'michael@techflow.com',
      phone: '+1 (555) 234-5678',
      healthScore: 68,
      status: 'at-risk',
      lastActivity: '5 days ago',
      revenue: 15000,
      trend: 'down',
      riskFactors: ['Low engagement', 'Delayed payments']
    },
    {
      id: 3,
      name: 'Global Dynamics',
      contact: 'Emma Rodriguez',
      email: 'emma@globaldynamics.com',
      phone: '+1 (555) 345-6789',
      healthScore: 35,
      status: 'critical',
      lastActivity: '12 days ago',
      revenue: 45000,
      trend: 'down',
      riskFactors: ['No recent login', 'Support tickets', 'Contract expiring']
    },
    {
      id: 4,
      name: 'StartupXYZ',
      contact: 'David Kim',
      email: 'david@startupxyz.com',
      phone: '+1 (555) 456-7890',
      healthScore: 85,
      status: 'healthy',
      lastActivity: '1 day ago',
      revenue: 8000,
      trend: 'up',
      riskFactors: []
    },
    {
      id: 5,
      name: 'Enterprise Inc',
      contact: 'Lisa Thompson',
      email: 'lisa@enterprise.com',
      phone: '+1 (555) 567-8901',
      healthScore: 58,
      status: 'at-risk',
      lastActivity: '3 days ago',
      revenue: 75000,
      trend: 'down',
      riskFactors: ['Decreased usage', 'Competitor evaluation']
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'at-risk':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'critical':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'healthy':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Healthy</Badge>;
      case 'at-risk':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">At Risk</Badge>;
      case 'critical':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>;
      default:
        return null;
    }
  };

  const getHealthColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.contact.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || customer.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            Customer Health Overview
          </CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-md text-sm bg-white"
            >
              <option value="all">All Status</option>
              <option value="healthy">Healthy</option>
              <option value="at-risk">At Risk</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                      {customer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-slate-900">{customer.name}</h3>
                    <p className="text-sm text-slate-600">{customer.contact}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="flex items-center text-xs text-slate-500">
                        <Mail className="h-3 w-3 mr-1" />
                        {customer.email}
                      </span>
                      <span className="flex items-center text-xs text-slate-500">
                        <Phone className="h-3 w-3 mr-1" />
                        {customer.phone}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Health Score</div>
                    <div className={`text-2xl font-bold ${getHealthColor(customer.healthScore)}`}>
                      {customer.healthScore}%
                    </div>
                    <Progress value={customer.healthScore} className="w-20 h-2 mt-1" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Revenue</div>
                    <div className="text-lg font-semibold text-slate-900">
                      ${customer.revenue.toLocaleString()}
                    </div>
                    <div className="flex items-center justify-center mt-1">
                      {customer.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600" />
                      )}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Status</div>
                    <div className="flex items-center justify-center space-x-1">
                      {getStatusIcon(customer.status)}
                      {getStatusBadge(customer.status)}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Last active: {customer.lastActivity}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    {customer.status !== 'healthy' && (
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                        Take Action
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              {customer.riskFactors.length > 0 && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-sm font-medium text-red-800 mb-2">Risk Factors:</div>
                  <div className="flex flex-wrap gap-2">
                    {customer.riskFactors.map((factor, index) => (
                      <Badge key={index} variant="destructive" className="text-xs">
                        {factor}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">No customers found matching your criteria.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomerList;
