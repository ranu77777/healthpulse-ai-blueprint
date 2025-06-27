
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { LandingPageProps, Stat } from './types';

const stats: Stat[] = [
  { value: "94.2%", label: "Prediction Accuracy", change: "+12%" },
  { value: "67%", label: "Churn Reduction", change: "+23%" },
  { value: "$2.3M", label: "Revenue Saved", change: "+156%" },
  { value: "500+", label: "Enterprise Clients", change: "+89%" }
];

export const HeroSection = ({ onGetStarted }: LandingPageProps) => {
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

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30 px-6 py-3 text-sm font-medium">
                🚀 AI-Powered Churn Prevention Platform
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Stop Customer Churn
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mt-2">
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
                  className="h-16 px-10 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 font-semibold text-lg shadow-xl"
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

          {/* Dashboard Preview */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
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
  );
};
