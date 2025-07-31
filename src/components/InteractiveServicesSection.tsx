import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Hammer, Shield, Droplets, Search, Wrench, ArrowRight, CheckCircle } from 'lucide-react';

export const InteractiveServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Building,
      title: 'Masonry & Brickwork',
      shortDesc: 'Expert brick & stone construction',
      fullDesc: 'Comprehensive masonry services including new construction, repairs, repointing, and heritage restoration. We work with all types of brick, stone, and block materials.',
      features: ['New brick construction', 'Heritage restoration', 'Repointing & repairs', 'Stone masonry', 'Retaining walls', 'Chimneys & fireplaces'],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Hammer,
      title: 'Building Restoration',
      shortDesc: 'Heritage & modern restoration',
      fullDesc: 'Specialist restoration services for heritage and modern buildings. We preserve the character while ensuring structural integrity and compliance.',
      features: ['Heritage facade restoration', 'Structural repairs', 'Period-appropriate materials', 'Council approvals', 'Conservation planning', 'Weatherproofing'],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Shield,
      title: 'Structural Repairs',
      shortDesc: 'Critical structural solutions',
      fullDesc: 'Emergency and planned structural repairs including crack remediation, foundation work, and load-bearing modifications.',
      features: ['Foundation repairs', 'Crack injection', 'Beam replacements', 'Load-bearing modifications', 'Subsidence repairs', 'Underpinning'],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Droplets,
      title: 'Waterproofing',
      shortDesc: 'Complete moisture protection',
      fullDesc: 'Advanced waterproofing solutions for basements, roofs, balconies, and external walls. Guaranteed leak-free results.',
      features: ['Basement waterproofing', 'Roof membrane systems', 'Balcony sealing', 'Rising damp treatment', 'Cavity wall injection', 'Leak detection'],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Search,
      title: 'Building Inspections',
      shortDesc: 'Comprehensive assessments',
      fullDesc: 'Detailed building inspections and assessments for purchase, insurance, or maintenance planning. Professional reports with recommendations.',
      features: ['Pre-purchase inspections', 'Structural assessments', 'Defect reports', 'Maintenance planning', 'Insurance claims', 'Expert witness services'],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Wrench,
      title: 'Maintenance Services',
      shortDesc: 'Ongoing building care',
      fullDesc: 'Regular maintenance programs to keep your building in optimal condition. Preventive care that saves money long-term.',
      features: ['Scheduled maintenance', 'Preventive repairs', 'Annual inspections', 'Emergency callouts', 'Warranty programs', 'Building compliance'],
      image: '/api/placeholder/400/300'
    }
  ];

  return (
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
          Expert <span className="gradient-text">Building Solutions</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From heritage restoration to modern construction, we deliver exceptional results across all building disciplines.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Service Cards */}
        <div className="lg:col-span-1 space-y-4">
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
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-colors ${
                      activeService === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-all ${
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                    <Button 
                      size="lg" 
                      className="flex-1 hover-lift"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Free Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="flex-1 hover-lift"
                      onClick={() => window.open('tel:0414922276')}
                    >
                      Call Expert: 0414 922 276
                    </Button>
                  </div>

                  {/* Service Promise */}
                  <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                    <h4 className="font-semibold text-primary">Our Service Promise</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Fixed-price quotes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Quality guarantee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
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
    </div>
    </div>
  );
};