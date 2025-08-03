import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, Calendar, Award, Shield, Heart, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';
import { useSmartDefaults } from "@/hooks/useSmartDefaults";
import { useFormValidation } from "@/hooks/useFormValidation";
import { AssessmentPopup } from "@/components/AssessmentPopup";

const heroBackgroundImage = '/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg';

export const RomansPremiumHeroSection = () => {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);
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
  const navigate = useNavigate();
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
      
      <div className="relative z-10 container mx-auto px-4 pt-24 sm:pt-20 pb-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[85vh]">
          
          {/* Left Column - Refined Content */}
          <div className="text-white space-y-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-3 py-1 text-sm font-semibold shadow-lg border-0">
                <Award className="h-4 w-4 mr-1" />
                30+ Years Experience
              </Badge>
              <Badge className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-3 py-1 text-sm font-semibold">
                <Shield className="h-4 w-4 mr-1" />
                Licensed & Insured
              </Badge>
            </div>

            {/* Refined Headline */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-amber-400 font-semibold text-base tracking-wide">
                  Sydney's Trusted Masonry Family
                </p>
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                  <span className="block text-white">
                    Quality Masonry &
                  </span>
                  <span className="block text-amber-400 font-black">
                    Heritage Restoration
                  </span>
                </h1>
              </div>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                From heritage buildings to modern homes, we bring decades of craftsmanship to every Sydney project.
              </p>
            </div>

            {/* Compact Statistics */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "1000+", label: "Projects", icon: Heart },
                { number: "30+", label: "Years", icon: Calendar },
                { number: "100%", label: "Satisfaction", icon: Users }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                    <stat.icon className="h-5 w-5 text-amber-400 mx-auto mb-1" />
                    <div className="text-xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-white/80">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => setShowAssessmentPopup(true)}
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-6 py-4 rounded-xl shadow-xl border-0 flex-1"
              >
                <CheckCircle2 className="h-5 w-5 mr-2" />
                Get Free Assessment
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('tel:+61483981292')}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-black font-semibold px-6 py-4 rounded-xl flex-1"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Minas
              </Button>
            </div>

            {/* Leave a Review Button */}
            <div className="flex justify-center sm:justify-start">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2" 
                onClick={() => window.open('/review', '_blank')}
              >
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                Leave a Review
              </Button>
            </div>

            {/* Simple Value Proposition */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Family Business Promise</p>
                  <p className="text-white/80 text-sm">Personal attention to every project, honest pricing, quality guaranteed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Compact Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
              {/* Compact Header */}
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
                      <div className="relative">
                        <select
                          id="service"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium appearance-none cursor-pointer focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 shadow-sm hover:shadow-md"
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
                      <Label htmlFor="location">Where in Sydney?</Label>
                      <div className="relative">
                        <select
                          id="location"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-medium appearance-none cursor-pointer focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 shadow-sm hover:shadow-md"
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

      {/* Assessment Popup */}
      <AssessmentPopup 
        isOpen={showAssessmentPopup} 
        onClose={() => setShowAssessmentPopup(false)} 
      />
    </section>
  );
};