
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Bell, 
  BarChart3, 
  Zap
} from 'lucide-react';
import { Feature } from './types';

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze customer behavior patterns to predict churn risk with unprecedented accuracy.",
    color: "from-cyan-600 to-blue-600"
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Get instant notifications when customers show signs of disengagement, enabling proactive intervention strategies.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: BarChart3,
    title: "Predictive Insights",
    description: "Forecast customer lifetime value and identify expansion opportunities with data-driven recommendations.",
    color: "from-indigo-600 to-purple-600"
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Trigger personalized re-engagement campaigns automatically based on customer health score changes.",
    color: "from-purple-600 to-pink-600"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative z-10 px-6 py-32 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30 px-6 py-3 text-sm font-medium mb-8">
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
  );
};
