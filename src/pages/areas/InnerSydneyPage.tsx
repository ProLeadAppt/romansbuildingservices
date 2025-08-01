import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, CheckCircle, Building, Star } from 'lucide-react';
import teamImage from '@/assets/team.jpg';

export default function InnerSydneyPage() {
  const services = [
    "Heritage Terrace Restoration",
    "Commercial Building Maintenance", 
    "High-Density Apartment Repairs",
    "Emergency Building Services",
    "Strata Building Solutions",
    "City Building Compliance"
  ];

  const suburbs = [
    "Sydney CBD", "Surry Hills", "Paddington", "Darlinghurst", "Potts Point", 
    "Chippendale", "Ultimo", "Pyrmont", "Alexandria", "Redfern", "Waterloo",
    "Zetland", "Rosebery", "Mascot", "Wolli Creek"
  ];

  const stats = [
    { number: "200+", label: "Inner Sydney Projects" },
    { number: "10+", label: "Years Local Experience" },
    { number: "24/7", label: "Emergency Response" },
    { number: "100%", label: "Council Compliance" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 flex items-center w-fit">
                <MapPin className="mr-2 h-4 w-4" />
                Inner Sydney Specialists
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building Services in Inner Sydney
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert building services for Inner Sydney's diverse architecture. From heritage 
                terraces to modern high-rises, we understand the unique challenges of Sydney's 
                inner-city buildings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Get Inner Sydney Quote
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0414 922 276
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Romans Building Services in Inner Sydney" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">45min</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services for Inner Sydney */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Inner Sydney Building Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services for Inner Sydney's unique building requirements
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
                  <p className="text-muted-foreground">
                    Professional {service.toLowerCase()} specifically designed for 
                    Inner Sydney's heritage and modern buildings.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Areas We Cover */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Inner Sydney Areas We Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide comprehensive building services across all Inner Sydney suburbs, 
                with deep understanding of local heritage requirements and building codes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {suburbs.slice(0, 10).map((suburb, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{suburb}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                And many more Inner Sydney locations
              </p>
            </div>
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Fast Inner Sydney Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">45 Min</div>
                <p className="text-muted-foreground text-lg mb-6">
                  Average response time for calls in Inner Sydney
                </p>
                <Button className="w-full">Get Emergency Service</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Building Services in Inner Sydney?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Local expertise for all Inner Sydney building projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Star className="w-5 h-5 mr-2" />
              Get Free Assessment
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 text-primary bg-background/90 hover:bg-primary hover:text-primary-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Call Inner Sydney Team
            </Button>
          </div>
        </section>
      </div>
  );
}