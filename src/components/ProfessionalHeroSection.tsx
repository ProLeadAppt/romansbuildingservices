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
import { useNavigate } from 'react-router-dom';
import { AssessmentPopup } from '@/components/AssessmentPopup';
import { sendFormToZapier } from '@/utils/zapierWebhook';
import { addPreloadLinks } from '@/utils/imagePreloader';
const heroBackgroundImage = '/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg';
const minasPhoto = '/lovable-uploads/fca9df0e-1672-43ed-a1a0-4d254b541a48.png';
export const ProfessionalHeroSection = () => {
  const navigate = useNavigate();
  
  // Preload critical images for better performance
  React.useEffect(() => {
    addPreloadLinks([
      { src: heroBackgroundImage },
      { src: minasPhoto }
    ]);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Send to Zapier webhook
      const result = await sendFormToZapier('hero_contact', {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'Hero Section Contact Form',
        url: window.location.href
      });
      if (result.success) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
        // Navigate to thank you page
        navigate('/thank-you');
      } else {
        toast.error('Failed to submit request. Please try calling us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit request. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const stats = [{
    number: '1000+',
    label: 'Projects Completed',
    icon: CheckCircle
  }, {
    number: '25+',
    label: 'Years Experience',
    icon: Award
  }, {
    number: '100%',
    label: 'Satisfaction Rate',
    icon: Star
  }, {
    number: '2hr',
    label: 'Response Time',
    icon: Clock
  }];
  const trustBadges = [{
    icon: Shield,
    text: 'Licensed & Insured',
    color: 'text-green-600'
  }, {
    icon: Award,
    text: 'Master Builders Association',
    color: 'text-blue-600'
  }, {
    icon: Clock,
    text: 'Prompt Response',
    color: 'text-orange-600'
  }, {
    icon: Star,
    text: '5-Star Google Rating',
    color: 'text-yellow-600'
  }];
  return <div className="relative min-h-screen -mt-24 flex items-center">
      {/* Premium Background with Overlay - Extended to top */}
      <div 
        className="absolute inset-0 -top-24 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url(${heroBackgroundImage})`
        }}
      >
        <link rel="preload" href={heroBackgroundImage} as="image" />
      </div>
      <div className="absolute inset-0 -top-24 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      {/* Streamlined Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 pb-8 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Focused Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-6 sm:space-y-8 order-1 lg:order-1 px-0 mx-0 py-px my-[11px]">
            {/* Core Trust Elements */}
            <motion.div className="flex items-center space-x-2 sm:space-x-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <Badge className="bg-secondary text-secondary-foreground px-2 py-2 sm:px-3 sm:py-3 text-xs sm:text-sm">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-2 py-2 sm:px-3 sm:py-[14px] text-xs sm:text-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-400 fill-current" />
                25+ Years Experience
              </Badge>
            </motion.div>

            {/* Powerful Headline with Premium Animation */}
            <motion.div className="space-y-4" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8), 0 0 25px rgba(0,0,0,0.6)',
              WebkitTextStroke: '1px rgba(0,0,0,0.3)'
            }}>
                Established Sydney
                <br />
                 <span className="morphing-text font-bold relative bg-black/80 px-4 py-2 rounded-lg backdrop-blur-md text-white" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,1)'
              }}>Masonry Experts</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white max-w-lg leading-relaxed drop-shadow-lg" style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
            }}>
                Comprehensive masonry, restoration & structural solutions. 
                <span className="text-secondary font-semibold"> Building assessment and quote available.</span>
              </p>
            </motion.div>

            {/* Key Stats - Simplified */}
            <motion.div className="flex items-center justify-between sm:justify-start sm:space-x-8" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }}>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">1000+</div>
                <div className="text-xs sm:text-sm text-white/80">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">High</div>
                <div className="text-xs sm:text-sm text-white/80">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">Prompt</div>
                <div className="text-xs sm:text-sm text-white/80">Response</div>
              </div>
            </motion.div>

            {/* Enhanced CTAs with Review Option */}
            <motion.div className="flex flex-col gap-4" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }}>
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button size="lg" className="w-full text-base sm:text-lg px-6 sm:px-12 py-6 sm:py-8 hover-glow-strong bg-gradient-to-r from-secondary to-secondary/90 text-white font-bold micro-interaction" onClick={() => setShowAssessmentPopup(true)}>
                  Get Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button variant="outline" size="lg" className="w-full text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-8 border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm" onClick={() => window.open('tel:0414922276')}>
                  <Phone className="w-5 h-5 mr-2" />
                  0414 922 276
                </Button>
              </motion.div>
            </motion.div>

            {/* Review CTA */}
            <motion.div className="flex justify-center sm:justify-start" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1.0
          }}>
              <Button variant="ghost" className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/30" onClick={() => window.open('/review', '_blank')}>
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                Leave a Review
              </Button>
            </motion.div>

            {/* Professional Service - Simplified */}
            <motion.div className="flex items-center space-x-3 bg-primary/20 rounded-lg p-4" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 1
          }}>
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Professional Service Available - 48-72 Hour Response</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Streamlined Form */}
          <motion.div className="lg:pl-8 order-2 lg:order-2 relative z-50" initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <Card className="card-shadow border-secondary/30 bg-white/95 backdrop-blur-sm relative z-50">
              <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-secondary">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    <span className="text-sm sm:text-base font-semibold">Stonemason Assessment</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Stonemason Assessment & Quote</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Professional masonry evaluation and quote within 2-3 business days
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <Input placeholder="Full Name *" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} required className="h-10 sm:h-12" />
                    <Input placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} required className="h-10 sm:h-12" />
                  </div>

                  <Input type="email" placeholder="Email Address *" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="h-10 sm:h-12" />

                  <Select value={formData.service} onValueChange={value => setFormData({
                  ...formData,
                  service: value
                })}>
                    <SelectTrigger className="h-10 sm:h-12">
                      <SelectValue placeholder="Service Needed *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masonry">Masonry & Brickwork</SelectItem>
                      <SelectItem value="restoration">Stonemason Restoration</SelectItem>
                      <SelectItem value="structural">Structural Repairs</SelectItem>
                      <SelectItem value="foundation">Foundation Repairs</SelectItem>
                      <SelectItem value="assessment">Stonemason Assessment</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea placeholder="Brief description of your project..." value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} rows={3} />

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full text-base sm:text-lg py-4 sm:py-6 button-shadow bg-gradient-to-r from-primary to-primary/90">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Get Assessment'}
                  </Button>
                </form>

                <div className="space-y-4">
                  <div className="text-center pt-4 border-t space-y-3">
                    <p className="text-sm font-semibold text-primary">✓ No obligation ✓ Prompt response ✓ Licensed professionals</p>
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

                  {/* Personal Guarantee with Minas Photo */}
                  <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                         <img 
                          src={minasPhoto} 
                          alt="Minas Romanakis, Licensed Masonry Contractor and owner of Roman's Building Services, with 25+ years of masonry and restoration experience" 
                          className="w-full h-full object-cover" 
                          loading="eager"
                          width="80"
                          height="80"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Our Commitment</p>
                        <p className="text-xs text-muted-foreground">"I personally oversee every project to ensure quality results." - Minas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Assessment Popup */}
      <AssessmentPopup isOpen={showAssessmentPopup} onClose={() => setShowAssessmentPopup(false)} />
    </div>;
};