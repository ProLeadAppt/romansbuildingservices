import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useError } from '@/contexts/ErrorProvider';
import { useOffline } from '@/hooks/useOffline';
import { 
  validateForm, 
  commonSchemas, 
  createFormValidationError,
  ValidationResult 
} from '@/utils/validationErrors';
import { apiClient } from '@/utils/apiClient';
import { cn } from '@/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  urgency: string;
  message: string;
}

interface EnhancedContactFormProps {
  onSuccess?: (data: ContactFormData) => void;
  onError?: (error: any) => void;
  submitEndpoint?: string;
  showUrgencyField?: boolean;
}

export const EnhancedContactForm: React.FC<EnhancedContactFormProps> = ({
  onSuccess,
  onError,
  submitEndpoint = '/api/contact',
  showUrgencyField = true
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: 'normal',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const { addError } = useError();
  const { isOnline, queueRequest } = useOffline();

  // Real-time validation
  const validateFormData = useCallback((data: ContactFormData): ValidationResult => {
    const schema = {
      ...commonSchemas.contact,
      service: { required: true },
      urgency: showUrgencyField ? { required: true } : {}
    };
    
    return validateForm(data, schema);
  }, [showUrgencyField]);

  const handleInputChange = useCallback((field: keyof ContactFormData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);

    // Real-time validation
    const validation = validateFormData(newData);
    setValidationErrors(validation.errors);
    setIsValid(validation.isValid);

    // Clear field-specific error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  }, [formData, validateFormData, validationErrors]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitCount(prev => prev + 1);

    // Validate form
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      
      const validationError = createFormValidationError(validation, {
        submitAttempt: submitCount + 1,
        formType: 'contact'
      });
      
      addError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      // Handle offline scenario
      if (!isOnline) {
        const requestId = queueRequest(submitEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        toast.success('Form submitted offline', {
          description: 'Your message will be sent when connection is restored.'
        });

        onSuccess?.(formData);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          urgency: 'normal',
          message: ''
        });
        
        return;
      }

      // Online submission
      const response = await apiClient.post(submitEndpoint, {
        ...formData,
        timestamp: new Date().toISOString(),
        submitAttempt: submitCount + 1,
        userAgent: navigator.userAgent
      });

      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you within 2 hours.'
      });

      onSuccess?.(formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        urgency: 'normal',
        message: ''
      });
      setValidationErrors({});

    } catch (error: any) {
      console.error('Form submission error:', error);
      
      const errorData = {
        type: 'api' as const,
        severity: 'medium' as const,
        message: 'Failed to submit contact form',
        userMessage: 'Failed to send your message. Please try again or call us directly.',
        details: { 
          error: error.message, 
          formData: { ...formData, phone: '***masked***' },
          submitAttempt: submitCount + 1
        },
        retry: () => handleSubmit(e)
      };

      addError(errorData);
      onError?.(error);

    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (field: string) => validationErrors[field];
  const hasFieldError = (field: string) => !!getFieldError(field);

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Send className="w-5 h-5" />
          <span>Get Your Free Quote</span>
        </CardTitle>
        {!isOnline && (
          <div className="flex items-center space-x-2 text-sm text-amber-600 bg-amber-50 p-2 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span>Offline mode - Your message will be sent when connection is restored</span>
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="required">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={cn(hasFieldError('name') && "border-destructive focus:ring-destructive")}
              placeholder="Enter your full name"
              disabled={isSubmitting}
              required
              aria-invalid={hasFieldError('name')}
              aria-describedby={hasFieldError('name') ? 'name-error' : undefined}
            />
            {hasFieldError('name') && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center space-x-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{getFieldError('name')}</span>
              </motion.p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="required">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={cn(hasFieldError('email') && "border-destructive focus:ring-destructive")}
              placeholder="your.email@example.com"
              disabled={isSubmitting}
              required
              aria-invalid={hasFieldError('email')}
              aria-describedby={hasFieldError('email') ? 'email-error' : undefined}
            />
            {hasFieldError('email') && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center space-x-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{getFieldError('email')}</span>
              </motion.p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="required">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={cn(hasFieldError('phone') && "border-destructive focus:ring-destructive")}
              placeholder="0412 345 678"
              disabled={isSubmitting}
              required
              aria-invalid={hasFieldError('phone')}
              aria-describedby={hasFieldError('phone') ? 'phone-error' : undefined}
            />
            {hasFieldError('phone') && (
              <motion.p
                id="phone-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center space-x-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{getFieldError('phone')}</span>
              </motion.p>
            )}
          </div>

          {/* Service Field */}
          <div className="space-y-2">
            <Label htmlFor="service" className="required">
              Service Needed
            </Label>
            <Select 
              value={formData.service} 
              onValueChange={(value) => handleInputChange('service', value)}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger 
                className={cn(hasFieldError('service') && "border-destructive focus:ring-destructive")}
                aria-invalid={hasFieldError('service')}
                aria-describedby={hasFieldError('service') ? 'service-error' : undefined}
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masonry">Masonry & Brickwork</SelectItem>
                <SelectItem value="restoration">Building Restoration</SelectItem>
                <SelectItem value="structural">Structural Repairs</SelectItem>
                <SelectItem value="waterproofing">Waterproofing</SelectItem>
                <SelectItem value="assessment">Building Assessment</SelectItem>
                <SelectItem value="emergency">Emergency Repairs</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {hasFieldError('service') && (
              <motion.p
                id="service-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center space-x-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{getFieldError('service')}</span>
              </motion.p>
            )}
          </div>

          {/* Urgency Field */}
          {showUrgencyField && (
            <div className="space-y-2">
              <Label htmlFor="urgency">
                Urgency Level
              </Label>
              <Select 
                value={formData.urgency} 
                onValueChange={(value) => handleInputChange('urgency', value)}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Within a month</SelectItem>
                  <SelectItem value="normal">Normal - Within 2 weeks</SelectItem>
                  <SelectItem value="high">High - Within a week</SelectItem>
                  <SelectItem value="urgent">Urgent - ASAP</SelectItem>
                  <SelectItem value="emergency">Emergency - Immediate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="required">
              Project Details
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={cn(
                hasFieldError('message') && "border-destructive focus:ring-destructive",
                "min-h-[100px]"
              )}
              placeholder="Please describe your project, location, and any specific requirements..."
              disabled={isSubmitting}
              required
              rows={4}
              aria-invalid={hasFieldError('message')}
              aria-describedby={hasFieldError('message') ? 'message-error' : undefined}
            />
            {hasFieldError('message') && (
              <motion.p
                id="message-error"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-destructive flex items-center space-x-1"
                role="alert"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{getFieldError('message')}</span>
              </motion.p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || (!isValid && submitCount > 0)}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {isOnline ? 'Sending...' : 'Queuing...'}
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {isOnline ? 'Send Message' : 'Queue Message'}
              </>
            )}
          </Button>

          {/* Form Status */}
          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>✓ Free assessment ✓ 2-hour response ✓ No obligation</p>
            {!isOnline && (
              <p className="text-amber-600">
                Offline mode: Your message will be sent when connection is restored
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};