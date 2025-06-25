
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: (email: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onGetStarted(email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              🚀 AI-Powered Customer Success Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Predict & Prevent
              <br />
              Customer Churn
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Stop losing customers! Our AI predicts which customers are at risk 94.2% accurately, 
              helping you save millions in revenue and boost customer lifetime value.
            </p>
            
            {/* Lead Magnet Form */}
            <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-2xl">
              <CardHeader>
                <CardTitle className="text-center text-slate-800">
                  Get FREE Churn Risk Assessment
                </CardTitle>
                <p className="text-sm text-slate-600 text-center">
                  Discover which customers you're about to lose (worth $10,000+ value)
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-center"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                  >
                    Get My Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-slate-500 text-center">
                    No credit card required • 5-minute setup • Instant results
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Trusted by 500+ Growing Companies
            </h2>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-slate-600">4.9/5 (200+ reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.3M</div>
              <p className="text-slate-600">Revenue saved from churn prevention</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">67%</div>
              <p className="text-slate-600">Reduction in customer churn</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">94.2%</div>
              <p className="text-slate-600">AI prediction accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Agitation */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Are You Losing Customers Without Even Knowing It?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">The Hidden Problem</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li>• 23% of customers churn without warning signs</li>
                  <li>• Average cost to replace a customer: $1,500+</li>
                  <li>• 86% of companies react too late</li>
                  <li>• Most tools only show what happened, not what will happen</li>
                </ul>
              </div>
              <div className="bg-white/80 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-3">The Solution</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li>• AI predicts churn 30 days in advance</li>
                  <li>• Automated intervention workflows</li>
                  <li>• Real-time health score monitoring</li>
                  <li>• Proven to reduce churn by 67%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Everything You Need to Keep Customers Happy
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI Health Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Get real-time customer health scores with 94.2% accuracy. Know exactly which customers need attention.</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time monitoring
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Predictive analytics
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Automated Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Get instant notifications when customers show churn signals. Take action before it's too late.</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Instant notifications
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Action recommendations
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Revenue Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Protect millions in revenue by preventing churn. Our customers save an average of $2.3M annually.</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Revenue tracking
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ROI reporting
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <blockquote className="text-slate-600 mb-4">
                  "HealthPulse helped us reduce churn by 72% in just 6 months. We saved over $1.8M in revenue that would have been lost to churn."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    SJ
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-slate-800">Sarah Johnson</div>
                    <div className="text-sm text-slate-600">VP Customer Success, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <blockquote className="text-slate-600 mb-4">
                  "The AI predictions are incredibly accurate. We now intervene 30 days before customers would churn. Game-changer for our business."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    MC
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-slate-800">Michael Chen</div>
                    <div className="text-sm text-slate-600">CEO, GrowthLabs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Stop Losing Customers?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ companies already using HealthPulse to predict and prevent churn
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-white text-blue-600 hover:bg-white/90 text-lg py-3 font-semibold"
                >
                  Start Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm opacity-70">
                  ⚡ Setup in 5 minutes • 🎯 See results instantly • 💰 No credit card required
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
