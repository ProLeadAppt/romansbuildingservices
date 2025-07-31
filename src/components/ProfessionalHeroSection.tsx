import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      {/* Premium Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Premium Content */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badges */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center space-y-2 bg-white/90 backdrop-blur-sm border rounded-xl p-3 card-shadow hover-lift"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <badge.icon className={`w-6 h-6 ${badge.color}`} />
                  <span className="text-xs font-medium text-center leading-tight text-foreground">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Headline */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-1">
                  <Zap className="w-4 h-4 mr-2" />
                  Sydney's #1 Building Specialists
                </Badge>
                
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold leading-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="gradient-text">Premium Building</span>
                  <br />
                  <span className="text-white">Solutions</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-white/90 max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Expert masonry, restoration & structural solutions with 
                  <span className="text-secondary font-semibold"> 25+ years of unmatched expertise.</span>
                  Licensed, insured & trusted across Sydney.
                </motion.p>
              </div>
            </div>

            {/* Premium Offer Box */}
            <motion.div 
              className="bg-white/95 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 space-y-6 floating-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
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
                <p className="text-foreground text-lg">
                  Professional site evaluation and detailed report worth $500 - absolutely free. 
                  Plus save 20% on your project when you book this month.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-foreground/70">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Valid until month end</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No obligation</span>
                </div>
              </div>
            </motion.div>

            {/* Premium Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center space-y-3 group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                >
                  <div className="mx-auto w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-8 button-shadow hover-lift bg-gradient-to-r from-primary to-primary/90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free $500 Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-10 py-8 hover-lift border-2 border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('tel:0280000000')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (02) 8000 0000
                </Button>
              </motion.div>
            </motion.div>

            {/* Emergency Service Box */}
            <motion.div 
              className="bg-destructive/90 border-2 border-destructive rounded-xl p-6 space-y-3 hover-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white text-lg">24/7 Emergency Response</span>
              </div>
              <p className="text-white/90">
                Structural damage? Water ingress? Foundation issues? We respond within 2 hours for all emergencies across Sydney.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Lead Capture Form */}
          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="card-shadow border-primary/30 bg-white/95 backdrop-blur-sm">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};