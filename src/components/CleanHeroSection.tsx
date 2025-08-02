import React, { useState } from 'react';
const heroBackgroundImage = '/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Shield, Award, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const CleanHeroSection = () => {
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
    { number: 'Over 1000', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: 'High', label: 'Customer Satisfaction' },
    { number: 'Prompt', label: 'Response Times' }
  ];

  return (
    <div className="relative min-h-screen flex items-center py-20">
      {/* Professional Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-background border rounded-full px-4 py-2 card-shadow">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-background border rounded-full px-4 py-2 card-shadow">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-background border rounded-full px-4 py-2 card-shadow">
                <Clock className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Prompt Response</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Established Sydney</span>
                <br />
                Masonry & Restoration Specialists
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Comprehensive masonry, restoration & structural solutions. 
                <span className="text-primary font-semibold"> Licensed, insured & established since 1995.</span>
              </p>
            </div>

            {/* Limited Time Offer */}
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  LIMITED TIME
                </span>
                <Star className="w-5 h-5 text-secondary fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                Building Assessment + Quote
              </h3>
              <p className="text-muted-foreground">
                Comprehensive evaluation and detailed quote for your project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 button-shadow hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 hover-lift"
                onClick={() => window.open('tel:0414922276')}
              >
                <Phone className="w-5 h-5 mr-2" />
                0414 922 276
              </Button>
            </div>

            {/* Professional Service */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Professional Service</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Structural issues? Building problems? We provide professional masonry and restoration solutions with prompt response within 48-72 hours.
              </p>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="lg:pl-8">
            <Card className="card-shadow border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Get Your Assessment</h3>
                  <p className="text-muted-foreground">
                    Property evaluation + detailed quote within 2-3 business days
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="transition-smooth"
                    />
                    <Input
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="transition-smooth"
                    />
                  </div>

                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="transition-smooth"
                  />

                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="transition-smooth">
                      <SelectValue placeholder="Service Needed *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masonry">Masonry & Brickwork</SelectItem>
                      <SelectItem value="restoration">Building Restoration</SelectItem>
                      <SelectItem value="structural">Structural Repairs</SelectItem>
                      <SelectItem value="foundation">Foundation Repairs</SelectItem>
                      <SelectItem value="assessment">Building Assessment</SelectItem>
                      <SelectItem value="consultation">Professional Consultation</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Describe your project or issue..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    className="transition-smooth"
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 button-shadow"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Get Assessment
                  </Button>
                </form>

                <div className="space-y-4 pt-4 border-t">
                  <div className="text-center space-y-2">
                    <p className="text-sm font-semibold text-primary">What's Included:</p>
                    <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Professional site inspection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Detailed written assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>No-obligation fixed-price quote</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2 pt-4 border-t">
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="font-semibold">0414 922 276</span>
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