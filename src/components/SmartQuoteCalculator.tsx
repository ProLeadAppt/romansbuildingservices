import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, Home, Zap, Clock, DollarSign, Phone, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { sendFormToZapier } from '@/utils/zapierWebhook';

export const SmartQuoteCalculator = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    propertyType: '',
    propertySize: [100],
    urgency: '',
    location: ''
  });
  
  const [estimate, setEstimate] = useState<number | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const serviceRates = {
    'masonry': { base: 150, multiplier: 1.0, label: 'Masonry & Brickwork' },
    'restoration': { base: 200, multiplier: 1.3, label: 'Heritage Restoration' },
    'structural': { base: 180, multiplier: 1.2, label: 'Structural Repairs' },
    'waterproofing': { base: 120, multiplier: 0.8, label: 'Waterproofing' },
    'emergency': { base: 250, multiplier: 1.5, label: 'Emergency Repairs' }
  };

  const propertyMultipliers = {
    'residential': 1.0,
    'commercial': 1.4,
    'heritage': 1.6,
    'highrise': 1.8
  };

  const urgencyMultipliers = {
    'standard': 1.0,
    'urgent': 1.3,
    'emergency': 1.8
  };

  const locationMultipliers = {
    'inner-sydney': 1.2,
    'eastern-suburbs': 1.3,
    'north-shore': 1.25,
    'northern-beaches': 1.15,
    'inner-west': 1.1,
    'greater-sydney': 1.0
  };

  useEffect(() => {
    calculateEstimate();
  }, [formData]);

  const calculateEstimate = () => {
    if (!formData.serviceType || !formData.propertyType || !formData.urgency || !formData.location) {
      setEstimate(null);
      return;
    }

    const service = serviceRates[formData.serviceType as keyof typeof serviceRates];
    const propertyMult = propertyMultipliers[formData.propertyType as keyof typeof propertyMultipliers];
    const urgencyMult = urgencyMultipliers[formData.urgency as keyof typeof urgencyMultipliers];
    const locationMult = locationMultipliers[formData.location as keyof typeof locationMultipliers];
    
    const basePrice = service.base * service.multiplier;
    const sizeMultiplier = Math.max(0.5, formData.propertySize[0] / 100);
    
    const total = Math.round(basePrice * sizeMultiplier * propertyMult * urgencyMult * locationMult);
    setEstimate(total);
  };

  const handleGetQuote = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactData.name || !contactData.phone || !contactData.email) {
      toast.error('Please fill in all contact details');
      return;
    }

    setIsSubmitting(true);
    
    // Send to Zapier
    const zapierResult = await sendFormToZapier('quote_calculator', {
      ...contactData,
      estimatedCost: estimate,
      projectDetails: {
        serviceType: formData.serviceType,
        propertyType: formData.propertyType,
        propertySize: formData.propertySize[0],
        urgency: formData.urgency,
        location: formData.location
      },
      formName: 'Smart Quote Calculator'
    });
    
    if (!zapierResult.success) {
      console.warn('Failed to send to Zapier:', zapierResult.error);
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Quote request submitted! We\'ll contact you within 2 hours with your detailed quote.');
    
    // Reset
    setShowContactForm(false);
    setContactData({ name: '', phone: '', email: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gradient-to-br from-background via-muted/20 to-background p-6 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="max-w-2xl mx-auto floating-shadow">
          <CardHeader className="text-center space-y-4">
            <motion.div
              className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Calculator className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-2xl font-bold">
              AI-Powered Quote Calculator
            </CardTitle>
            <p className="text-muted-foreground">
              Get an instant estimate for your building project
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Service Type */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Service Type</label>
              <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(serviceRates).map(([key, service]) => (
                    <SelectItem key={key} value={key}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Property Type</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'residential', label: 'Residential', icon: Home },
                  { key: 'commercial', label: 'Commercial', icon: Zap },
                  { key: 'heritage', label: 'Heritage', icon: Clock },
                  { key: 'highrise', label: 'High-rise', icon: DollarSign }
                ].map((type) => (
                  <motion.button
                    key={type.key}
                    className={`p-4 rounded-lg border-2 transition-all micro-interaction ${
                      formData.propertyType === type.key 
                        ? 'border-primary bg-primary/10' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                    onClick={() => setFormData({...formData, propertyType: type.key})}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <type.icon className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">{type.label}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Property Size */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">
                Property Size: {formData.propertySize[0]}m²
              </label>
              <Slider
                value={formData.propertySize}
                onValueChange={(value) => setFormData({...formData, propertySize: value})}
                max={500}
                min={50}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>50m²</span>
                <span>500m²</span>
              </div>
            </div>

            {/* Urgency */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Project Urgency</label>
              <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (2-4 weeks)</SelectItem>
                  <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                  <SelectItem value="emergency">Emergency (24-48 hours)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Location</label>
              <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select your area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inner-sydney">Inner Sydney</SelectItem>
                  <SelectItem value="eastern-suburbs">Eastern Suburbs</SelectItem>
                  <SelectItem value="north-shore">North Shore</SelectItem>
                  <SelectItem value="northern-beaches">Northern Beaches</SelectItem>
                  <SelectItem value="inner-west">Inner West</SelectItem>
                  <SelectItem value="greater-sydney">Greater Sydney</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Estimate Display */}
            <AnimatePresence>
              {estimate && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
                >
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Estimated Project Cost</div>
                      <div className="text-4xl font-bold text-primary">
                        ${estimate.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ± 20% (Final quote after assessment)
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="secondary">Free Assessment</Badge>
                      <Badge variant="secondary">Licensed & Insured</Badge>
                      <Badge variant="secondary">25+ Years Experience</Badge>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full hover-glow-strong"
                      onClick={() => setShowContactForm(true)}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Get Detailed Quote
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Form Modal */}
            <AnimatePresence>
              {showContactForm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                  onClick={() => setShowContactForm(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-background rounded-xl p-6 max-w-md w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-xl font-bold mb-4">Get Your Detailed Quote</h3>
                    <form onSubmit={handleGetQuote} className="space-y-4">
                      <Input
                        placeholder="Full Name"
                        value={contactData.name}
                        onChange={(e) => setContactData({...contactData, name: e.target.value})}
                        required
                      />
                      <Input
                        placeholder="Phone Number"
                        value={contactData.phone}
                        onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={contactData.email}
                        onChange={(e) => setContactData({...contactData, email: e.target.value})}
                        required
                      />
                      <div className="flex gap-3">
                        <Button type="submit" className="flex-1" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open('tel:0414922276')}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};