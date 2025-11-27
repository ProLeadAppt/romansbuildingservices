export interface WebhookConfig {
  id: string;
  user_id: string;
  form_type: string;
  webhook_url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * Save or update webhook configuration in localStorage
 */
export async function saveWebhookConfig(
  formType: string,
  webhookUrl: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const key = `webhook_config_${formType}`;
    const config: WebhookConfig = {
      id: `local_${Date.now()}`,
      user_id: 'local_user',
      form_type: formType,
      webhook_url: webhookUrl,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    localStorage.setItem(key, JSON.stringify(config));
    return { success: true };
  } catch (error) {
    console.error('Error saving webhook config:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Get webhook configuration for a specific form type
 */
export async function getWebhookConfig(
  formType: string
): Promise<{ config: WebhookConfig | null; error?: string }> {
  try {
    const key = `webhook_config_${formType}`;
    const stored = localStorage.getItem(key);
    
    if (!stored) {
      return { config: null };
    }
    
    const config = JSON.parse(stored) as WebhookConfig;
    return { config };
  } catch (error) {
    console.error('Error fetching webhook config:', error);
    return { config: null, error: String(error) };
  }
}

/**
 * Get all webhook configurations from localStorage
 */
export async function getAllWebhookConfigs(): Promise<{
  configs: WebhookConfig[];
  error?: string;
}> {
  try {
    const configs: WebhookConfig[] = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('webhook_config_')) {
        try {
          const stored = localStorage.getItem(key);
          if (stored) {
            configs.push(JSON.parse(stored) as WebhookConfig);
          }
        } catch (e) {
          // Skip invalid entries
        }
      }
    }
    
    return { configs: configs.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    ) };
  } catch (error) {
    console.error('Error fetching webhook configs:', error);
    return { configs: [], error: String(error) };
  }
}

/**
 * Delete webhook configuration
 */
export async function deleteWebhookConfig(
  formType: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const key = `webhook_config_${formType}`;
    localStorage.removeItem(key);
    return { success: true };
  } catch (error) {
    console.error('Error deleting webhook config:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Save form submission to localStorage (for development/testing)
 */
export async function saveFormSubmission(
  formType: string,
  data: {
    name?: string;
    email: string;
    phone?: string;
    message?: string;
    service?: string;
    preferred_contact?: string;
    additional_data?: Record<string, any>;
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    const submission = {
      id: `submission_${Date.now()}`,
      form_type: formType,
      ...data,
      ip_address: null,
      user_agent: navigator.userAgent,
      created_at: new Date().toISOString(),
    };
    
    const key = `form_submission_${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(submission));
    
    // Keep only last 100 submissions
    const keys = Object.keys(localStorage)
      .filter(k => k.startsWith('form_submission_'))
      .sort()
      .reverse()
      .slice(100);
    
    Object.keys(localStorage)
      .filter(k => k.startsWith('form_submission_') && !keys.includes(k))
      .forEach(k => localStorage.removeItem(k));
    
    return { success: true };
  } catch (error) {
    console.error('Error saving form submission:', error);
    return { success: false, error: String(error) };
  }
}
