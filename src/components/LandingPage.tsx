
import React, { useState, useEffect } from 'react';
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
  Star,
  Shield,
  Database,
  MessageSquare,
  Activity,
  ChevronRight,
  Bell,
  Smartphone,
  Globe,
  Lock
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: (email: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">HealthPulse</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
              <Button variant="outline" size="sm" className="font-medium">Sign In</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-medium">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Ultimate <span className="text-blue-600">Customer</span>
              <br />Management Solution
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize Your Customer Management Effortlessly! Simplify health scores, 
              predict churn, track behaviors, and watch your business soar! Say goodbye 
              to chaos and hello to seamless operations with HealthPulse.
            </p>
            
            <Button 
              onClick={() => document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-xl mb-12"
            >
              Get started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Dashboard Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                {/* Mock Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Customer Health Central</h3>
                      <p className="text-sm text-gray-500">Real-time insights</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">20</div>
                    <div className="text-sm text-gray-500">Active customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">52</div>
                    <div className="text-sm text-gray-500">Expiring in 10 days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">80</div>
                    <div className="text-sm text-gray-500">Expiring in 30 days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">200</div>
                    <div className="text-sm text-gray-500">Total customers</div>
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-blue-600 font-medium">Customer Health Score Trends</div>
                </div>

                {/* Customer Renewals */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Customer Renewal</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                          <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">21 Jun</div>
                          <div className="text-sm text-gray-500">104 customers</div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                          <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">22 Jun</div>
                          <div className="text-sm text-gray-500">300 customers</div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 bg-indigo-500 rounded-full border-2 border-white"></div>
                          <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Today</div>
                          <div className="text-sm text-gray-500">50 customers</div>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock the Full Potential of Your Customer Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to predict churn, manage customers, and grow your revenue
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Customer Health Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Effortlessly manage health scores, track behavior patterns, and engage with your customers for a more personalized experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    Eliminate confusion with clear health indicators
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    Zero overdue with timely reminders on renewals
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    Manage clients in an effective, convenient and quicker way
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Customizable Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create and manage customizable health monitoring plans, ensuring flexibility to meet the unique needs of your clients.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">1 Month Gold</span>
                    <span className="font-bold">$999</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-3">30 days</div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">3 Month Gold</span>
                    <span className="font-bold">$2499</span>
                  </div>
                  <div className="text-sm text-gray-500">90 days</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Manage with a simple platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  HealthPulse can effortlessly handle customer transactions and maintain a clear overview of your business's health. 
                  Explore how our platform can streamline your operations and boost your bottom line.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    Manage your payments and customer lifecycle
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    Easily view and manage your balance
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    Paperless and secure
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Easily view and manage your customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HealthPulse has been in use with many businesses and over time it is perfected to maximum performance. 
              Every task is quicker than any other application on the market.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="space-y-6">
                <div className="flex items-center text-gray-600">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-4"></div>
                  <span>Eliminate lines and paperwork at the front desk</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-4"></div>
                  <span>Zero overdue with timely reminders on customer renewals</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-4"></div>
                  <span>Manage clients in an effective, convenient and quicker way</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-white rounded-[2rem] shadow-2xl border-8 border-gray-900 overflow-hidden">
                  <div className="bg-gray-900 h-6 w-32 rounded-b-lg mx-auto"></div>
                  <div className="p-4 h-full bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium">13:13</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Customer Health Central</h4>
                      <div className="bg-gray-100 rounded-lg p-3 mb-3">
                        <input placeholder="Search by name, phone or code" className="w-full text-xs bg-transparent" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                          <div>
                            <div className="font-medium text-xs">Gillian Trecia</div>
                            <div className="text-xs text-gray-500">+918976123501</div>
                            <div className="text-xs text-gray-500">3 Month gold</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium">DGYM6021</div>
                          <div className="text-xs text-gray-500">Expires in 14 days</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                          <div>
                            <div className="font-medium text-xs">Marvin Russel</div>
                            <div className="text-xs text-gray-500">+918976140294</div>
                            <div className="text-xs text-gray-500">6 Month platinum</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium">DGYM6234</div>
                          <div className="text-xs text-gray-500">Expires in 60 days</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                          <div>
                            <div className="font-medium text-xs">Daniel Martin</div>
                            <div className="text-xs text-gray-500">+918976140294</div>
                            <div className="text-xs text-gray-500">1 Month gold</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium">DGYM6101</div>
                          <div className="text-xs text-gray-500">Expires in 10 days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-white" id="email-signup">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to transform your customer management?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses using HealthPulse to predict churn and grow revenue
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button 
                type="submit" 
                className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
              >
                Get Started
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              14-day free trial • No credit card required • Setup in minutes
            </p>
          </form>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Enterprise Security
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Global Support
            </div>
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              GDPR Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-semibold">HealthPulse</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered customer health management platform that predicts churn and grows revenue.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 HealthPulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
