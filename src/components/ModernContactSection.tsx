import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, MessageSquare, Car, Shield, Award, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import { sendFormToZapier } from '@/utils/zapierWebhook';
const stoneWallBackground = '/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg';
const minasPhoto = '/lovable-uploads/fca9df0e-1672-43ed-a1a0-4d254b541a48.png';
export const ModernContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    urgency: 'normal',
    message: '',
    preferredContact: 'phone'
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
    const zapierResult = await sendFormToZapier('modern_contact', {
      ...formData,
      formName: 'Modern Contact Section'
    });
    if (!zapierResult.success) {
      console.warn('Failed to send to Zapier:', zapierResult.error);
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Message sent successfully! We\'ll get back to you within 2 hours.');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      urgency: 'normal',
      message: '',
      preferredContact: 'phone'
    });
    setIsSubmitting(false);
  };
  const contactMethods = [{
    icon: Phone,
    title: 'Professional Service Line',
    content: '+61 414 922 276',
    action: 'tel:+61414922276',
    description: 'All inquiries, quotes and priority responses',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  }, {
    icon: Mail,
    title: 'Email Us',
    content: 'romanspropertyservices@gmail.com',
    action: 'mailto:romanspropertyservices@gmail.com',
    description: 'Detailed inquiries and document sharing',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }];
  const serviceAreas = ['Sydney CBD', 'North Sydney', 'Eastern Suburbs', 'Inner West', 'Northern Beaches', 'Hills District', 'Western Sydney', 'South Sydney'];
  const businessHours = [{
    day: 'Monday - Friday',
    hours: '7:00 AM - 6:00 PM'
  }, {
    day: 'Saturday',
    hours: '8:00 AM - 4:00 PM'
  }, {
    day: 'Sunday',
    hours: 'Priority calls only'
  }, {
    day: 'Public Holidays',
    hours: 'Priority calls only'
  }];
  const priorityFeatures = ['Prompt response for all inquiries', 'Licensed masonry services', '24-48hr response from Minas or Sandra', 'Professional stonework solutions'];
  return <div className="relative">
      {/* Stone Wall Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" style={{
      backgroundImage: `url(${stoneWallBackground})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      
      <div className="container mx-auto px-4 relative">
      <motion.div className="text-center space-y-4 mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
        <h2 className="text-4xl font-bold">
          Get Your <span className="gradient-text">Free Assessment</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ready to start your project? Contact Sydney's most trusted masonry & restoration specialists for your free consultation and detailed quote.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6 lg:space-y-8">
          <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
            <Card className="floating-shadow">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Request Your Free Assessment</h3>
                    <p className="text-muted-foreground">
                      Get expert evaluation and detailed quote within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <motion.div whileFocus={{
                        scale: 1.02
                      }} className="md:col-span-1">
                        <Input placeholder="Full Name *" value={formData.name} onChange={e => setFormData({
                          ...formData,
                          name: e.target.value
                        })} required className="transition-smooth h-11 md:h-12 touch-target" />
                      </motion.div>
                      <motion.div whileFocus={{
                        scale: 1.02
                      }} className="md:col-span-1">
                        <Input placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({
                          ...formData,
                          phone: e.target.value
                        })} required className="transition-smooth h-11 md:h-12 touch-target" />
                      </motion.div>
                    </div>

                    <motion.div whileFocus={{
                      scale: 1.02
                    }}>
                      <Input type="email" placeholder="Email Address *" value={formData.email} onChange={e => setFormData({
                        ...formData,
                        email: e.target.value
                      })} required className="transition-smooth h-11 md:h-12 touch-target" />
                    </motion.div>

                    {/* Service & Urgency */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <Select value={formData.service} onValueChange={value => setFormData({
                        ...formData,
                        service: value
                      })}>
                        <SelectTrigger className="h-11 md:h-12 touch-target">
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

                      <Select value={formData.urgency} onValueChange={value => setFormData({
                        ...formData,
                        urgency: value
                      })}>
                        <SelectTrigger className="h-11 md:h-12 touch-target">
                          <SelectValue placeholder="Project Urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prompt">Prompt (2-3 business days)</SelectItem>
                          <SelectItem value="standard2">Standard (1-2 weeks)</SelectItem>
                          <SelectItem value="standard">Standard (1-2 months)</SelectItem>
                          <SelectItem value="planning">Planning stage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-sm font-medium">Preferred Contact Method</label>
                      <div className="flex gap-2">
                        {['phone', 'email'].map(method => <button key={method} type="button" onClick={() => setFormData({
                          ...formData,
                          preferredContact: method
                        })} className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all touch-target ${formData.preferredContact === method ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted-foreground/10'}`}>
                            {method.charAt(0).toUpperCase() + method.slice(1)}
                          </button>)}
                      </div>
                    </div>

                    <motion.div whileFocus={{
                      scale: 1.02
                    }}>
                      <Textarea placeholder="Tell us about your project or building issue..." value={formData.message} onChange={e => setFormData({
                        ...formData,
                        message: e.target.value
                      })} rows={4} className="transition-smooth" />
                    </motion.div>

                    <motion.div whileHover={{
                      scale: 1.02
                    }} whileTap={{
                      scale: 0.98
                    }}>
                      <Button type="submit" size="lg" className="w-full text-base md:text-lg py-4 md:py-6 cta-shadow touch-target" disabled={isSubmitting}>
                        {isSubmitting ? <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </div> : <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Request
                          </>}
                      </Button>
                    </motion.div>
                  </form>

                  {/* What's Included */}
                  <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                    <h4 className="font-semibold text-primary">Your Free Assessment Includes:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {['Professional site inspection', 'Project evaluation', 'Honest quote', 'Timeline & methodology', 'Material recommendations', 'No-obligation consultation'].map((item, idx) => <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          <span className="text-xs sm:text-sm">{item}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div className="grid grid-cols-1 gap-4 sm:gap-6" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }} viewport={{
            once: true
          }}>
            {contactMethods.map((method, index) => <motion.div key={index} whileHover={{
              scale: 1.02,
              y: -2
            }} whileTap={{
              scale: 0.98
            }}>
                <Card className="cursor-pointer hover-lift transition-smooth" onClick={() => window.open(method.action)}>
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`p-2 sm:p-3 rounded-xl ${method.bgColor}`}>
                        <method.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold mb-1">{method.title}</h4>
                        <div className={`text-sm sm:text-base font-medium ${method.color} mb-1 sm:mb-2`}>
                          {method.content}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Business Hours */}
          <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
            <Card className="floating-shadow">
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <h3 className="text-lg sm:text-xl font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {businessHours.map((schedule, idx) => <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm sm:text-base font-medium">{schedule.day}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{schedule.hours}</span>
                    </div>)}
                </div>
                <div className="pt-3 sm:pt-4 border-t">
                  <Badge variant="secondary" className="w-full justify-center py-2 text-xs sm:text-sm">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    After Hours Available
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Priority Services */}
          <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }} viewport={{
            once: true
          }}>
            <Card className="floating-shadow border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Professional Services</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Prompt response for all inquiries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Licensed masonry contractor services</span>
                  </div>
                   <div className="flex items-center space-x-2">
                     <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                     <span className="text-sm">24-48hr response from Minas or Sandra</span>
                   </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Professional masonry solutions</span>
                  </div>
                </div>
                <Button variant="default" size="lg" className="w-full mt-4" onClick={() => window.open('tel:+61414922276')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Contact: +61 414 922 276
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Areas */}
          <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }} viewport={{
            once: true
          }}>
            <Card className="floating-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Service Areas</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, idx) => <Badge key={idx} variant="outline" className="justify-center py-2">
                      {area}
                    </Badge>)}
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

          {/* Personal Availability with Minas Photo */}
          <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} viewport={{
            once: true
          }}>
            <Card className="floating-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img src={minasPhoto} alt="Minas Romanakis working hands-on with masonry restoration" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Speak Directly with Minas</h3>
                      <p className="text-sm text-muted-foreground">Owner & Licensed Masonry Contractor</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "I personally handle all consultations to ensure you get the best service and honest advice."
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <Button size="lg" className="w-full hover-lift" onClick={() => window.open('tel:+61414922276')}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now for Instant Quote
                    </Button>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
    </div>;
};