
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Home, 
  Users, 
  AlertTriangle, 
  Brain, 
  Settings, 
  BarChart3,
  Shield,
  LogOut,
  Zap
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const AppNavigationMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: AlertTriangle, label: 'Risk Alerts', path: '/alerts' },
    { icon: Brain, label: 'AI Insights', path: '/insights' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Zap, label: 'AI Workflows', path: '/workflows' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                HealthPulse
              </h1>
              <Badge variant="outline" className="text-xs font-medium">
                Enterprise
              </Badge>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuLink
                        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${
                          isActive(item.path) ? 'bg-accent text-accent-foreground' : ''
                        }`}
                        onClick={() => navigate(item.path)}
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              <Shield className="h-3 w-3 mr-1" />
              Secure
            </Badge>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavigationMenu;
