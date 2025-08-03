import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, Calendar, Award, Shield, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useSmartDefaults } from "@/hooks/useSmartDefaults";
import { useFormValidation } from "@/hooks/useFormValidation";

const heroBackgroundImage = '/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg';

export const RomansPremiumHeroSection = () => {
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
  const { validateField, getFieldError, isFieldValid } = useFormValidation();

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Thank you!",
        description: "We'll be in touch within 24 hours to discuss your project.",
      });
      
      // Reset form
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

  const statistics = [
    { icon: Users, label: "1000+ Happy Clients", desc: "Satisfied homeowners" },
    { icon: Calendar, label: "30+ Years Experience", desc: "Trusted expertise" },
    { icon: Heart, label: "Family Business", desc: "Personal touch" },
    { icon: Award, label: "Sydney Local", desc: "Community trusted" }
  ];

  const trustBadges = [
    { icon: Shield, label: "Licensed Masonry Specialists" },
    { icon: Heart, label: "Family Owned & Operated" },
    { icon: CheckCircle2, label: "Honest Upfront Pricing" },
    { icon: Award, label: "Community Trusted" }
  ];

   return (
    <section className="relative min-h-screen -mt-24 flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -top-24 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <link rel="preload" href={heroBackgroundImage} as="image" />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 -top-24 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 pb-8 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Sydney's Trusted
                <span className="block text-accent">Masonry Family</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                We're here to help with your masonry needs - from simple repairs to complete heritage restoration
              </p>
              <p className="text-lg text-white/80">
                No pressure, just honest advice from people who care about your project
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="h-6 w-6 text-accent" />
                    <span className="font-semibold text-white">{stat.label}</span>
                  </div>
                  <p className="text-sm text-white/70">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Direct Contact Option */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-white font-medium">Prefer to chat directly?</p>
                  <p className="text-white/80 text-sm">Call Minas for a friendly conversation</p>
                </div>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="ml-auto"
                  onClick={() => window.open('tel:+61483981292')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="p-3 justify-start bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <badge.icon className="h-4 w-4 mr-2" />
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Assessment Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white shadow-2xl border-0">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl text-primary">
                  Complimentary Building Assessment
                </CardTitle>
                <p className="text-muted-foreground">
                  We understand every building is unique, just like every client
                </p>
                
                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className={`w-3 h-3 rounded-full ${currentStep >= 1 ? 'bg-primary' : 'bg-gray-200'}`} />
                  <div className={`w-8 h-0.5 ${currentStep >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
                  <div className={`w-3 h-3 rounded-full ${currentStep >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Step {currentStep} of 2
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0483 981 292"
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
                      className="w-full"
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
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">What can we help with?</Label>
                      <select
                        id="service"
                        className="w-full p-2 border rounded-md"
                        value={formData.service}
                        onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                        required
                      >
                        <option value="">Select a service...</option>
                        {suggestedServices.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label} - {service.desc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location in Sydney</Label>
                      <Input
                        id="location"
                        placeholder="e.g., Bondi, CBD, Inner West"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        list="sydney-areas"
                      />
                      <datalist id="sydney-areas">
                        {sydneyAreas.map((area) => (
                          <option key={area} value={area} />
                        ))}
                      </datalist>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your project (optional)</Label>
                      <textarea
                        id="message"
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
                        className="flex-1"
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
          </div>
        </div>
      </div>
    </section>
  );
};