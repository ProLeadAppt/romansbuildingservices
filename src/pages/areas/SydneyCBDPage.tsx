import React, { useState } from 'react';
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, CheckCircle, Building, Star } from "lucide-react";
import { AssessmentPopup } from '@/components/AssessmentPopup';
import teamImage from "@/assets/team.jpg";

export default function SydneyCBDPage() {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);
  const services = [
    "Commercial Building Maintenance",
    "Heritage Building Restoration", 
    "High-Rise Facade Repairs",
    "Emergency Building Services",
    "Strata Building Maintenance",
    "Office Building Upgrades"
  ];

  const landmarks = [
    "Sydney Opera House Area",
    "Circular Quay",
    "The Rocks",
    "Barangaroo",
    "Martin Place",
    "Wynyard"
  ];

  const stats = [
    { number: "50+", label: "CBD Projects Completed" },
    { number: "15+", label: "Years in CBD" },
    { number: "24/7", label: "Emergency Response" },
    { number: "100%", label: "Council Approved" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 flex items-center w-fit">
                <MapPin className="mr-2 h-4 w-4" />
                Sydney CBD Specialists
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Building Services in Sydney CBD
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Trusted building services for Sydney's central business district. From heritage 
                restorations to modern commercial maintenance, we service all of Sydney CBD with 
                premium quality and fast response times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => setShowAssessmentPopup(true)}>
                  Get CBD Quote
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => window.open('tel:+61483981292')}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call +61 483 981 292
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Romans Building Services team in Sydney CBD" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for CBD */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CBD Building Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services for Sydney CBD's unique building requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-6 w-6 text-primary" />
                    <span>{service}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Professional {service.toLowerCase()} specifically designed for 
                    Sydney CBD's commercial and heritage buildings.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                CBD Areas We Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide comprehensive building services across all Sydney CBD areas, 
                with special expertise in heritage and commercial buildings.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {landmarks.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Fast CBD Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30 Min</div>
                <CardDescription className="text-lg">
                  Average response time for emergency calls in Sydney CBD
                </CardDescription>
                <Button className="mt-6 w-full" onClick={() => window.open('tel:+61483981292')}>Get Emergency Service</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Building Services in Sydney CBD?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Free assessment for all CBD building projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => setShowAssessmentPopup(true)}>
              Get Free CBD Assessment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary/20 text-primary bg-background/90 hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('tel:+61483981292')}>
              <Phone className="mr-2 h-5 w-5" />
              Call CBD Specialist
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Assessment Popup */}
      <AssessmentPopup isOpen={showAssessmentPopup} onClose={() => setShowAssessmentPopup(false)} />
    </div>
  );
}