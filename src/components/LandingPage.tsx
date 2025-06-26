
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
  BarChart3,
  Clock,
  Target,
  DollarSign,
  Brain
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
      {/* Hero Section - Russell Brunson Style Hook */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100 text-lg px-4 py-2">
              🚨 STOP Losing $1M+ in Revenue to Customer Churn!
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              The $2.3M Customer
              <br />
              Churn "Kill Switch"
            </h1>
            <p className="text-2xl text-slate-600 mb-4 max-w-4xl mx-auto font-medium">
              How 500+ SaaS Companies Use This AI-Powered "Early Warning System" 
              to Predict Customer Churn 30 Days Before It Happens...
            </p>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              <strong>And Save An Average of $2.3M in Annual Revenue</strong> (Even If You've Never Used AI Before)
            </p>
            
            {/* Urgency Timer */}
            <div className="mb-8">
              <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-300 text-lg px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Limited Time: Free Enterprise Trial (Normally $2,997/month)
              </Badge>
            </div>

            {/* Lead Magnet Form - Value Stack */}
            <Card className="max-w-lg mx-auto bg-white/90 backdrop-blur-sm shadow-2xl border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-center text-2xl">
                  Get Your FREE $10,000 Churn Risk Assessment
                </CardTitle>
                <div className="text-center text-blue-100">
                  <p className="text-lg font-semibold">Discover EXACTLY Which Customers You're About to Lose</p>
                  <p className="text-sm">(And How Much Revenue Is At Risk)</p>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Instant AI-powered customer health analysis</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Personalized churn prevention strategy</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Revenue protection recommendations</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Access to enterprise dashboard (30 days FREE)</span>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your business email to unlock your assessment"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-center text-lg h-12"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-xl py-4 font-bold shadow-lg"
                  >
                    YES! Get My FREE $10,000 Assessment <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                  <div className="text-center space-y-1">
                    <p className="text-sm text-slate-500">
                      ✅ No credit card • ✅ Instant access • ✅ 100% secure
                    </p>
                    <p className="text-xs text-slate-400">
                      Join 500+ companies already saving millions with HealthPulse
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof - Enterprise Focus */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Trusted by Fortune 500 Companies & Fast-Growing SaaS
            </h2>
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <span className="ml-2 text-lg font-semibold text-slate-600">4.9/5 (500+ Enterprise Reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">$127M</div>
              <p className="text-slate-600 font-medium">Total Revenue Saved From Churn</p>
              <p className="text-sm text-slate-500">Across all customers in 2024</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">89%</div>
              <p className="text-slate-600 font-medium">Average Churn Reduction</p>
              <p className="text-sm text-slate-500">Within first 90 days</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">30 Days</div>
              <p className="text-slate-600 font-medium">Early Warning System</p>
              <p className="text-sm text-slate-500">Predict churn before it happens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Agitation - Russell Brunson Style */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              The "Silent Profit Killer" Bleeding Your SaaS Dry...
            </h2>
            <p className="text-2xl text-red-600 font-semibold mb-8">
              (And Why Traditional "Analytics" Can't Save You)
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/90 p-8 rounded-lg shadow-xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-600 mb-4">❌ What's REALLY Happening To Your Business:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span><strong>$1.2M average annual revenue loss</strong> per 100 customers that churn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span><strong>23% of customers churn silently</strong> without any warning signs in your current tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span><strong>6-12 months to replace</strong> each churned customer (if you're lucky)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span><strong>5x more expensive</strong> to acquire new customers than retain existing ones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">•</span>
                  <span><strong>Most tools show what happened</strong> - not what's about to happen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/90 p-8 rounded-lg shadow-xl border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-600 mb-4">✅ The HealthPulse Advantage:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span><strong>30-day advance warning</strong> before customers churn with 94.2% accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span><strong>Automated intervention workflows</strong> that save 89% of at-risk customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span><strong>Real-time health scoring</strong> for every customer interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span><strong>$2.3M average annual savings</strong> for our enterprise customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">•</span>
                  <span><strong>Enterprise-grade security</strong> with SOC2 compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits - Russell Brunson Benefits Stack */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              The Complete "Churn Prevention Arsenal"
            </h2>
            <p className="text-xl text-slate-600 mb-2">Everything You Need to Protect Your Revenue</p>
            <p className="text-lg text-slate-500">(Normally $50,000+ to build in-house)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center text-xl">AI Predictive Engine</CardTitle>
                <p className="text-center text-slate-500 text-sm">Value: $15,000</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Advanced machine learning algorithms analyze 200+ customer signals to predict churn 30 days in advance.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    94.2% prediction accuracy
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time risk scoring
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Behavioral pattern analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-500">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-center text-xl">Automated Interventions</CardTitle>
                <p className="text-center text-slate-500 text-sm">Value: $12,000</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Triggered workflows automatically engage at-risk customers with personalized retention campaigns.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Smart email sequences
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    CS team alerts
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personalized offers
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-xl">Revenue Protection</CardTitle>
                <p className="text-center text-slate-500 text-sm">Value: $25,000</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Track and protect every dollar of revenue with enterprise-grade analytics and reporting.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Revenue impact tracking
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Executive dashboards
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ROI reporting
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-slate-700 mb-2">Total Value: $52,000+</p>
            <p className="text-3xl font-bold text-green-600">Your Investment: FREE Trial</p>
          </div>
        </div>
      </section>

      {/* Testimonials - Enterprise Social Proof */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Real Results From Real Companies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/90 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Badge className="ml-2 bg-green-100 text-green-800">$3.2M SAVED</Badge>
                </div>
                <blockquote className="text-slate-600 mb-4 text-lg">
                  "HealthPulse saved us $3.2M in the first year alone. We went from losing 15% of our customers annually to just 2%. The AI predictions are scary accurate - it's like having a crystal ball for customer behavior."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SJ
                  </div>
                  <div className="ml-3">
                    <div className="font-bold text-slate-800">Sarah Johnson</div>
                    <div className="text-sm text-slate-600">Chief Revenue Officer, TechCorp ($50M ARR)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Badge className="ml-2 bg-green-100 text-green-800">89% REDUCTION</Badge>
                </div>
                <blockquote className="text-slate-600 mb-4 text-lg">
                  "We reduced churn by 89% in just 6 months. The 30-day early warning system is a game-changer. We now save customers before they even know they want to leave. ROI was 2,400% in year one."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MC
                  </div>
                  <div className="ml-3">
                    <div className="font-bold text-slate-800">Michael Chen</div>
                    <div className="text-sm text-slate-600">Founder & CEO, GrowthLabs ($25M ARR)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - Russell Brunson Close */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-6">
            Don't Let Another Customer Slip Through Your Fingers
          </h2>
          <p className="text-2xl mb-4 opacity-90">
            Every Day You Wait, You're Losing $3,200+ in Preventable Churn
          </p>
          <p className="text-xl mb-8 opacity-80">
            Get Your FREE Enterprise Trial + $10,000 Churn Assessment (Limited Time)
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Target className="h-12 w-12 mx-auto mb-2 text-yellow-300" />
                  <h3 className="font-bold text-lg">Instant Setup</h3>
                  <p className="text-sm opacity-80">Live in 5 minutes</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto mb-2 text-yellow-300" />
                  <h3 className="font-bold text-lg">Enterprise Security</h3>
                  <p className="text-sm opacity-80">SOC2 compliant</p>
                </div>
                <div className="text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-2 text-yellow-300" />
                  <h3 className="font-bold text-lg">Guaranteed ROI</h3>
                  <p className="text-sm opacity-80">Or money back</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your business email to start saving revenue"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center bg-white/20 border-white/30 text-white placeholder-white/70 text-lg h-14"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-white text-red-600 hover:bg-white/90 text-2xl py-4 font-bold shadow-lg"
                >
                  YES! Start My FREE Trial + Get My Assessment <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <div className="text-center">
                  <p className="text-lg font-semibold opacity-90 mb-2">
                    🔥 WARNING: Only 50 Free Trials Available This Month 🔥
                  </p>
                  <p className="text-sm opacity-70">
                    ⚡ 5-minute setup • 🎯 Instant results • 💰 No credit card required • 🔒 100% secure
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <p className="text-sm opacity-60">
            * Based on average customer data from 500+ SaaS companies using HealthPulse Enterprise
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
