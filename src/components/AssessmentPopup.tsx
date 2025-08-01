import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle, X, Phone, Clock, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { useFocusTrap } from './AccessibilityEnhancements';

interface AssessmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentPopup: React.FC<AssessmentPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const focusTrapRef = useFocusTrap(isOpen);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Assessment request submitted! We\'ll contact you within 2 hours.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    setIsSubmitting(false);
    onClose();
  };

  const benefits = [
    { icon: CheckCircle, text: 'Professional structural analysis' },
    { icon: Shield, text: 'Licensed engineer assessment' },
    { icon: Clock, text: '2-hour response guarantee' },
    { icon: Star, text: 'Detailed written report' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        ref={focusTrapRef}
        className="max-w-2xl max-h-[90vh] overflow-y-auto p-0"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assessment-popup-title"
      >
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6">
          <DialogHeader className="text-center space-y-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center justify-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 text-secondary mx-auto"
            >
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">FREE Assessment</span>
            </motion.div>
            
            <DialogTitle id="assessment-popup-title" className="text-3xl font-bold text-center">
              Get Your FREE $500 Assessment
            </DialogTitle>
            
            <p className="text-muted-foreground text-center max-w-md mx-auto">
              Professional structural assessment worth $500 - completely free with no obligation.
            </p>
          </DialogHeader>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-3 mt-6 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <benefit.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="h-12"
                disabled={isSubmitting}
              />
              <Input
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="h-12"
                disabled={isSubmitting}
              />
            </div>

            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="h-12"
              disabled={isSubmitting}
            />

            <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})} disabled={isSubmitting}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Service Needed *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masonry">Masonry & Brickwork</SelectItem>
                <SelectItem value="restoration">Building Restoration</SelectItem>
                <SelectItem value="structural">Structural Repairs</SelectItem>
                <SelectItem value="waterproofing">Waterproofing</SelectItem>
                <SelectItem value="assessment">Building Assessment</SelectItem>
                <SelectItem value="emergency">Emergency Repairs</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Brief description of your project (optional)"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={3}
              disabled={isSubmitting}
            />

            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </motion.div>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Get My FREE Assessment
                </>
              )}
            </Button>
          </motion.form>

          {/* Trust Indicators */}
          <motion.div 
            className="text-center pt-4 border-t mt-6 space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center space-x-6 text-sm">
              <Badge variant="outline" className="text-green-600 border-green-200">
                <Shield className="w-3 h-3 mr-1" />
                Licensed & Insured
              </Badge>
              <Badge variant="outline" className="text-secondary border-secondary/20">
                <Clock className="w-3 h-3 mr-1" />
                2-Hour Response
              </Badge>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-semibold">0414 922 276</span>
              </div>
              <span>•</span>
              <span>Sydney Wide Service</span>
            </div>
            
            <p className="text-xs text-muted-foreground">
              ✓ No obligation ✓ Professional assessment ✓ Detailed report included
            </p>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};