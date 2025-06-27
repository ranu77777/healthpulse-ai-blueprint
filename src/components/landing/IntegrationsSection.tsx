
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Integration } from './types';

const integrations: Integration[] = [
  { name: 'HubSpot', icon: '🎯', color: 'from-orange-500 to-red-500' },
  { name: 'Slack', icon: '💬', color: 'from-purple-500 to-pink-500' },
  { name: 'Zendesk', icon: '🎫', color: 'from-green-500 to-emerald-500' },
  { name: 'Intercom', icon: '💙', color: 'from-blue-500 to-cyan-500' },
  { name: 'Mailjet', icon: '📧', color: 'from-indigo-500 to-purple-500' },
  { name: 'OpenAI', icon: '🤖', color: 'from-gray-700 to-gray-900' }
];

export const IntegrationsSection = () => {
  return (
    <section id="integrations" className="relative z-10 px-6 py-32">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30 px-6 py-3 text-sm font-medium mb-8">
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
  );
};
