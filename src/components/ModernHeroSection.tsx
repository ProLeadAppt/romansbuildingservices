import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Shield, Award, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { sendFormToZapier } from '@/utils/zapierWebhook';
import heroImage from '@/assets/hero-masonry.jpg';

export const ModernHeroSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Send to Zapier
    const zapierResult = await sendFormToZapier('hero_contact', {
      ...formData,
      formName: 'Modern Hero Section Contact'
    });
    
    if (!zapierResult.success) {
      console.warn('Failed to send to Zapier:', zapierResult.error);
    }
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
    
    // Navigate to thank you page
    navigate('/thank-you');
  };

  const trustBadges = [
    { icon: Shield, text: 'Licensed & Insured', color: 'text-green-600' },
    { icon: Award, text: '25+ Years Experience', color: 'text-blue-600' },
    { icon: Clock, text: 'Prompt Response', color: 'text-orange-600' },
    { icon: Users, text: '1000+ Happy Clients', color: 'text-purple-600' }
  ];

  const stats = [
    { number: 'Over 1000', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: 'High', label: 'Customer Satisfaction' },
    { number: 'Prompt', label: 'Response Times' }
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-background/80 rounded-full px-4 py-2 trust-shadow"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="gradient-text">Established Sydney</span>
                <br />
                Masonry & Restoration Specialists
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Comprehensive masonry, restoration & structural solutions. 
                <span className="text-primary font-semibold"> Licensed, insured & established since 1995.</span>
              </motion.p>
            </div>

            {/* Limited Time Offer */}
            <motion.div
              className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 space-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  LIMITED TIME
                </span>
                <Star className="w-5 h-5 text-secondary fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                Building Assessment & Quote
              </h3>
              <p className="text-muted-foreground">
                Comprehensive evaluation and detailed quote for your project.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 cta-shadow hover-lift group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 hover-lift"
                onClick={() => window.open('tel:+61483981292')}
              >
                <Phone className="w-5 h-5 mr-2" />
                +61 483 981 292
              </Button>
            </motion.div>

            {/* Professional Service */}
            <motion.div
              className="bg-primary/10 border border-primary/20 rounded-xl p-4 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Professional Service</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Structural issues? Building problems? We provide professional masonry and restoration solutions with prompt response within 48-72 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Lead Capture Form */}
          <motion.div
            className="lg:pl-8 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="floating-shadow hover-glow border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Get Your Assessment</h3>
                  <p className="text-muted-foreground">
                    Property evaluation + detailed quote within 2-3 business days
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="transition-smooth"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="transition-smooth"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="transition-smooth"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
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
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Textarea
                      placeholder="Describe your project or issue..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={3}
                      className="transition-smooth"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg py-6 cta-shadow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting...
                        </div>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Get Assessment
                        </>
                      )}
                    </Button>
                  </motion.div>
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
                        <span className="font-semibold">+61 483 981 292</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>romanspropertyservices@gmail.com</span>
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

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};