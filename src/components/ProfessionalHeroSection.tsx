import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Shield, Award, Clock, Users, Star, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { toast } from 'sonner';

export const ProfessionalHeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Quote request submitted! We\'ll contact you within 2 hours.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const stats = [
    { number: '1000+', label: 'Projects Completed', icon: CheckCircle },
    { number: '25+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Satisfaction Rate', icon: Star },
    { number: '24/7', label: 'Emergency Service', icon: Clock }
  ];

  const trustBadges = [
    { icon: Shield, text: 'Licensed & Insured', color: 'text-green-600' },
    { icon: Award, text: 'Master Builders Association', color: 'text-blue-600' },
    { icon: Clock, text: '24/7 Emergency Response', color: 'text-orange-600' },
    { icon: Star, text: '5-Star Google Rating', color: 'text-yellow-600' }
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Premium Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/hero-background.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/90" />
      
      {/* Premium Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Premium Content */}
          <div className="space-y-10">
            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 bg-background/60 backdrop-blur-sm border rounded-xl p-3 card-shadow">
                  <badge.icon className={`w-6 h-6 ${badge.color}`} />
                  <span className="text-xs font-medium text-center leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Premium Headline */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-1">
                  <Zap className="w-4 h-4 mr-2" />
                  Sydney's #1 Building Specialists
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Premium Building</span>
                  <br />
                  <span className="text-foreground">Solutions</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Expert masonry, restoration & structural solutions with 
                  <span className="text-primary font-semibold"> 25+ years of unmatched expertise.</span>
                  Licensed, insured & trusted across Sydney.
                </p>
              </div>
            </div>

            {/* Premium Offer Box */}
            <div className="bg-gradient-to-r from-secondary/5 to-primary/5 border border-secondary/20 rounded-2xl p-8 space-y-6 floating-shadow">
              <div className="flex items-center space-x-3">
                <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold">
                  EXCLUSIVE OFFER
                </Badge>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-2">
                  FREE $500 Assessment + 20% Off
                </h3>
                <p className="text-muted-foreground text-lg">
                  Professional site evaluation and detailed report worth $500 - absolutely free. 
                  Plus save 20% on your project when you book this month.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Valid until month end</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No obligation</span>
                </div>
              </div>
            </div>

            {/* Premium Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3 group">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-10 py-8 button-shadow hover-lift bg-gradient-to-r from-primary to-primary/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free $500 Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-8 hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('tel:0280000000')}
              >
                <Phone className="w-5 h-5 mr-2" />
                (02) 8000 0000
              </Button>
            </div>

            {/* Emergency Service Box */}
            <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-6 space-y-3 hover-glow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-destructive" />
                </div>
                <span className="font-bold text-destructive text-lg">24/7 Emergency Response</span>
              </div>
              <p className="text-muted-foreground">
                Structural damage? Water ingress? Foundation issues? We respond within 2 hours for all emergencies across Sydney.
              </p>
            </div>
          </div>

          {/* Right Column - Premium Lead Capture Form */}
          <div className="lg:pl-8">
            <Card className="card-shadow border-primary/30 bg-background/95 backdrop-blur-sm">
              <CardContent className="p-10 space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">Get Your FREE Assessment</span>
                  </div>
                  <h3 className="text-3xl font-bold">Worth $500 - Completely Free</h3>
                  <p className="text-muted-foreground text-lg">
                    Professional evaluation + detailed quote within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12 transition-smooth border-primary/20 focus:border-primary"
                    />
                    <Input
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12 transition-smooth border-primary/20 focus:border-primary"
                    />
                  </div>

                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12 transition-smooth border-primary/20 focus:border-primary"
                  />

                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="h-12 transition-smooth border-primary/20">
                      <SelectValue placeholder="Service Needed *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masonry">Premium Masonry & Brickwork</SelectItem>
                      <SelectItem value="restoration">Heritage Building Restoration</SelectItem>
                      <SelectItem value="structural">Structural Repairs & Reinforcement</SelectItem>
                      <SelectItem value="waterproofing">Advanced Waterproofing</SelectItem>
                      <SelectItem value="assessment">Professional Building Assessment</SelectItem>
                      <SelectItem value="emergency">Emergency Structural Repairs</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Describe your project or issue..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="transition-smooth border-primary/20 focus:border-primary"
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 button-shadow bg-gradient-to-r from-primary to-primary/90"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Get My FREE $500 Assessment
                  </Button>
                </form>

                <div className="space-y-6 pt-6 border-t">
                  <div className="text-center space-y-4">
                    <p className="text-sm font-semibold text-primary">What's Included in Your FREE Assessment:</p>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        'Comprehensive professional site inspection',
                        'Detailed written assessment report',
                        'No-obligation fixed-price quote',
                        'Expert recommendations & solutions',
                        'Priority booking for approved projects'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center space-y-3 pt-6 border-t">
                    <div className="flex items-center justify-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="font-semibold">(02) 8000 0000</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>info@romansbuildingservices.com.au</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Serving Greater Sydney & Surrounding Areas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};