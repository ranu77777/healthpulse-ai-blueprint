
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
  Clock
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
      title: "AI-Powered Health Scoring",
      description: "Advanced machine learning algorithms analyze customer behavior patterns to predict churn risk with 94.2% accuracy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bell,
      title: "Real-Time Risk Alerts",
      description: "Get instant notifications when customers show signs of disengagement, enabling proactive intervention.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast customer lifetime value and identify expansion opportunities before your competitors.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Trigger personalized re-engagement campaigns based on customer health score changes.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const integrations = [
    { name: 'HubSpot', icon: '🎯' },
    { name: 'Slack', icon: '💬' },
    { name: 'Zendesk', icon: '🎫' },
    { name: 'Intercom', icon: '💙' },
    { name: 'Mailjet', icon: '📧' },
    { name: 'OpenAI', icon: '🤖' }
  ];

  const stats = [
    { value: "94.2%", label: "Prediction Accuracy" },
    { value: "67%", label: "Churn Reduction" },
    { value: "$2.3M", label: "Revenue Saved" },
    { value: "500+", label: "Happy Customers" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Activity className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              HealthPulse
            </span>
            <Badge variant="outline" className="text-blue-400 border-blue-400/50 bg-blue-400/10">
              Enterprise
            </Badge>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#integrations" className="text-slate-300 hover:text-blue-400 transition-colors">Integrations</a>
            <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors">Pricing</a>
            <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white transition-all">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  🚀 AI-Powered Churn Prevention
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Stop Customer Churn
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    Before It Happens
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Predict customer churn with 94.2% accuracy using AI. Get real-time health scores, 
                  automated alerts, and actionable insights to save revenue and boost retention.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-14 bg-white/10 border-white/20 text-white placeholder:text-slate-400 backdrop-blur-sm"
                    required
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="h-14 px-8 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 font-semibold"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Interactive Dashboard Preview */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-2xl opacity-20"></div>
                <Card className="relative bg-slate-800/50 backdrop-blur-xl border-slate-700/50 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">Customer Health Dashboard</h3>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                          Live
                        </Badge>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                          <div key={index} className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Customer List Preview */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-slate-300">Recent Alerts</h4>
                        <div className="space-y-2">
                          {[
                            { name: "Acme Corp", score: 92, status: "healthy", trend: "up" },
                            { name: "TechFlow", score: 68, status: "at_risk", trend: "down" },
                            { name: "DataCore", score: 35, status: "critical", trend: "down" }
                          ].map((customer, index) => (
                            <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3 border border-slate-600/20">
                              <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  customer.status === 'healthy' ? 'bg-green-400' :
                                  customer.status === 'at_risk' ? 'bg-yellow-400' : 'bg-red-400'
                                }`}></div>
                                <span className="text-white text-sm font-medium">{customer.name}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-semibold">{customer.score}%</span>
                                <TrendingUp className={`h-4 w-4 ${
                                  customer.trend === 'up' ? 'text-green-400' : 'text-red-400 rotate-180'
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
      <section id="features" className="relative z-10 px-6 py-24 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to prevent churn and grow revenue with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-105 group">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Seamless Integrations
          </h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
            Connect with your existing tools in seconds. No complex setup required.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{integration.icon}</div>
                  <div className="text-sm text-slate-300 font-medium">{integration.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Ready to Stop Losing Customers?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join forward-thinking companies using HealthPulse to predict and prevent customer churn with AI
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-white/10 border-white/20 text-white placeholder:text-slate-400 backdrop-blur-sm"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-14 px-8 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 font-semibold"
              >
                Start Free Trial
              </Button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-400" />
              <span>5-min Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-purple-400" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Activity className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white">HealthPulse</span>
              <Badge variant="outline" className="text-blue-400 border-blue-400/50 bg-blue-400/10 text-xs">
                Enterprise
              </Badge>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 HealthPulse. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
