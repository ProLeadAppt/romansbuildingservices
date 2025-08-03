import React, { useState } from 'react';
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Star, Shield, Clock, Award } from "lucide-react";
import { AssessmentPopup } from '@/components/AssessmentPopup';
import beforeAfterImage from "@/assets/before-after.jpg";

export default function RestorationPage() {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);
  const services = [
    "Heritage Building Restoration",
    "Facade Restoration & Cleaning", 
    "Window & Door Restoration",
    "Stonework Restoration",
    "Timber Restoration",
    "Historic Masonry Repair"
  ];

  const features = [
    { icon: Shield, title: "Heritage Specialists", description: "Certified in heritage restoration techniques and materials" },
    { icon: Clock, title: "30+ Years Experience", description: "Extensive experience in restoring Sydney's historic buildings" },
    { icon: Award, title: "Council Approved", description: "Pre-approved with Sydney councils for heritage work" },
    { icon: Star, title: "Museum Quality", description: "Restoration work meets museum-quality standards" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Heritage Restoration Experts</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Expert Stone Restoration Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Preserving Sydney's architectural heritage with authentic restoration techniques. 
                From Federation homes to Art Deco buildings, we restore with precision and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => setShowAssessmentPopup(true)}>
                  Get Heritage Assessment
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => window.open('tel:+61483981292')}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +61 483 981 292
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={beforeAfterImage} 
                alt="Before and after restoration work" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Heritage Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Restoration Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized restoration services for heritage and historic buildings across Sydney
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span>{service}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Expert {service.toLowerCase()} using traditional techniques and 
                    authentic materials for lasting results.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Heritage Restoration Experts
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preserve Your Building's Heritage
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Free heritage assessment with restoration recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setShowAssessmentPopup(true)}>
              Get Heritage Assessment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary/20 text-primary bg-background/90 hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('tel:+61483981292')}>
              <Phone className="mr-2 h-5 w-5" />
              Call Heritage Expert
            </Button>
          </div>
        </div>
      </section>
      
      {/* Assessment Popup */}
      <AssessmentPopup isOpen={showAssessmentPopup} onClose={() => setShowAssessmentPopup(false)} />

      <Footer />
    </div>
  );
}