import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, ArrowRight, Clock, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useSmartDefaults } from '@/hooks/useSmartDefaults';
import { useFormValidation } from '@/hooks/useFormValidation';
import { sendFormToZapier } from '@/utils/zapierWebhook';

interface SmartLeadFormProps {
  onSuccess?: (data: any) => void;
  variant?: 'minimal' | 'standard' | 'detailed';
  className?: string;
}

export const SmartLeadForm: React.FC<SmartLeadFormProps> = ({ 
  onSuccess, 
  variant = 'minimal',
  className = '' 
}) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    service: '',
    urgency: 'standard',
    location: '',
    message: ''
  });
  
  const { location, suggestedServices } = useSmartDefaults();
  const { validateField, getFieldError, isFieldValid } = useFormValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-populate location if available
  useEffect(() => {
    if (location && !formData.location) {
      setFormData(prev => ({ ...prev, location }));
    }
  }, [location]);

  const steps = [
    {
      id: 'contact',
      title: 'Quick Contact',
      fields: ['phone'],
      required: ['phone']
    },
    {
      id: 'details', 
      title: 'Service Details',
      fields: ['name', 'service'],
      required: ['name']
    },
    {
      id: 'specifics',
      title: 'Project Info',
      fields: ['email', 'urgency', 'message'],
      required: ['email']
    }
  ];

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;
  const canProceed = currentStep.required.every(field => 
    formData[field as keyof typeof formData] && 
    isFieldValid(field, formData[field as keyof typeof formData])
  );

  const handleNext = () => {
    if (canProceed && !isLastStep) {
      setStep(prev => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed) return;

    setIsSubmitting(true);
    
    // Send to Zapier
    const zapierResult = await sendFormToZapier('smart_lead', {
      ...formData,
      formName: 'Smart Lead Form',
      variant: variant,
      completedSteps: step + 1
    });
    
    if (!zapierResult.success) {
      console.warn('Failed to send to Zapier:', zapierResult.error);
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onSuccess) {
      onSuccess(formData);
    }
    
    // Reset form
    setFormData({
      phone: '', name: '', email: '', service: '', 
      urgency: 'standard', location: '', message: ''
    });
    setStep(0);
    setIsSubmitting(false);
    
    // Navigate to thank you page
    navigate('/thank-you');
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  // Quick phone-only submission for minimal variant
  const handleQuickSubmit = async () => {
    if (!formData.phone || !isFieldValid('phone', formData.phone)) return;
    
    setIsSubmitting(true);
    
    // Send to Zapier
    const zapierResult = await sendFormToZapier('smart_lead', {
      phone: formData.phone,
      formName: 'Smart Lead Form - Quick Submit',
      variant: 'minimal',
      submissionType: 'quick'
    });
    
    if (!zapierResult.success) {
      console.warn('Failed to send to Zapier:', zapierResult.error);
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setFormData(prev => ({ ...prev, phone: '' }));
    setIsSubmitting(false);
    
    // Navigate to thank you page
    navigate('/thank-you');
  };

  if (variant === 'minimal') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">Get Called Back in 30 Minutes</h3>
          <p className="text-sm text-muted-foreground">Just your phone number needed</p>
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={`h-12 ${getFieldError('phone') ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {getFieldError('phone') && (
              <p className="text-xs text-red-500 mt-1">{getFieldError('phone')}</p>
            )}
          </div>
          
          <Button 
            onClick={handleQuickSubmit}
            disabled={!formData.phone || !isFieldValid('phone', formData.phone) || isSubmitting}
            className="h-12 px-6"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Phone className="w-4 h-4" />
            )}
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>Licensed</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>30 min response</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-6">
        {steps.map((s, index) => (
          <div key={s.id} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              index <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {index < step ? <CheckCircle className="w-4 h-4" /> : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-12 h-0.5 mx-2 ${
                index < step ? 'bg-primary' : 'bg-muted'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">{currentStep.title}</h3>
            <p className="text-sm text-muted-foreground">
              Step {step + 1} of {steps.length}
            </p>
          </div>

          <form onSubmit={isLastStep ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
            {/* Step 0: Contact */}
            {step === 0 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+61 4XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={`mt-1 h-12 ${getFieldError('phone') ? 'border-red-500' : ''}`}
                    autoFocus
                  />
                  {getFieldError('phone') ? (
                    <p className="text-xs text-red-500 mt-1">{getFieldError('phone')}</p>
                  ) : (
                    <p className="text-xs text-muted-foreground mt-1">
                      We'll call you back within 30 minutes
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 1: Details */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="mt-1 h-12"
                    autoFocus
                  />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {suggestedServices.map((service) => (
                      <button
                        key={service.value}
                        type="button"
                        onClick={() => updateField('service', service.value)}
                        className={`p-3 text-left rounded-lg border transition-all ${
                          formData.service === service.value
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-muted hover:border-primary/50'
                        }`}
                      >
                        <div className="text-sm font-medium">{service.label}</div>
                        <div className="text-xs text-muted-foreground">{service.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Specifics */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`mt-1 h-12 ${getFieldError('email') ? 'border-red-500' : ''}`}
                    autoFocus
                  />
                  {getFieldError('email') && (
                    <p className="text-xs text-red-500 mt-1">{getFieldError('email')}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="urgency">Project Urgency</Label>
                  <div className="mt-2 grid grid-cols-1 gap-2">
                    {[
                      { value: 'prompt', label: 'Prompt', desc: '2-3 business days', color: 'primary' },
                      { value: 'standard_quick', label: 'Standard', desc: '1-2 weeks', color: 'orange' },
                      { value: 'standard', label: 'Standard', desc: '1-2 months', color: 'primary' },
                      { value: 'planning', label: 'Planning', desc: 'Future project', color: 'muted' }
                    ].map((urgency) => (
                      <button
                        key={urgency.value}
                        type="button"
                        onClick={() => updateField('urgency', urgency.value)}
                        className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                          formData.urgency === urgency.value
                            ? 'border-primary bg-primary/5'
                            : 'border-muted hover:border-primary/50'
                        }`}
                      >
                        <div className="text-left">
                          <div className="text-sm font-medium">{urgency.label}</div>
                          <div className="text-xs text-muted-foreground">{urgency.desc}</div>
                        </div>
                        {formData.urgency === urgency.value && (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 pt-4">
              {step > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(prev => prev - 1)}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              
              <Button
                type="submit"
                disabled={!canProceed || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : isLastStep ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Submit Request
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>

      {/* Trust Indicators */}
      <div className="flex items-center justify-center gap-4 pt-4 border-t">
        <Badge variant="outline" className="text-green-600">
          <Shield className="w-3 h-3 mr-1" />
          Licensed & Insured
        </Badge>
        <Badge variant="outline" className="text-primary">
          <Clock className="w-3 h-3 mr-1" />
          2-Hour Response
        </Badge>
      </div>
    </div>
  );
};