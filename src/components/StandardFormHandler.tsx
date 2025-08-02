import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { sendFormToZapier } from '@/utils/zapierWebhook';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  [key: string]: any;
}

interface FormValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface FormValidationRules {
  [key: string]: FormValidationRule;
}

interface StandardFormHandlerProps {
  webhookId: string;
  formName: string;
  initialData?: Partial<FormData>;
  validationRules?: FormValidationRules;
  fields: Array<{
    name: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
    label: string;
    placeholder?: string;
    required?: boolean;
    options?: Array<{ value: string; label: string }>;
  }>;
  onSuccess?: (data: FormData) => void;
  onError?: (error: any) => void;
  redirectPath?: string;
  submitButtonText?: string;
  className?: string;
}

// Default validation rules
const defaultValidationRules: FormValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    custom: (value: string) => {
      if (!value.includes('@')) return 'Please enter a valid email address';
      return null;
    }
  },
  phone: {
    required: true,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    custom: (value: string) => {
      const cleaned = value.replace(/[\s\-\(\)]/g, '');
      if (cleaned.length < 8) return 'Phone number must be at least 8 digits';
      return null;
    }
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000
  }
};

export const StandardFormHandler: React.FC<StandardFormHandlerProps> = ({
  webhookId,
  formName,
  initialData = {},
  validationRules = {},
  fields,
  onSuccess,
  onError,
  redirectPath = '/thank-you',
  submitButtonText = 'Send Message',
  className = ''
}) => {
  const navigate = useNavigate();
  
  // Initialize form data
  const [formData, setFormData] = useState<FormData>(() => {
    const data: FormData = { name: '', email: '', phone: '', message: '', ...initialData };
    fields.forEach(field => {
      if (!(field.name in data)) {
        data[field.name] = '';
      }
    });
    return data;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submitCount, setSubmitCount] = useState(0);

  // Merge default and custom validation rules
  const mergedRules = { ...defaultValidationRules, ...validationRules };

  // Validate a single field
  const validateField = useCallback((fieldName: string, value: string): string | null => {
    const rules = mergedRules[fieldName];
    if (!rules) return null;

    // Required check
    if (rules.required && (!value || value.trim().length === 0)) {
      return `${fields.find(f => f.name === fieldName)?.label || fieldName} is required`;
    }

    // Skip other validations if field is empty and not required
    if (!value) return null;

    // Min length check
    if (rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`;
    }

    // Max length check
    if (rules.maxLength && value.length > rules.maxLength) {
      return `Must be no more than ${rules.maxLength} characters`;
    }

    // Pattern check
    if (rules.pattern && !rules.pattern.test(value)) {
      return `Please enter a valid ${fields.find(f => f.name === fieldName)?.label?.toLowerCase() || fieldName}`;
    }

    // Custom validation
    if (rules.custom) {
      return rules.custom(value);
    }

    return null;
  }, [mergedRules, fields]);

  // Validate entire form
  const validateForm = useCallback((): { isValid: boolean; errors: Record<string, string> } => {
    const errors: Record<string, string> = {};
    
    fields.forEach(field => {
      const error = validateField(field.name, formData[field.name] || '');
      if (error) {
        errors[field.name] = error;
      }
    });

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }, [formData, fields, validateField]);

  // Handle input changes
  const handleInputChange = useCallback((fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    
    // Clear field error when user starts typing
    if (validationErrors[fieldName]) {
      setValidationErrors(prev => {
        const updated = { ...prev };
        delete updated[fieldName];
        return updated;
      });
    }
  }, [validationErrors]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitCount(prev => prev + 1);

    // Validate form
    const validation = validateForm();
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      
      // Show error toast
      toast.error('Please correct the errors in the form', {
        description: 'All required fields must be completed correctly.'
      });
      
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Zapier
      const zapierResult = await sendFormToZapier(webhookId, {
        ...formData,
        formName,
        submitAttempt: submitCount + 1,
        timestamp: new Date().toISOString()
      });
      
      if (!zapierResult.success) {
        console.warn('Failed to send to Zapier:', zapierResult.error);
      }

      // Success feedback
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you as soon as possible.'
      });

      // Call success callback
      onSuccess?.(formData);
      
      // Reset form
      const resetData: FormData = { name: '', email: '', phone: '', message: '' };
      fields.forEach(field => {
        resetData[field.name] = '';
      });
      setFormData(resetData);
      setValidationErrors({});
      
      // Navigate to success page
      navigate(redirectPath);

    } catch (error: any) {
      console.error('Form submission error:', error);
      
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly.'
      });
      
      onError?.(error);

    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName: string) => validationErrors[fieldName];
  const hasFieldError = (fieldName: string) => !!getFieldError(fieldName);

  // Render form field
  const renderField = (field: any) => {
    const commonProps = {
      id: field.name,
      value: formData[field.name] || '',
      onChange: (e: any) => handleInputChange(field.name, e.target.value || e),
      disabled: isSubmitting,
      required: field.required,
      'aria-invalid': hasFieldError(field.name),
      'aria-describedby': hasFieldError(field.name) ? `${field.name}-error` : undefined,
      className: cn(hasFieldError(field.name) && "border-destructive focus:ring-destructive")
    };

    switch (field.type) {
      case 'textarea':
        return (
          <Textarea
            {...commonProps}
            placeholder={field.placeholder}
            rows={4}
            className={cn(commonProps.className, "min-h-[100px]")}
          />
        );
      
      case 'select':
        return (
          <Select
            value={commonProps.value}
            onValueChange={(value) => handleInputChange(field.name, value)}
            disabled={commonProps.disabled}
            required={commonProps.required}
          >
            <SelectTrigger className={commonProps.className}>
              <SelectValue placeholder={field.placeholder || `Select ${field.label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option: any) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      default:
        return (
          <Input
            {...commonProps}
            type={field.type}
            placeholder={field.placeholder}
          />
        );
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name} className={field.required ? "required" : ""}>
              {field.label}
            </Label>
            {renderField(field)}
            {hasFieldError(field.name) && (
              <motion.p
                id={`${field.name}-error`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center space-x-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{getFieldError(field.name)}</span>
              </motion.p>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              {submitButtonText}
            </>
          )}
        </Button>

        {/* Form Status */}
        <div className="text-xs text-muted-foreground text-center">
          <p>✓ Free assessment ✓ Prompt response ✓ No obligation</p>
        </div>
      </form>
    </div>
  );
};