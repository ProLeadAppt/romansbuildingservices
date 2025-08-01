import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Clock, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useFormValidation } from '@/hooks/useFormValidation';
import { formatPhoneNumber, getSmartPlaceholder } from '@/utils/formHelpers';

interface QuickAssessmentFormProps {
  onSuccess?: (data: any) => void;
  className?: string;
}

export const QuickAssessmentForm: React.FC<QuickAssessmentFormProps> = ({ 
  onSuccess, 
  className = '' 
}) => {
  const [showFullForm, setShowFullForm] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    issue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { validateField, getFieldError, isFieldValid } = useFormValidation();

  const handleQuickSubmit = async () => {
    if (!formData.phone || !isFieldValid('phone', formData.phone)) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast.success('Request submitted! We\'ll call you within 2 hours to discuss your free assessment.');
    
    if (onSuccess) {
      onSuccess({ ...formData, type: 'quick_assessment' });
    }
    
    setFormData({ phone: '', name: '', issue: '' });
    setIsSubmitting(false);
  };

  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phone || !formData.name || !isFieldValid('phone', formData.phone)) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Assessment request submitted! We\'ll contact you within 2 hours with next steps.');
    
    if (onSuccess) {
      onSuccess({ ...formData, type: 'full_assessment' });
    }
    
    setFormData({ phone: '', name: '', issue: '' });
    setShowFullForm(false);
    setIsSubmitting(false);
  };

  const updateField = (field: string, value: string) => {
    const formattedValue = field === 'phone' ? formatPhoneNumber(value) : value;
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    validateField(field, formattedValue);
  };

  if (!showFullForm) {
    return (
      <div className={`bg-white rounded-xl p-6 shadow-lg space-y-4 ${className}`}>
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-3 py-1">
            <Star className="w-4 h-4 text-secondary fill-current" />
            <span className="text-sm font-semibold text-secondary">FREE ASSESSMENT</span>
          </div>
          <h3 className="text-xl font-bold">Get Called Back in 2 Hours</h3>
          <p className="text-sm text-muted-foreground">
            Quick phone assessment worth $300 - completely free
          </p>
        </div>

        {/* Quick Form */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="tel"
              placeholder={getSmartPlaceholder('phone')}
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={`flex-1 h-12 ${getFieldError('phone') ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            <Button 
              onClick={handleQuickSubmit}
              disabled={!formData.phone || !isFieldValid('phone', formData.phone) || isSubmitting}
              className="h-12 px-6 bg-secondary hover:bg-secondary/90"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Phone className="w-4 h-4" />
              )}
            </Button>
          </div>
          
          {getFieldError('phone') && (
            <p className="text-xs text-red-500">{getFieldError('phone')}</p>
          )}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            { icon: CheckCircle, text: 'Professional inspection' },
            { icon: Clock, text: '2-hour response' },
            { icon: Star, text: 'Written report' },
            { icon: Phone, text: 'No obligation' }
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center space-x-1">
              <benefit.icon className="w-3 h-3 text-green-600" />
              <span className="text-muted-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Expand Option */}
        <div className="text-center pt-3 border-t">
          <button
            onClick={() => setShowFullForm(true)}
            className="text-sm text-primary hover:text-primary/80 underline"
          >
            Want to provide more details? Fill out full form
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-xl p-6 shadow-lg space-y-6 ${className}`}
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-3 py-1">
          <Star className="w-4 h-4 text-secondary fill-current" />
          <span className="text-sm font-semibold text-secondary">FREE ASSESSMENT</span>
        </div>
        <h3 className="text-xl font-bold">Complete Assessment Request</h3>
        <p className="text-sm text-muted-foreground">
          Get professional evaluation and detailed quote
        </p>
      </div>

      {/* Full Form */}
      <form onSubmit={handleFullSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="tel"
              placeholder={getSmartPlaceholder('phone')}
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={`h-12 ${getFieldError('phone') ? 'border-red-500' : ''}`}
              disabled={isSubmitting}
            />
            {getFieldError('phone') && (
              <p className="text-xs text-red-500 mt-1">{getFieldError('phone')}</p>
            )}
          </div>
          
          <div>
            <Input
              placeholder={getSmartPlaceholder('name')}
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="h-12"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <Textarea
            placeholder={getSmartPlaceholder('message', 'assessment')}
            value={formData.issue}
            onChange={(e) => updateField('issue', e.target.value)}
            rows={3}
            className="resize-none"
            disabled={isSubmitting}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Optional: Describe any visible issues or concerns
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowFullForm(false)}
            className="flex-1"
            disabled={isSubmitting}
          >
            Back to Quick Form
          </Button>
          
          <Button
            type="submit"
            disabled={!formData.phone || !formData.name || isSubmitting}
            className="flex-1 bg-secondary hover:bg-secondary/90"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </div>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Request Assessment
              </>
            )}
          </Button>
        </div>
      </form>

      {/* What's Included */}
      <div className="bg-muted/30 rounded-lg p-4 space-y-3">
        <h4 className="text-sm font-semibold text-primary">Your FREE Assessment Includes:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'Professional site inspection',
            'Structural safety evaluation', 
            'Detailed written report',
            'Fixed-price quote',
            'Material recommendations',
            'No-obligation consultation'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <CheckCircle className="w-3 h-3 text-green-600" />
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="flex items-center justify-center gap-3">
        <Badge variant="outline" className="text-green-600">
          <CheckCircle className="w-3 h-3 mr-1" />
          Licensed
        </Badge>
        <Badge variant="outline" className="text-primary">
          <Clock className="w-3 h-3 mr-1" />
          2-Hour Response
        </Badge>
        <Badge variant="outline" className="text-secondary">
          <Star className="w-3 h-3 mr-1" />
          25+ Years
        </Badge>
      </div>
    </motion.div>
  );
};