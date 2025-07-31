import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, Mail, MapPin, Clock, 
  CheckCircle, Send, MessageSquare, 
  Car, Shield, Award, Calendar 
} from 'lucide-react';
import { toast } from 'sonner';

export const ModernContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    urgency: '',
    message: '',
    preferredContact: 'phone'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll respond within 2 hours during business hours.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      urgency: '',
      message: '',
      preferredContact: 'phone'
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Professional Service Line',
      content: '0414 922 276',
      action: 'tel:0414922276',
      description: 'All inquiries, quotes and emergency responses',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@romansbuildingservices.com.au',
      action: 'mailto:info@romansbuildingservices.com.au',
      description: 'Detailed inquiries and document sharing',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
  ];

  const serviceAreas = [
    'Sydney CBD', 'North Sydney', 'Eastern Suburbs', 'Inner West',
    'Northern Beaches', 'Hills District', 'Western Sydney', 'South Sydney'
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency calls only' },
    { day: 'Public Holidays', hours: 'Emergency calls only' }
  ];

  const emergencyFeatures = [
    'Same-day response for emergencies',
    'Licensed emergency building services',
    'Insurance claim assistance',
    'Temporary protection measures'
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          Get Your <span className="gradient-text">Free Assessment</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ready to start your project? Contact Sydney's most trusted building specialists for your free consultation and detailed quote.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="floating-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Request Your Free Assessment</h3>
                    <p className="text-muted-foreground">
                      Get expert evaluation and detailed quote within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
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

                    {/* Service & Urgency */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Service Needed *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masonry">Masonry & Brickwork</SelectItem>
                          <SelectItem value="restoration">Building Restoration</SelectItem>
                          <SelectItem value="structural">Structural Repairs</SelectItem>
                          <SelectItem value="waterproofing">Waterproofing</SelectItem>
                          <SelectItem value="assessment">Building Assessment</SelectItem>
                          <SelectItem value="emergency">Emergency Repairs</SelectItem>
                          <SelectItem value="maintenance">Maintenance Services</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Project Urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (24-48 hours)</SelectItem>
                          <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                          <SelectItem value="standard">Standard (1-2 months)</SelectItem>
                          <SelectItem value="planning">Planning stage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Preferred Contact Method</label>
                      <div className="flex flex-wrap gap-2">
                        {['phone', 'email'].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setFormData({...formData, preferredContact: method})}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              formData.preferredContact === method
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted hover:bg-muted-foreground/10'
                            }`}
                          >
                            {method.charAt(0).toUpperCase() + method.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Textarea
                        placeholder="Tell us about your project or building issue..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="transition-smooth"
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" size="lg" className="w-full text-lg py-6 cta-shadow">
                        <Send className="w-5 h-5 mr-2" />
                        Send Request
                      </Button>
                    </motion.div>
                  </form>

                  {/* What's Included */}
                  <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                    <h4 className="font-semibold text-primary">Your Free Assessment Includes:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Professional site inspection',
                        'Detailed written report',
                        'Fixed-price quote',
                        'Timeline & methodology',
                        'Material recommendations',
                        'No-obligation consultation'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="cursor-pointer hover-lift transition-smooth"
                  onClick={() => window.open(method.action)}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${method.bgColor}`}>
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <div className={`font-medium ${method.color} mb-2`}>
                          {method.content}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-8">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="floating-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <Badge variant="destructive" className="w-full justify-center py-2">
                    <Phone className="w-4 h-4 mr-2" />
                    24/7 Emergency Service
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Emergency Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="floating-shadow border-destructive/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-destructive" />
                  <h3 className="text-xl font-semibold">Emergency Services</h3>
                </div>
                <div className="space-y-3">
                  {emergencyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="destructive" 
                  size="lg" 
                  className="w-full mt-4"
                  onClick={() => window.open('tel:0414922276')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: 0414 922 276
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="floating-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Service Areas</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, idx) => (
                    <Badge key={idx} variant="outline" className="justify-center py-2">
                      {area}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Car className="w-4 h-4 text-primary" />
                    <span>Free site visits within 25km</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Licensed across all Sydney councils</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="w-full hover-lift"
              onClick={() => window.open('tel:0414922276')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now for Instant Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full hover-lift"
              onClick={() => window.open('https://calendly.com/romansbuildingservices')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Online Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};