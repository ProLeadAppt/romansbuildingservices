import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, AlertCircle, ExternalLink, Copy, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { zapierWebhook } from '@/utils/zapierWebhook';

const FORM_TYPES = [
  { id: 'quick_assessment', label: 'Quick Assessment Form', priority: 'high' },
  { id: 'smart_lead', label: 'Smart Lead Form', priority: 'high' },
  { id: 'enhanced_contact', label: 'Enhanced Contact Form', priority: 'high' },
  { id: 'quote_calculator', label: 'Quote Calculator', priority: 'high' },
  { id: 'assessment_popup', label: 'Assessment Popup', priority: 'medium' },
  { id: 'hero_contact', label: 'Hero Section Contact', priority: 'medium' },
  { id: 'lead_capture', label: 'Lead Capture Form', priority: 'medium' },
  { id: 'modern_contact', label: 'Modern Contact Section', priority: 'medium' },
  { id: 'quote_page', label: 'Quote Page Form', priority: 'medium' },
  { id: 'feedback', label: 'Feedback Form', priority: 'low' }
];

interface ZapierWebhookConfigProps {
  className?: string;
}

export const ZapierWebhookConfig: React.FC<ZapierWebhookConfigProps> = ({ 
  className = '' 
}) => {
  const [webhookUrls, setWebhookUrls] = useState<Record<string, string>>({});
  const [testingForm, setTestingForm] = useState<string | null>(null);

  // Load saved webhook URLs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zapier_webhook_urls');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setWebhookUrls(parsed);
        
        // Configure the webhook utility with saved URLs
        Object.entries(parsed).forEach(([formType, url]) => {
          if (url) {
            zapierWebhook.setWebhookUrl(formType, url as string);
          }
        });
      } catch (error) {
        console.error('Error loading webhook URLs:', error);
      }
    }
  }, []);

  const saveWebhookUrl = (formType: string, url: string) => {
    console.log(`Saving webhook URL for ${formType}:`, url);
    
    try {
      // Validate URL before saving
      if (!zapierWebhook.isValidWebhookUrl(url)) {
        toast.error('Invalid webhook URL format', {
          description: 'Please enter a valid Zapier webhook URL'
        });
        return;
      }

      const updated = { ...webhookUrls, [formType]: url };
      setWebhookUrls(updated);
      
      // Save to localStorage with error handling
      localStorage.setItem('zapier_webhook_urls', JSON.stringify(updated));
      console.log('Saved to localStorage:', updated);
      
      // Configure the webhook utility
      zapierWebhook.setWebhookUrl(formType, url);
      console.log('Configured webhook utility for:', formType);
      
      toast.success(`Webhook URL saved for ${FORM_TYPES.find(f => f.id === formType)?.label || formType}`, {
        description: 'You can now test the webhook'
      });
    } catch (error) {
      console.error('Error saving webhook URL:', error);
      toast.error('Failed to save webhook URL', {
        description: 'Please try again'
      });
    }
  };

  const removeWebhookUrl = (formType: string) => {
    const updated = { ...webhookUrls };
    delete updated[formType];
    setWebhookUrls(updated);
    
    localStorage.setItem('zapier_webhook_urls', JSON.stringify(updated));
    toast.success(`Webhook URL removed for ${formType}`);
  };

  const testWebhook = async (formType: string) => {
    const url = webhookUrls[formType];
    if (!url) {
      toast.error('No webhook URL configured for this form');
      return;
    }

    setTestingForm(formType);

    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '0412 345 678',
      service: 'Test Service',
      message: 'This is a test submission from the webhook configuration',
      testMode: true
    };

    try {
      const result = await zapierWebhook.sendToZapier(formType, testData);
      
      if (result.success) {
        toast.success('Test webhook sent successfully!', {
          description: 'Check your Zapier dashboard to confirm the trigger.'
        });
      } else {
        toast.error('Failed to send test webhook', {
          description: result.error
        });
      }
    } catch (error) {
      toast.error('Error testing webhook', {
        description: 'Please check the URL and try again.'
      });
    } finally {
      setTestingForm(null);
    }
  };

  const copyInstructions = () => {
    const instructions = `
Zapier Webhook Setup Instructions:

1. Go to Zapier.com and create a new Zap
2. Choose "Webhooks by Zapier" as the trigger
3. Select "Catch Hook" as the trigger event
4. Copy the webhook URL provided by Zapier
5. Paste the URL in the appropriate form field below
6. Configure your action step (e.g., GoHighLevel, Google Sheets, etc.)
7. Test the webhook using the test button
8. Turn on your Zap

Form Types Priority:
- High Priority: Lead generation forms (should be set up first)
- Medium Priority: Contact and assessment forms
- Low Priority: Feedback and secondary forms
    `;

    navigator.clipboard.writeText(instructions);
    toast.success('Instructions copied to clipboard');
  };

  const getFormsByPriority = (priority: string) => {
    return FORM_TYPES.filter(form => form.priority === priority);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Zapier Webhook Configuration</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={copyInstructions}
            className="gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy Instructions
          </Button>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Configure webhook URLs for each form to send lead data to your GoHighLevel subaccount via Zapier.
        </p>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="priority">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="priority">By Priority</TabsTrigger>
            <TabsTrigger value="all">All Forms</TabsTrigger>
          </TabsList>

          <TabsContent value="priority" className="space-y-6">
            {['high', 'medium', 'low'].map(priority => (
              <div key={priority} className="space-y-3">
                <h3 className="font-semibold capitalize flex items-center gap-2">
                  {priority} Priority Forms
                  <Badge className={getPriorityColor(priority)}>
                    {getFormsByPriority(priority).length} forms
                  </Badge>
                </h3>
                
                <div className="grid gap-4">
                  {getFormsByPriority(priority).map(form => (
                    <WebhookFormConfig
                      key={form.id}
                      formType={form.id}
                      label={form.label}
                      url={webhookUrls[form.id] || ''}
                      onSave={(url) => saveWebhookUrl(form.id, url)}
                      onRemove={() => removeWebhookUrl(form.id)}
                      onTest={() => testWebhook(form.id)}
                      isTesting={testingForm === form.id}
                    />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            {FORM_TYPES.map(form => (
              <WebhookFormConfig
                key={form.id}
                formType={form.id}
                label={form.label}
                url={webhookUrls[form.id] || ''}
                onSave={(url) => saveWebhookUrl(form.id, url)}
                onRemove={() => removeWebhookUrl(form.id)}
                onTest={() => testWebhook(form.id)}
                isTesting={testingForm === form.id}
                priority={form.priority}
              />
            ))}
          </TabsContent>
        </Tabs>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Setup Resources
          </h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Create your Zapier account</a></p>
            <p>• Use "Webhooks by Zapier" → "Catch Hook" as your trigger</p>
            <p>• Connect to GoHighLevel, Google Sheets, or other CRM platforms</p>
            <p>• Test each webhook before activating your Zaps</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface WebhookFormConfigProps {
  formType: string;
  label: string;
  url: string;
  onSave: (url: string) => void;
  onRemove: () => void;
  onTest: () => void;
  isTesting: boolean;
  priority?: string;
}

const WebhookFormConfig: React.FC<WebhookFormConfigProps> = ({
  formType,
  label,
  url,
  onSave,
  onRemove,
  onTest,
  isTesting,
  priority
}) => {
  const [inputUrl, setInputUrl] = useState(url);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setInputUrl(url);
  }, [url]);

  useEffect(() => {
    setIsValid(zapierWebhook.isValidWebhookUrl(inputUrl));
  }, [inputUrl]);

  const handleSave = () => {
    console.log(`Attempting to save URL for ${formType}:`, inputUrl, 'Valid:', isValid);
    
    if (!inputUrl.trim()) {
      toast.error('Please enter a webhook URL');
      return;
    }
    
    if (isValid && inputUrl.trim()) {
      onSave(inputUrl.trim());
    } else {
      toast.error('Please enter a valid Zapier webhook URL');
    }
  };

  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h4 className="font-medium">{label}</h4>
          {priority && (
            <Badge variant="outline" className="text-xs">
              {priority}
            </Badge>
          )}
        </div>
        {url && (
          <div className="flex items-center gap-2">
            {isValid ? (
              <CheckCircle className="w-4 h-4 text-green-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600" />
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <Input
            placeholder="https://hooks.zapier.com/hooks/catch/..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className={!isValid && inputUrl ? 'border-red-500' : ''}
          />
        </div>
        <Button 
          onClick={handleSave}
          disabled={!isValid}
          size="sm"
        >
          Save
        </Button>
        {url && (
          <>
            <Button 
              onClick={onTest}
              disabled={!isValid || isTesting}
              variant="outline"
              size="sm"
            >
              {isTesting ? 'Testing...' : 'Test'}
            </Button>
            <Button 
              onClick={onRemove}
              variant="outline"
              size="sm"
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>

      {inputUrl && !isValid && (
        <p className="text-xs text-red-600">
          Please enter a valid Zapier webhook URL
        </p>
      )}
    </div>
  );
};