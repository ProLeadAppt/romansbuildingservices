import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Hammer, Shield, Droplets, Search, Wrench, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { AssessmentPopup } from '@/components/AssessmentPopup';
const minasPhoto = '/lovable-uploads/fca9df0e-1672-43ed-a1a0-4d254b541a48.png';

export const InteractiveServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [showQuotePopup, setShowQuotePopup] = useState(false);

  const services = [
    {
      icon: Building,
      title: 'Masonry & Brickwork',
      shortDesc: 'Expert brick & stone construction',
      fullDesc: 'Comprehensive masonry services including new construction, repairs, repointing, and heritage restoration. We work with all types of brick, stone, and block materials.',
      features: ['New brick construction', 'Heritage restoration', 'Repointing & repairs', 'Stone masonry', 'Retaining walls', 'Structural brickwork'],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Hammer,
      title: 'Building Restoration',
      shortDesc: 'Heritage & modern restoration',
      fullDesc: 'Specialist restoration services for heritage and modern buildings. We preserve the character while ensuring structural integrity and compliance.',
      features: ['Heritage facade restoration', 'Structural repairs', 'Period-appropriate materials', 'Heritage stonework consultation', 'Traditional craftsmanship', 'Stone protection'],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Shield,
      title: 'Structural Repairs',
      shortDesc: 'Critical structural solutions',
      fullDesc: 'Priority and planned structural repairs including crack remediation, foundation work, and load-bearing modifications.',
      features: ['Foundation repairs', 'Stone crack repairs', 'Beam replacements', 'Load-bearing modifications', 'Subsidence repairs', 'Underpinning'],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Wrench,
      title: 'Maintenance Services',
      shortDesc: 'Ongoing building care',
      fullDesc: 'Regular maintenance programs to keep your building in optimal condition. Preventive care that saves money long-term.',
      features: ['Scheduled maintenance', 'Preventive repairs', 'Priority callouts', 'Warranty programs', 'Building compliance', 'Emergency repairs'],
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Dynamic Background Based on Active Service */}
        <div className="absolute inset-0 transition-all duration-1000">
          <div className={`absolute inset-0 service-bg-${activeService} opacity-20`} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background/90" />
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 geometric-pattern opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 geometric-pattern opacity-5 rotate-180" />
        
        <div className="container mx-auto px-4 relative">
      <motion.div
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          Expert <span className="gradient-text">Stonework & Masonry</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From heritage restoration to modern stonework, we deliver exceptional results across all masonry disciplines.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Service Cards */}
        <div className="lg:col-span-1 space-y-2 md:space-y-3 lg:space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 hover-lift ${
                  activeService === index 
                    ? 'border-primary bg-primary/5 glow-shadow' 
                    : 'hover:border-primary/50'
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-3 md:p-4 lg:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className={`p-2 md:p-3 rounded-lg transition-colors touch-target ${
                      activeService === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}>
                      <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 space-y-1 md:space-y-2">
                      <h3 className="font-semibold text-sm md:text-base lg:text-lg">{service.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.shortDesc}</p>
                    </div>
                    <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-all ${
                      activeService === index 
                        ? 'text-primary translate-x-1' 
                        : 'text-muted-foreground'
                    }`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Details */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full floating-shadow">
                <CardContent className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      {React.createElement(services[activeService].icon, {
                        className: "w-8 h-8 text-primary"
                      })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{services[activeService].title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {services[activeService].fullDesc}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2 md:space-x-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3 md:gap-4 pt-4 border-t">
                    <Button 
                      size="lg" 
                      className="w-full hover-lift touch-target"
                      onClick={() => setShowQuotePopup(true)}
                    >
                      Get Free Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full hover-lift touch-target"
                      onClick={() => window.open('tel:+61483981292')}
                    >
                      Call Expert: +61 483 981 292
                    </Button>
                  </div>

                  {/* Service Promise */}
                  <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                    <h4 className="font-semibold text-primary">Our Service Promise</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Fixed-price quotes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Quality guarantee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>On-time completion</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Call to Action with Minas Photo */}
      <motion.div
        className="text-center mt-12 md:mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 rounded-2xl text-white overflow-safe">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={minasPhoto} 
                alt="Minas Romanakis working hands-on with masonry restoration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Ready to Transform Your Space?
              </h3>
              <p className="text-base sm:text-lg opacity-90">
                "I personally guarantee exceptional results on every project." - Minas
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Get a free assessment and discover how we can help you achieve your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="mobile-button sm:min-w-[200px] bg-white text-primary hover:bg-white/90"
              onClick={() => setShowQuotePopup(true)}
            >
              Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="mobile-button sm:min-w-[200px] bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('tel:+61483981292')}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>
      </motion.div>
      </div>
    </div>

    {/* Assessment Popup */}
    <AssessmentPopup 
      isOpen={showQuotePopup} 
      onClose={() => setShowQuotePopup(false)} 
    />
    </>
  );
};