import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users, Clock, Phone, Star, CheckCircle } from 'lucide-react';
import teamImage from '@/assets/professional-team.jpg';

export default function AboutPage() {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "2000+", label: "Projects Completed" },
    { number: "100%", label: "Licensed & Insured" },
    { number: "24/7", label: "Professional Service" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality & Safety",
      description: "Every project meets the highest safety standards with quality guaranteed"
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Skilled tradesmen with decades of experience in building and restoration"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority with personalized service every time"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time delivery and transparent communication throughout your project"
    }
  ];

  const certifications = [
    "NSW Building License",
    "Heritage Building Certified",
    "WorkCover Approved",
    "Master Builders Association",
    "Insurance Institute Certified",
    "Environmental Safety Certified"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">About Romans Building Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sydney's Trusted Building Specialists Since 1995
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, Romans Building Services has been Sydney's go-to choice for 
            professional masonry, restoration, and structural repairs. Family-owned and operated 
            with an unwavering commitment to quality.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-primary rounded-2xl p-8 mb-16 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Romans Building Services was founded in 1995 with a simple mission: to provide 
                Sydney with the highest quality building and restoration services. What started 
                as a small family business has grown into Sydney's most trusted name in structural 
                repairs and heritage restoration.
              </p>
              <p>
                Our founder, with over three decades of experience in the building industry, 
                established the company on the principles of quality craftsmanship, honest pricing, 
                and exceptional customer service. These values continue to guide everything we do today.
              </p>
              <p>
                Today, we're proud to be a fully licensed, insured, and certified building company 
                serving residential and commercial clients across greater Sydney. Our team of 
                skilled tradesmen brings together traditional craftsmanship with modern techniques 
                to deliver results that last.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img 
              src={teamImage} 
              alt="Romans Building Services professional team" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Licensed & Certified</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-primary rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Sydney's Best?</h2>
          <p className="text-lg mb-6 opacity-90">
            Experience the Romans Building Services difference for your next project
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Star className="w-5 h-5 mr-2" />
              Get Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-primary/10 backdrop-blur-sm">
              <Phone className="w-5 h-5 mr-2" />
              Call: 0414 922 276
            </Button>
          </div>
        </motion.section>
      </div>
  );
}