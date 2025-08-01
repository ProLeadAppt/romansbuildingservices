interface WebhookPayload {
  formType: string;
  timestamp: string;
  source: string;
  data: Record<string, any>;
}

interface WebhookResponse {
  success: boolean;
  error?: string;
}

export class ZapierWebhook {
  private static instance: ZapierWebhook;
  private webhookUrls: Record<string, string> = {};

  private constructor() {}

  static getInstance(): ZapierWebhook {
    if (!ZapierWebhook.instance) {
      ZapierWebhook.instance = new ZapierWebhook();
    }
    return ZapierWebhook.instance;
  }

  setWebhookUrl(formType: string, url: string): void {
    this.webhookUrls[formType] = url;
  }

  getWebhookUrl(formType: string): string | null {
    return this.webhookUrls[formType] || null;
  }

  async sendToZapier(
    formType: string,
    data: Record<string, any>,
    customWebhookUrl?: string
  ): Promise<WebhookResponse> {
    const webhookUrl = customWebhookUrl || this.getWebhookUrl(formType);
    
    if (!webhookUrl) {
      console.warn(`No webhook URL configured for form type: ${formType}`);
      return { success: false, error: 'No webhook URL configured' };
    }

    const payload: WebhookPayload = {
      formType,
      timestamp: new Date().toISOString(),
      source: window.location.origin,
      data: {
        ...data,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        pageUrl: window.location.href
      }
    };

    try {
      console.log(`Sending ${formType} form data to Zapier:`, payload);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Handle CORS for webhook URLs
        body: JSON.stringify(payload),
      });

      // Since we're using no-cors, we won't get a proper response status
      // We'll assume success unless there's an error
      return { success: true };

    } catch (error: any) {
      console.error(`Error sending ${formType} to Zapier:`, error);
      return { 
        success: false, 
        error: error.message || 'Failed to send webhook' 
      };
    }
  }

  // Helper method to validate webhook URL format
  isValidWebhookUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'https:' && 
             (urlObj.hostname.includes('zapier.com') || 
              urlObj.hostname.includes('hooks.zapier.com'));
    } catch {
      return false;
    }
  }
}

// Export singleton instance
export const zapierWebhook = ZapierWebhook.getInstance();

// Export convenience function
export const sendFormToZapier = (
  formType: string, 
  data: Record<string, any>,
  webhookUrl?: string
) => {
  return zapierWebhook.sendToZapier(formType, data, webhookUrl);
};