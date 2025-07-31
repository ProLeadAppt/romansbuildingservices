import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Calendar, FileText, Hammer, Award, Clock, Users } from 'lucide-react';

export const ProcessTimelineSection = () => {
  const processSteps = [
    {
      step: 1,
      icon: Phone,
      title: 'Initial Consultation',
      description: 'Free phone consultation to understand your project needs and timeline.',
      details: ['Discuss project scope', 'Initial cost estimates', 'Site visit scheduling', 'Answer all questions'],
      duration: '30 minutes',
      color: 'text-blue-600'
    },
    {
      step: 2,
      icon: Calendar,
      title: 'Site Assessment',
      description: 'Comprehensive on-site evaluation by our expert building team.',
      details: ['Detailed site inspection', 'Structural analysis', 'Material assessment', 'Digital measurements'],
      duration: '1-2 hours',
      color: 'text-green-600'
    },
    {
      step: 3,
      icon: FileText,
      title: 'Detailed Quote',
      description: 'Written fixed-price quote with full project breakdown and timeline.',
      details: ['Itemized cost breakdown', 'Material specifications', 'Project timeline', 'Terms & conditions'],
      duration: '24-48 hours',
      color: 'text-orange-600'
    },
    {
      step: 4,
      icon: CheckCircle,
      title: 'Project Approval',
      description: 'Contract signing and project scheduling with clear milestones.',
      details: ['Contract finalization', 'Schedule coordination', 'Permit applications', 'Material ordering'],
      duration: '1-3 days',
      color: 'text-purple-600'
    },
    {
      step: 5,
      icon: Hammer,
      title: 'Construction',
      description: 'Professional execution with regular updates and quality checkpoints.',
      details: ['Daily progress updates', 'Quality control checks', 'Safety compliance', 'Client communication'],
      duration: 'As quoted',
      color: 'text-red-600'
    },
    {
      step: 6,
      icon: Award,
      title: 'Completion',
      description: 'Final inspection, handover, and ongoing support guarantee.',
      details: ['Final quality inspection', 'Client walkthrough', 'Warranty provision', 'Maintenance advice'],
      duration: '1 day',
      color: 'text-emerald-600'
    }
  ];

  const guarantees = [
    { icon: Clock, title: 'On-Time Delivery', desc: 'Projects completed as scheduled or we pay penalties' },
    { icon: Users, title: 'Expert Team', desc: 'Licensed professionals with 25+ years experience' },
    { icon: Award, title: 'Quality Guarantee', desc: '5-year warranty on all structural work' },
    { icon: CheckCircle, title: 'Fixed Pricing', desc: 'No hidden costs or surprise charges' }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Construction Process Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute inset-0 blueprint-pattern opacity-5" />
      
      {/* Progressive Visual Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative">
      <motion.div
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          Our <span className="gradient-text">Proven Process</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From initial consultation to project completion, we follow a structured approach that ensures exceptional results every time.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Step Number & Icon */}
                <div className={`md:hidden flex items-center space-x-4 mb-4`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                  <div className={`p-3 rounded-xl bg-background shadow-lg`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <Card className="hover-lift floating-shadow">
                    <CardContent className="p-8 space-y-4">
                      {/* Desktop Step Indicator */}
                      <div className="hidden md:flex items-center space-x-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold">
                          {step.step}
                        </div>
                        <div className={`p-3 rounded-xl bg-muted`}>
                          <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        <div className="bg-muted/50 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-lg mb-4">
                          {step.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary">What's Included:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Duration */}
                      <div className="md:hidden bg-muted/50 px-3 py-2 rounded-lg text-center">
                        <span className="text-sm font-medium">Duration: {step.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop Timeline Node */}
                <div className="hidden md:block">
                  {index % 2 === 0 ? (
                    <div className="relative">
                      <div className="absolute -left-12 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="absolute -right-12 top-8 w-6 h-6 bg-secondary rounded-full border-4 border-background shadow-lg" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Guarantees */}
      <motion.div
        className="mt-20 space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Our <span className="gradient-text">Guarantees</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            We stand behind our work with industry-leading guarantees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-lift text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl mx-auto w-fit">
                    <guarantee.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{guarantee.title}</h4>
                    <p className="text-sm text-muted-foreground">{guarantee.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 cta-shadow hover-lift"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project Today
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Free consultation • No obligation • Expert advice
          </p>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};