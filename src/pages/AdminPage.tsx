import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ZapierWebhookConfig } from '@/components/ZapierWebhookConfig';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Settings, Zap, BarChart3, Users, Mail, ExternalLink } from 'lucide-react';

const AdminPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    console.log('AdminPage: Component mounted');
    // Simulate loading to ensure page structure renders first
    const timer = setTimeout(() => {
      console.log('AdminPage: Loading complete');
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  const adminSections = [
    {
      title: 'Zapier Webhooks',
      description: 'Configure form submissions to send to your GHL account',
      icon: Zap,
      path: '/admin/webhooks',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      title: 'Form Analytics',
      description: 'View form submission rates and conversion data',
      icon: BarChart3,
      path: '/admin/analytics',
      status: 'Coming Soon',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: 'User Management',
      description: 'Manage admin users and permissions',
      icon: Users,
      path: '/admin/users',
      status: 'Coming Soon',
      statusColor: 'bg-gray-100 text-gray-800'
    },
    {
      title: 'Email Templates',
      description: 'Customize automated email responses',
      icon: Mail,
      path: '/admin/emails',
      status: 'Coming Soon',
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-8 space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage your website's lead capture system and integrations
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Forms</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Forms with webhook integration
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Webhooks</CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  Configured webhook URLs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Form Types</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  Priority levels configured
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Integration</CardTitle>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">GHL</div>
                <p className="text-xs text-muted-foreground">
                  GoHighLevel ready
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Admin Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {adminSections.map((section, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </div>
                    <Badge className={section.statusColor}>
                      {section.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {section.path === '/admin/webhooks' ? (
                    <Link to={section.path}>
                      <Button className="w-full group-hover:bg-primary/90">
                        Configure Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full">
                      {section.status}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Zapier Configuration */}
          <ErrorBoundary
            fallback={
              <Card>
                <CardHeader>
                  <CardTitle>Zapier Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    There was an issue loading the Zapier configuration. Please refresh the page.
                  </p>
                </CardContent>
              </Card>
            }
          >
            {isLoading ? (
              <Card>
                <CardHeader>
                  <CardTitle>Loading Zapier Configuration...</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <ZapierWebhookConfig />
            )}
          </ErrorBoundary>

          {/* Help & Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Help & Resources</CardTitle>
              <CardDescription>
                Quick links to get you started with your lead capture system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Setup Guide</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Create Zapier account</li>
                    <li>• Set up webhook triggers</li>
                    <li>• Connect to GoHighLevel</li>
                    <li>• Test all forms</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Form Priority</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• High: Lead generation forms</li>
                    <li>• Medium: Contact forms</li>
                    <li>• Low: Feedback forms</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Best Practices</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Test webhooks regularly</li>
                    <li>• Monitor delivery rates</li>
                    <li>• Set up backup notifications</li>
                    <li>• Keep URLs secure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;