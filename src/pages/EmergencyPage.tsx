import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Phone, Shield, Zap, Home, Building } from 'lucide-react';

export default function ProfessionalRepairsPage() {
  const urgentServices = [
    {
      icon: Shield,
      title: "Structural Issues",
      description: "Professional response for structural failures, foundation issues, or load-bearing damage",
      response: "48-72 hours"
    },
    {
      icon: Home,
      title: "Wall & Foundation Cracks",
      description: "Professional assessment and stabilization of concerning structural cracks",
      response: "48-72 hours"
    },
    {
      icon: Zap,
      title: "Storm Damage",
      description: "Post-storm building damage assessment and professional repairs to secure property",
      response: "48-72 hours"
    },
    {
      icon: Building,
      title: "Commercial Building Issues", 
      description: "Professional commercial building services to minimize business disruption",
      response: "48-72 hours"
    }
  ];

  const urgentSteps = [
    {
      step: "1",
      title: "Call Today",
      description: "Contact our consultation line for prompt response",
      action: "0414 922 276"
    },
    {
      step: "2", 
      title: "Safety First",
      description: "Secure the area if needed and document the issue for our assessment",
      action: "Stay Safe"
    },
    {
      step: "3",
      title: "Professional Response",
      description: "Our team will provide professional service and respond within 48-72 hours",
      action: "Professional Service"
    },
    {
      step: "4",
      title: "Professional Assessment",
      description: "Expert evaluation and professional stabilization if required",
      action: "Expert Help"
    }
  ];

  const warningsSigns = [
    "Large or rapidly expanding cracks in walls",
    "Sagging or bowing walls or ceilings", 
    "Doors and windows that won't close properly",
    "Unusual settling or movement sounds",
    "Visible foundation movement or separation",
    "Water damage affecting structural elements"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Urgent Repairs Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-primary mr-3" />
            <Badge variant="default" className="text-lg px-4 py-2">Professional Masonry Repairs</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Professional Building Repairs? Expert Response When You Need It
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            When structural issues require professional attention, our qualified team provides expert repair 
            services with prompt response within 48-72 hours to secure your property and ensure everyone's safety.
          </p>
          
          {/* Urgent Contact */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-primary text-primary-foreground rounded-2xl p-8 max-w-md mx-auto"
          >
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Project Consultation Line</h2>
            <div className="text-3xl font-bold mb-4">0414 922 276</div>
            <p className="text-sm opacity-90">Professional response within 48-72 hours for structural issues</p>
          </motion.div>
        </motion.div>

        {/* Response Times */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-primary text-primary-foreground rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Professional Repair Response</h2>
            <p className="opacity-90 mt-2">Professional help when structural issues need expert attention</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {urgentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <service.icon className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm opacity-80 mb-3">{service.description}</p>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {service.response} response
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Urgent Repair Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Professional Repair Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {urgentSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                      <Badge variant="outline" className="text-xs">{step.action}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Warning Signs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Clock className="w-6 h-6" />
                  <span>When to Call for Professional Repairs</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Call our professional repairs line if you notice any of these concerning signs:
                </p>
                <div className="space-y-3">
                  {warningsSigns.map((sign, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{sign}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary">
                    Remember: If you're unsure about the severity, it's always better to call. 
                    Our experts can quickly assess the situation over the phone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Professional Repair Service Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Professional repair response within 48-72 hours available across all Sydney metropolitan areas
              </p>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                {[
                  "Sydney CBD",
                  "Eastern Suburbs", 
                  "North Shore",
                  "Northern Beaches",
                  "Inner West",
                  "Greater Sydney"
                ].map((area, index) => (
                  <Badge key={index} variant="outline" className="p-2">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-primary rounded-2xl p-8 text-primary-foreground"
        >
          <Clock className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Don't Delay - Call Today</h2>
          <p className="text-lg mb-6 opacity-90">
            Structural issues can worsen over time. Get expert professional help for lasting solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Professional Line
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
              <Clock className="w-5 h-5 mr-2" />
              Expert Response
            </Button>
          </div>
          
          <div className="mt-6 text-sm opacity-75">
            Licensed professional repair team • Fully insured • 25+ years experience
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}