
import React from 'react';
import AIWorkflowsPanel from '@/components/AIWorkflowsPanel';

const Workflows = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">AI Workflows</h1>
          <p className="text-slate-600">Automate customer success with AI-powered workflows and integrations</p>
        </div>
        <AIWorkflowsPanel />
      </div>
    </div>
  );
};

export default Workflows;
