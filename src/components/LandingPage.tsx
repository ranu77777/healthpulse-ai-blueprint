
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity } from 'lucide-react';
import { HeroSection } from './landing/HeroSection';
import { FeaturesSection } from './landing/FeaturesSection';
import { IntegrationsSection } from './landing/IntegrationsSection';
import { CTASection } from './landing/CTASection';
import { LandingPageProps } from './landing/types';

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 border-b border-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  HealthPulse
                </span>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30 px-3 py-1">
              Enterprise
            </Badge>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Features</a>
            <a href="#integrations" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Integrations</a>
            <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Pricing</a>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      <HeroSection onGetStarted={onGetStarted} />
      <FeaturesSection />
      <IntegrationsSection />
      <CTASection onGetStarted={onGetStarted} />

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">HealthPulse</span>
                <Badge className="ml-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30 text-xs">
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
