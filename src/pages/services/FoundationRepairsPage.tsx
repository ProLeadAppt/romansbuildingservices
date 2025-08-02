import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Star, Shield, Clock, Award, Home } from 'lucide-react';
import heroImage from '@/assets/hero-background.jpg';

export default function FoundationRepairsPage() {
  const services = [
    "Foundation Underpinning",
    "Structural Foundation Repairs", 
    "Foundation Stone Repairs",
    "Pier & Beam Foundation Work",
    "Settlement Stabilization",
    "Foundation Structural Assessment"
  ];

  const features = [
    { icon: Shield, title: "Structural Warranty", description: "Comprehensive warranty on all foundation work" },
    { icon: Clock, title: "Minimal Disruption", description: "Advanced techniques minimize impact on daily life" },
    { icon: Award, title: "Engineering Backed", description: "All work approved by structural engineers" },
    { icon: Star, title: "Foundation Specialists", description: "25+ years of foundation repair expertise" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Foundation Repair Specialists</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Foundation Repairs in Sydney
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional foundation repair and underpinning services. From minor crack repairs 
                to complete foundation stabilization, we ensure your property's structural integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Get Foundation Assessment
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0414 922 276
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Foundation repair work in Sydney" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Foundation Repair Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive foundation solutions for residential and commercial properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Home className="h-6 w-6 text-primary" />
                    <span>{service}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional {service.toLowerCase()} services with expert techniques 
                    and quality materials for lasting results.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Foundation Services?
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
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Foundation Issues? Get Expert Help
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Free foundation assessment and structural engineering consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Book Foundation Assessment
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Professional Foundation Repairs
            </Button>
          </div>
        </section>
      </div>
  );
}