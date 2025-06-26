
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Brain, 
  Zap, 
  BarChart3,
  ArrowRight,
  Check,
  Users,
  TrendingDown,
  Clock,
  Shield,
  Database,
  MessageSquare
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Churn Is Quietly 
              <span className="text-red-600"> Killing</span> Your MRR
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get a 30-day early warning before customers disappear — powered by simple AI and automations.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base"
                />
                <Button 
                  type="submit" 
                  className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Early Access
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Join 200+ founders building better retention
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Hidden Revenue Killer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              By the time you notice churn, it's already too late
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8 text-center">
                <TrendingDown className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  By the time customers cancel, it's already too late.
                </h3>
                <p className="text-gray-600">
                  Most cancellations happen without warning, leaving you reactive instead of proactive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8 text-center">
                <BarChart3 className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Analytics show what happened, not what's coming.
                </h3>
                <p className="text-gray-600">
                  Traditional metrics are backwards-looking. You need predictive insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Most churn goes silent until it hurts your revenue.
                </h3>
                <p className="text-gray-600">
                  Customers don't always complain before they leave. Silent churn is the deadliest.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              HealthPulse predicts churn and helps you act before it happens
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple AI that monitors customer behavior and triggers interventions before it's too late
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Churn prediction using 200+ behavior signals
              </h3>
              <p className="text-gray-600">
                AI analyzes login patterns, feature usage, support tickets, and billing behavior to predict risk.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Simple intervention workflows
              </h3>
              <p className="text-gray-600">
                Automatic alerts, renewal offers, and personalized outreach triggered by risk scores.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real-time customer health scores
              </h3>
              <p className="text-gray-600">
                Visual dashboard showing which customers need attention and why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Three Core Features That Prevent Churn
            </h2>
            <p className="text-lg text-gray-600">
              Built for early-stage SaaS teams who need results, not complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">🧠 AI Signals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Behavioral churn detection using machine learning to identify at-risk customers 30 days early.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Login frequency tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Feature usage patterns
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Support ticket sentiment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">⚙️ Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  No-code outreach triggers that activate when customers show risk signals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Slack alerts for your team
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Email sequences
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Renewal discount offers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">📊 Health Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Visual risk monitoring per customer with actionable insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Real-time health scores
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Risk trend analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Intervention recommendations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Build It for Free */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">
              ✅ Build It Today
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Use These Free Tools to Build Your Own
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to launch without spending a dime
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Brain className="h-6 w-6 text-indigo-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">AI/NLP</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  GPT-3.5-turbo with OpenAI API ($5 credit for new accounts)
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <code className="text-gray-700">
                    Use HTTP plugin in Lovable<br/>
                    Model: "gpt-3.5-turbo"
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Database className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">Backend & DB</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Supabase (Free PostgreSQL + Auth)
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <code className="text-gray-700">
                    Free tier: 500MB DB<br/>
                    50,000 requests/month
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">CRM</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  HubSpot Free CRM API
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <code className="text-gray-700">
                    1M contacts free<br/>
                    Full API access
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">Slack Alerts</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Webhook integration for team notifications
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <code className="text-gray-700">
                    POST to webhook URL<br/>
                    "⚠️ High Churn Risk: Customer..."
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">Automation</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Make.com (1,000 ops/mo) or Pipedream (10K events/mo)
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <code className="text-gray-700">
                    No-code workflows<br/>
                    API connections
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">Payments</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Stripe Free Developer Keys
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <code className="text-gray-700">
                    Test mode unlimited<br/>
                    Full API access
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Helping startup founders stay ahead of churn
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <p className="text-lg text-gray-600 italic mb-6">
              "We used to lose customers without warning. Now we get 30-day alerts and save 80% of at-risk accounts."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-indigo-600 font-semibold">JS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Jamie Smith</div>
                <div className="text-sm text-gray-600">Founder, SaaS Startup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join early access and try the churn kill switch
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get 30-day churn predictions and simple automations that save customers before they leave.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base bg-white border-white"
              />
              <Button 
                type="submit" 
                className="h-12 px-6 bg-white text-indigo-600 hover:bg-gray-50"
              >
                Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-indigo-200 mt-4">
              No credit card required • 14-day free trial • Setup in 5 minutes
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
