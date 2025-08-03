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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Premium Content with Character */}
          <div className="text-white space-y-8">
            {/* Trust Badges with Premium Feel */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2 text-sm font-bold shadow-lg border-0">
                <Award className="h-4 w-4 mr-2" />
                30+ Years Mastering Craft
              </Badge>
              <Badge className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-4 py-2 text-sm font-semibold shadow-lg">
                <Shield className="h-4 w-4 mr-2" />
                Licensed & Trusted
              </Badge>
            </div>

            {/* Hero Headline with Premium Typography */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-amber-400 font-semibold text-lg tracking-wide uppercase">
                  Sydney's Premier Masonry Family
                </p>
                <h1 className="text-4xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
                    We Don't Just
                  </span>
                  <span className="block text-amber-400 text-5xl lg:text-8xl font-black italic transform -rotate-1 relative">
                    Restore Buildings
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                  </span>
                  <span className="block text-white mt-2">
                    We Restore Dreams
                  </span>
                </h1>
              </div>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-lg font-light">
                From heritage mansions to family homes, we breathe new life into Sydney's most cherished buildings.
                <span className="block mt-2 text-amber-300 font-medium">
                  ✨ Every brick tells a story. Let us help write yours.
                </span>
              </p>
            </div>

            {/* Premium Statistics with Character */}
            <div className="grid grid-cols-3 gap-6 my-8">
              {[
                { number: "1000+", label: "Dreams Restored", icon: Heart },
                { number: "30+", label: "Years of Artistry", icon: Calendar },
                { number: "100%", label: "Family Dedication", icon: Users }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <stat.icon className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                    <div className="text-2xl lg:text-3xl font-black text-white">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compelling CTAs */}
            <div className="flex flex-col gap-4">
              <Button 
                onClick={handlePhoneSubmit}
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-lg px-8 py-6 rounded-2xl shadow-2xl border-0 transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 mr-3" />
                  Start Your Story Today
                  <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('tel:+61483981292')}
                className="group relative bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5 mr-3" />
                Chat with Minas Now
                <span className="ml-2 text-sm opacity-80 group-hover:opacity-100">(+61 483 981 292)</span>
              </Button>
            </div>

            {/* Premium Value Proposition */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">The Roman's Promise</h3>
                  <p className="text-white/90 leading-relaxed">
                    When you choose us, you're not just hiring contractors—you're partnering with a family that's been perfecting the art of masonry for over three decades. We treat every project like it's our own home.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Licensed Masonry Masters", accent: "text-green-400" },
                { icon: Award, label: "Heritage Restoration Experts", accent: "text-blue-400" },
                { icon: CheckCircle2, label: "Honest Pricing Promise", accent: "text-purple-400" },
                { icon: Heart, label: "Community Champions", accent: "text-pink-400" }
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-lg px-4 py-3 border border-white/10">
                  <badge.icon className={`h-5 w-5 ${badge.accent}`} />
                  <span className="text-white font-medium text-sm">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Assessment Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-gradient-to-br from-white via-white to-white/95 shadow-2xl border-0 rounded-3xl overflow-hidden">
              {/* Premium Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Complimentary Dream Assessment
                </h3>
                <p className="text-white/90 text-sm">
                  Let's explore what's possible for your special project
                </p>
                
                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${currentStep >= 1 ? 'bg-white' : 'bg-white/30'}`} />
                  <div className={`w-12 h-1 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-white' : 'bg-white/30'}`} />
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${currentStep >= 2 ? 'bg-white' : 'bg-white/30'}`} />
                </div>
                <p className="text-white/80 text-sm mt-2 font-medium">
                  Step {currentStep} of 2 - Almost there!
                </p>
              </div>

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