import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Star, CheckCircle2, X, Phone, Award, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { sendFormToZapier } from '@/utils/zapierWebhook';
import { useSmartDefaults } from '@/hooks/useSmartDefaults';
import { useFormValidation } from '@/hooks/useFormValidation';

interface AssessmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentPopup: React.FC<AssessmentPopupProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    service: '',
    urgency: 'standard',
    location: '',
    message: ''
  });

  const { toast } = useToast();
  const { suggestedServices, defaultUrgency, sydneyAreas } = useSmartDefaults();
  const { validateField, getFieldError } = useFormValidation();

  const handlePhoneSubmit = () => {
    const error = validateField('phone', formData.phone);
    if (!error) {
      setCurrentStep(2);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Zapier
      await sendFormToZapier('assessment_popup', {
        ...formData,
        formName: 'Assessment Popup',
        timestamp: new Date().toISOString(),
        source: 'Assessment Popup Form'
      });

      toast({
        title: "Thank you!",
        description: "We'll be in touch within 24 hours to discuss your project.",
      });
      
      // Reset form and close
      setFormData({
        phone: '',
        name: '',
        email: '',
        service: '',
        urgency: defaultUrgency,
        location: '',
        message: ''
      });
      setCurrentStep(1);
      onClose();
      
      // Navigate to thank you page
      navigate('/thank-you');
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or give us a call directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-transparent border-0 shadow-none">
        <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
          {/* Header matching hero section style */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Free Building Assessment
            </h3>
            <p className="text-white/90 text-sm">
              Quick assessment, honest quote
            </p>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${currentStep >= 1 ? 'bg-white' : 'bg-white/30'}`} />
              <div className={`w-8 h-1 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-white' : 'bg-white/30'}`} />
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-white' : 'bg-white/30'}`} />
            </div>
            <p className="text-white/80 text-xs mt-1">
              Step {currentStep} of 2
            </p>
          </div>

          <CardContent className="p-6 space-y-6">
            {currentStep === 1 ? (
              /* Step 1 - Phone Number */
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-lg">Let's get started!</h3>
                  <p className="text-sm text-muted-foreground">
                    How can we reach you to discuss your project?
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="popup-phone">Phone Number</Label>
                  <Input
                    id="popup-phone"
                    type="tel"
                    placeholder="0414 922 276"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className={getFieldError('phone') ? 'border-red-500' : ''}
                  />
                  {getFieldError('phone') && (
                    <p className="text-sm text-red-500">{getFieldError('phone')}</p>
                  )}
                </div>

                <Button 
                  onClick={handlePhoneSubmit}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold"
                  size="lg"
                  disabled={!formData.phone}
                >
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your privacy matters - we'll only use this to discuss your project
                </p>
              </div>
            ) : (
              /* Step 2 - Full Details */
              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="popup-name">Name</Label>
                    <Input
                      id="popup-name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="popup-email">Email</Label>
                    <Input
                      id="popup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="popup-service">What can we help with?</Label>
                  <div className="relative">
                    <select
                      id="popup-service"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium appearance-none cursor-pointer focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 shadow-sm hover:shadow-md z-50"
                      value={formData.service}
                      onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                      required
                    >
                      <option value="" className="text-gray-500">Choose your project type...</option>
                      <option value="assessment" className="py-2">🏗️ Building Assessment & Quote</option>
                      <option value="masonry" className="py-2">🧱 Masonry & Brickwork Repairs</option>
                      <option value="heritage" className="py-2">🏛️ Heritage Building Restoration</option>
                      <option value="structural" className="py-2">🔧 Structural & Foundation Repairs</option>
                      <option value="concrete" className="py-2">🏗️ Concrete Cancer Treatment</option>
                      <option value="repointing" className="py-2">⚒️ Repointing & Stone Restoration</option>
                      <option value="consultation" className="py-2">💬 Professional Consultation</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ArrowRight className="h-5 w-5 text-gray-400 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="popup-location">Where in Sydney?</Label>
                  <div className="relative">
                    <select
                      id="popup-location"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium appearance-none cursor-pointer focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 shadow-sm hover:shadow-md z-50"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    >
                      <option value="" className="text-gray-500">Choose your area...</option>
                      <option value="sydney-cbd" className="py-2">🏙️ Sydney CBD & Surrounds</option>
                      <option value="eastern-suburbs" className="py-2">🏖️ Eastern Suburbs (Bondi, Coogee, etc.)</option>
                      <option value="north-shore" className="py-2">🌉 North Shore (Mosman, Chatswood, etc.)</option>
                      <option value="inner-west" className="py-2">🎨 Inner West (Newtown, Leichhardt, etc.)</option>
                      <option value="northern-beaches" className="py-2">🏄 Northern Beaches (Manly, Dee Why, etc.)</option>
                      <option value="hills-district" className="py-2">🌳 Hills District (Castle Hill, Hornsby, etc.)</option>
                      <option value="western-sydney" className="py-2">🏘️ Western Sydney (Parramatta, Blacktown, etc.)</option>
                      <option value="south-sydney" className="py-2">🏛️ South Sydney (Sutherland, Cronulla, etc.)</option>
                      <option value="other" className="py-2">📍 Other Sydney Area</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ArrowRight className="h-5 w-5 text-gray-400 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="popup-message">Tell us about your project (optional)</Label>
                  <textarea
                    id="popup-message"
                    className="w-full p-2 border rounded-md min-h-[80px]"
                    placeholder="Any details that might help us prepare for our conversation..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    maxLength={500}
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    {formData.message.length}/500
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold"
                    size="lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  We'll respond within 24 hours with next steps
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};