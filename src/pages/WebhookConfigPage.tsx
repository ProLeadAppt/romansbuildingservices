import React from 'react';
import { Layout } from '@/components/Layout';
import { ZapierWebhookConfig } from '@/components/ZapierWebhookConfig';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Settings, Zap, TrendingUp, CheckCircle } from 'lucide-react';

const WebhookConfigPage: React.FC = () => {
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
              <h1 className="text-4xl font-bold">Zapier Webhook Configuration</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect your forms to GoHighLevel via Zapier to automatically capture and process leads
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Automated Lead Capture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every form submission is automatically sent to your GoHighLevel CRM, 
                  ensuring no leads are lost and immediate follow-up can begin.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Instant Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get real-time notifications when potential customers submit forms, 
                  allowing for immediate response and higher conversion rates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Zero Manual Work</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eliminate manual data entry and reduce response time. 
                  All lead information is automatically organized and categorized.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Setup Steps */}
          <Alert>
            <Zap className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Quick Setup:</strong> Create Zaps in Zapier with "Webhooks by Zapier" → "Catch Hook" trigger, 
              then connect to GoHighLevel. Copy the webhook URLs below and test each form.
            </AlertDescription>
          </Alert>

          {/* Form Priority Guide */}
          <Card>
            <CardHeader>
              <CardTitle>Implementation Priority Guide</CardTitle>
              <CardDescription>
                Set up webhooks in order of importance to maximize lead capture from day one
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-100 text-red-800">High Priority</Badge>
                    <span className="font-medium">Lead Generation</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quick Assessment Form</li>
                    <li>• Smart Lead Form</li>
                    <li>• Enhanced Contact Form</li>
                    <li>• Quote Calculator</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800">Medium Priority</Badge>
                    <span className="font-medium">Contact Forms</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Assessment Popup</li>
                    <li>• Hero Section Forms</li>
                    <li>• Modern Contact Section</li>
                    <li>• Quote Page Form</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">Low Priority</Badge>
                    <span className="font-medium">Feedback</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Feedback Form</li>
                    <li>• Newsletter Signup</li>
                    <li>• Support Requests</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Configuration Component */}
          <ZapierWebhookConfig />

          {/* GoHighLevel Integration Tips */}
          <Card>
            <CardHeader>
              <CardTitle>GoHighLevel Integration Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Data Mapping</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Map phone to Contact Phone field</li>
                    <li>• Map email to Contact Email field</li>
                    <li>• Map name to Contact Full Name</li>
                    <li>• Use service field for lead tagging</li>
                    <li>• Map urgency to priority level</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Automation Ideas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Trigger immediate SMS/email response</li>
                    <li>• Assign leads to specific team members</li>
                    <li>• Create follow-up task sequences</li>
                    <li>• Update opportunity pipeline</li>
                    <li>• Send appointment booking links</li>
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

export default WebhookConfigPage;