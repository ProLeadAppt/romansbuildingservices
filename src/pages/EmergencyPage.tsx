import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Phone, Clock, Shield, Zap, Home, Building } from 'lucide-react';

export default function EmergencyPage() {
  const emergencyServices = [
    {
      icon: AlertTriangle,
      title: "Structural Collapse",
      description: "Immediate response for structural failures, foundation issues, or load-bearing damage",
      response: "30 minutes"
    },
    {
      icon: Home,
      title: "Wall & Foundation Cracks",
      description: "Emergency assessment and temporary stabilization of concerning structural cracks",
      response: "45 minutes"
    },
    {
      icon: Zap,
      title: "Storm Damage",
      description: "Post-storm building damage assessment and emergency repairs to secure property",
      response: "60 minutes"
    },
    {
      icon: Building,
      title: "Commercial Building Issues", 
      description: "Emergency commercial building services to minimize business disruption",
      response: "45 minutes"
    }
  ];

  const emergencySteps = [
    {
      step: "1",
      title: "Call Immediately",
      description: "Contact our 24/7 emergency line for immediate response",
      action: "0414 922 276"
    },
    {
      step: "2", 
      title: "Safety First",
      description: "Evacuate if necessary and secure the area until help arrives",
      action: "Stay Safe"
    },
    {
      step: "3",
      title: "Rapid Response",
      description: "Our emergency team will arrive within 30-60 minutes",
      action: "We're Coming"
    },
    {
      step: "4",
      title: "Immediate Assessment",
      description: "Professional evaluation and emergency stabilization if needed",
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
        {/* Emergency Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive mr-3" />
            <Badge variant="destructive" className="text-lg px-4 py-2">24/7 Emergency Service</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-destructive">
            Building Emergency? We're Here to Help
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            When structural emergencies occur, every minute counts. Our qualified emergency response 
            team is available 24/7 to secure your property and ensure everyone's safety.
          </p>
          
          {/* Emergency Contact */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-destructive text-destructive-foreground rounded-2xl p-8 max-w-md mx-auto"
          >
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Emergency Hotline</h2>
            <div className="text-3xl font-bold mb-4">0414 922 276</div>
            <p className="text-sm opacity-90">Available 24 hours a day, 7 days a week</p>
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
            <h2 className="text-3xl font-bold">Rapid Emergency Response</h2>
            <p className="opacity-90 mt-2">Professional help when you need it most</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
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
          {/* Emergency Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Emergency Response Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {emergencySteps.map((step, index) => (
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
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                  <span>When to Call Emergency Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Call our emergency line immediately if you notice any of these warning signs:
                </p>
                <div className="space-y-3">
                  {warningsSigns.map((sign, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{sign}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                  <p className="text-sm font-medium text-destructive">
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
              <CardTitle>Emergency Service Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                24/7 emergency response available across all Sydney metropolitan areas
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
          className="text-center bg-destructive rounded-2xl p-8 text-destructive-foreground"
        >
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Don't Wait - Call Now</h2>
          <p className="text-lg mb-6 opacity-90">
            Structural emergencies can worsen rapidly. Get professional help immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-destructive text-lg px-8">
              <Clock className="w-5 h-5 mr-2" />
              24/7 Available
            </Button>
          </div>
          
          <div className="mt-6 text-sm opacity-75">
            Licensed emergency response team • Fully insured • 25+ years experience
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}