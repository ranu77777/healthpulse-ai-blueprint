
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Activity, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Bell,
  Mail,
  Play,
  Globe,
  Lock,
  Clock,
  Star
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: (email: string) => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onGetStarted(email);
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze customer behavior patterns to predict churn risk with unprecedented accuracy.",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Get instant notifications when customers show signs of disengagement, enabling proactive intervention strategies.",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: BarChart3,
      title: "Predictive Insights",
      description: "Forecast customer lifetime value and identify expansion opportunities with data-driven recommendations.",
      color: "from-emerald-600 to-emerald-800"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Trigger personalized re-engagement campaigns automatically based on customer health score changes.",
      color: "from-orange-600 to-orange-800"
    }
  ];

  const integrations = [
    { name: 'HubSpot', icon: '🎯', color: 'from-orange-500 to-red-500' },
    { name: 'Slack', icon: '💬', color: 'from-purple-500 to-pink-500' },
    { name: 'Zendesk', icon: '🎫', color: 'from-green-500 to-emerald-500' },
    { name: 'Intercom', icon: '💙', color: 'from-blue-500 to-cyan-500' },
    { name: 'Mailjet', icon: '📧', color: 'from-indigo-500 to-purple-500' },
    { name: 'OpenAI', icon: '🤖', color: 'from-gray-700 to-gray-900' }
  ];

  const stats = [
    { value: "94.2%", label: "Prediction Accuracy", change: "+12%" },
    { value: "67%", label: "Churn Reduction", change: "+23%" },
    { value: "$2.3M", label: "Revenue Saved", change: "+156%" },
    { value: "500+", label: "Enterprise Clients", change: "+89%" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Enhanced Background with Better Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 border-b border-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  HealthPulse
                </span>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-3 py-1">
              Enterprise
            </Badge>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Features</a>
            <a href="#integrations" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Integrations</a>
            <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Pricing</a>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className={`space-y-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-8">
                <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-3 text-sm font-medium">
                  🚀 AI-Powered Churn Prevention Platform
                </Badge>
                
                <div className="space-y-6">
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                    Stop Customer Churn
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                      Before It Happens
                    </span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                    Predict customer churn with 94.2% accuracy using advanced AI. Get real-time health scores, 
                    automated alerts, and actionable insights to save revenue and boost retention.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-16 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 backdrop-blur-sm text-lg"
                    required
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="h-16 px-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold text-lg shadow-xl"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              </form>

              <div className="flex flex-wrap items-center gap-8 text-sm text-slate-400">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="font-medium">14-day free trial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="font-medium">Setup in 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview - Fixed the white box issue */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
                <Card className="relative bg-slate-800/80 backdrop-blur-xl border-slate-700 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">Customer Health Dashboard</h3>
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
                          Live
                        </Badge>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                          <div key={index} className="bg-gradient-to-br from-slate-700/50 to-slate-800/80 rounded-2xl p-6 border border-slate-600/30">
                            <div className="flex items-center justify-between mb-2">
                              <div className="text-3xl font-bold text-white">{stat.value}</div>
                              <div className="text-emerald-400 text-sm font-medium">{stat.change}</div>
                            </div>
                            <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Customer List Preview */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium text-slate-200">Recent Alerts</h4>
                        <div className="space-y-3">
                          {[
                            { name: "Acme Corp", score: 92, status: "healthy", trend: "up" },
                            { name: "TechFlow", score: 68, status: "at_risk", trend: "down" },
                            { name: "DataCore", score: 35, status: "critical", trend: "down" }
                          ].map((customer, index) => (
                            <div key={index} className="flex items-center justify-between bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
                              <div className="flex items-center space-x-4">
                                <div className={`w-4 h-4 rounded-full ${
                                  customer.status === 'healthy' ? 'bg-emerald-400' :
                                  customer.status === 'at_risk' ? 'bg-yellow-400' : 'bg-red-400'
                                }`}></div>
                                <span className="text-white font-medium">{customer.name}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="text-white font-bold text-lg">{customer.score}%</span>
                                <TrendingUp className={`h-5 w-5 ${
                                  customer.trend === 'up' ? 'text-emerald-400' : 'text-red-400 rotate-180'
                                }`} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-32 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-3 text-sm font-medium mb-8">
              Enterprise-Grade Features
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to prevent churn and grow revenue with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-xl border-slate-700 hover:border-slate-600 transition-all duration-500 hover:transform hover:scale-105 group">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-6 py-3 text-sm font-medium mb-8">
            Seamless Integrations
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Connect Everything
          </h2>
          <p className="text-xl text-slate-300 mb-20 max-w-3xl mx-auto leading-relaxed">
            Integrate with your existing tools in seconds. No complex setup required.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-xl border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${integration.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{integration.icon}</span>
                  </div>
                  <div className="text-sm text-slate-300 font-semibold">{integration.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl lg:text-7xl font-bold mb-10 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Ready to Stop Losing Customers?
          </h2>
          <p className="text-xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Join forward-thinking companies using HealthPulse to predict and prevent customer churn with AI
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-16 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 backdrop-blur-sm text-lg"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-16 px-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold text-lg shadow-xl"
              >
                Start Free Trial
              </Button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-slate-400">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-emerald-400" />
              <span className="font-medium">5-min Setup</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-6 w-6 text-purple-400" />
              <span className="font-medium">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">HealthPulse</span>
                <Badge className="ml-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 text-xs">
                  Enterprise
                </Badge>
              </div>
            </div>
            <div className="text-slate-400 font-medium">
              © 2024 HealthPulse. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
