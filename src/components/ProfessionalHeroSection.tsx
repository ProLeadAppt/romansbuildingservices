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
import { AssessmentPopup } from '@/components/AssessmentPopup';

export const ProfessionalHeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

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
    <div className="relative min-h-screen flex items-center pt-20 md:pt-24">
      {/* Premium Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/hero-background.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      {/* Streamlined Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Focused Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Core Trust Elements */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-secondary text-secondary-foreground px-3 py-1">
                <Shield className="w-4 h-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                25+ Years Experience
              </Badge>
            </motion.div>

            {/* Powerful Headline */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8), 0 0 25px rgba(0,0,0,0.6)',
                WebkitTextStroke: '1px rgba(0,0,0,0.3)'
              }}>
                Sydney's #1
                <br />
                <span className="text-secondary font-bold" style={{
                  textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8), 0 0 25px rgba(0,0,0,0.6)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.3)'
                }}>Building Experts</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white max-w-lg leading-relaxed drop-shadow-lg" style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
              }}>
                Professional masonry, restoration & structural solutions. 
                <span className="text-secondary font-semibold"> Get your FREE $500 assessment today.</span>
              </p>
            </motion.div>

            {/* Key Stats - Simplified */}
            <motion.div 
              className="flex items-center justify-between sm:justify-start sm:space-x-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">1000+</div>
                <div className="text-xs sm:text-sm text-white/80">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">100%</div>
                <div className="text-xs sm:text-sm text-white/80">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Emergency</div>
              </div>
            </motion.div>

            {/* Enhanced CTAs with Review Option */}
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="w-full text-base sm:text-lg px-6 sm:px-12 py-6 sm:py-8 button-shadow bg-gradient-to-r from-secondary to-secondary/90 text-white font-bold"
                  onClick={() => setShowAssessmentPopup(true)}
                >
                  Get FREE $500 Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-8 border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                  onClick={() => window.open('tel:0414922276')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0414 922 276
                </Button>
              </motion.div>
            </motion.div>

            {/* Review CTA */}
            <motion.div 
              className="flex justify-center sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/30"
                onClick={() => window.open('/review', '_blank')}
              >
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                Leave a Review
              </Button>
            </motion.div>

            {/* Emergency Note - Simplified */}
            <motion.div 
              className="flex items-center space-x-3 bg-destructive/20 rounded-lg p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">24/7 Emergency Response - 2 Hour Response Time</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Streamlined Form */}
          <motion.div 
            className="lg:pl-8 order-1 lg:order-2 relative z-50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="card-shadow border-secondary/30 bg-white/95 backdrop-blur-sm relative z-50">
              <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-secondary">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <span className="text-sm sm:text-base font-semibold">FREE Assessment</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Worth $500 - Completely Free</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Get your professional quote within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <Input
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-10 sm:h-12"
                    />
                    <Input
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-10 sm:h-12"
                    />
                  </div>

                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-10 sm:h-12"
                  />

                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="h-10 sm:h-12">
                      <SelectValue placeholder="Service Needed *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masonry">Masonry & Brickwork</SelectItem>
                      <SelectItem value="restoration">Building Restoration</SelectItem>
                      <SelectItem value="structural">Structural Repairs</SelectItem>
                      <SelectItem value="waterproofing">Waterproofing</SelectItem>
                      <SelectItem value="assessment">Building Assessment</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Brief description of your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-base sm:text-lg py-4 sm:py-6 button-shadow bg-gradient-to-r from-primary to-primary/90"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get My FREE Assessment
                  </Button>
                </form>

                <div className="text-center pt-4 border-t space-y-3">
                  <p className="text-sm font-semibold text-primary">✓ No obligation ✓ 2-hour response ✓ Licensed professionals</p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="font-semibold">0414 922 276</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Sydney Wide</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Assessment Popup */}
      <AssessmentPopup 
        isOpen={showAssessmentPopup} 
        onClose={() => setShowAssessmentPopup(false)} 
      />
    </div>
  );
};