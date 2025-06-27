
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Clock, Globe } from 'lucide-react';
import { LandingPageProps } from './types';

export const CTASection = ({ onGetStarted }: LandingPageProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onGetStarted(email);
    }
  };

  return (
    <section className="relative z-10 px-6 py-32 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl lg:text-7xl font-bold mb-10 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
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
              className="h-16 px-10 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 font-semibold text-lg shadow-xl"
            >
              Start Free Trial
            </Button>
          </div>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-slate-400">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-cyan-400" />
            <span className="font-medium">Enterprise Security</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-emerald-400" />
            <span className="font-medium">5-min Setup</span>
          </div>
          <div className="flex items-center space-x-3">
            <Globe className="h-6 w-6 text-blue-400" />
            <span className="font-medium">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
