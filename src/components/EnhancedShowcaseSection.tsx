import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, CheckCircle, Star, Zap } from 'lucide-react';
import { PremiumBeforeAfterSlider } from './PremiumBeforeAfterSlider';

import { PremiumStatsCounter } from './PremiumStatsCounter';
import beforeAfterImage from '@/assets/before-after-showcase.jpg';
import beforeImage from '@/assets/before-after.jpg';

export const EnhancedShowcaseSection = () => {
  const stats = [
    {
      number: 1000,
      suffix: '+',
      label: 'Projects Completed',
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      number: 25,
      suffix: '+',
      label: 'Years Experience',
      icon: <Award className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      number: 100,
      suffix: '%',
      label: 'Satisfaction Rate',
      icon: <Star className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-600'
    },
    {
      number: 2,
      label: 'Hour Response',
      icon: <Zap className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-gradient-to-b from-background via-muted/5 to-background construction-pattern overflow-safe">
      <div className="container mx-auto mobile-container space-y-12 sm:space-y-20">
        
        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Proven <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over 25 years of delivering exceptional results across Sydney
            </p>
          </div>
          
          <PremiumStatsCounter stats={stats} />
        </motion.div>

        {/* Before/After Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-safe"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                Heritage Restoration
              </Badge>
              <h3 className="text-3xl font-bold">
                Transforming Sydney's Heritage
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                See the dramatic transformation of this 1890s Paddington terrace. 
                Our heritage restoration specialists preserved the original character 
                while ensuring modern structural integrity.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">Heritage council approved</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">Period-appropriate materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm">Structural reinforcement</span>
              </div>
            </div>

            <Button className="hover-glow-strong micro-interaction" size="lg">
              View More Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="relative">
            <PremiumBeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={beforeAfterImage}
              beforeLabel="Before Restoration"
              afterLabel="After Restoration"
              className="rounded-xl overflow-hidden elevated-card"
            />
          </div>
        </motion.div>

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Ready to <span className="gradient-text">Start Your Project</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our expert team for a free consultation and detailed quote
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow-strong">
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Call 0414 922 276
            </Button>
          </div>
        </motion.div>

        {/* Trust & Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <Card className="max-w-4xl mx-auto trust-shadow">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">25-Year Guarantee</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We stand behind our work with an industry-leading 25-year structural guarantee. 
                  Your investment is protected by our commitment to excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold">Licensed & Insured</h4>
                  <p className="text-sm text-muted-foreground">Full liability coverage</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold">5-Star Rated</h4>
                  <p className="text-sm text-muted-foreground">Google Reviews</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold">Same-Day Response</h4>
                  <p className="text-sm text-muted-foreground">Rapid response</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};