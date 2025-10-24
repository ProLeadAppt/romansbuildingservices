import { supabase } from "@/integrations/supabase/client";

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
 * Save or update webhook configuration in the database
 */
export async function saveWebhookConfig(
  formType: string,
  webhookUrl: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: "User not authenticated" };
    }

    const { error } = await supabase
      .from('webhook_configs')
      .upsert({
        user_id: user.id,
        form_type: formType,
        webhook_url: webhookUrl,
        is_active: true,
      }, {
        onConflict: 'user_id,form_type'
      });

    if (error) {
      console.error('Error saving webhook config:', error);
      return { success: false, error: error.message };
    }

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
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { config: null, error: "User not authenticated" };
    }

    const { data, error } = await supabase
      .from('webhook_configs')
      .select('*')
      .eq('user_id', user.id)
      .eq('form_type', formType)
      .eq('is_active', true)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
      console.error('Error fetching webhook config:', error);
      return { config: null, error: error.message };
    }

    return { config: data || null };
  } catch (error) {
    console.error('Error fetching webhook config:', error);
    return { config: null, error: String(error) };
  }
}

/**
 * Get all webhook configurations for the current user
 */
export async function getAllWebhookConfigs(): Promise<{
  configs: WebhookConfig[];
  error?: string;
}> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { configs: [], error: "User not authenticated" };
    }

    const { data, error } = await supabase
      .from('webhook_configs')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching webhook configs:', error);
      return { configs: [], error: error.message };
    }

    return { configs: data || [] };
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
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: "User not authenticated" };
    }

    const { error } = await supabase
      .from('webhook_configs')
      .delete()
      .eq('user_id', user.id)
      .eq('form_type', formType);

    if (error) {
      console.error('Error deleting webhook config:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error deleting webhook config:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Save form submission to database
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
    const { error } = await supabase
      .from('form_submissions')
      .insert({
        form_type: formType,
        ...data,
        ip_address: null, // Can be populated server-side if needed
        user_agent: navigator.userAgent,
      });

    if (error) {
      console.error('Error saving form submission:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error saving form submission:', error);
    return { success: false, error: String(error) };
  }
}
