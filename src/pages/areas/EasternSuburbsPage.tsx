import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, CheckCircle, Building, Star } from 'lucide-react';
import teamImage from '@/assets/team.jpg';

export default function EasternSuburbsPage() {
  const services = [
    "Premium Residential Restoration",
    "Luxury Home Maintenance", 
    "Heritage Property Conservation",
    "High-End Masonry Work",
    "Coastal Building Protection",
    "Exclusive Property Services"
  ];

  const suburbs = [
    "Bondi", "Double Bay", "Woollahra", "Rose Bay", "Vaucluse", 
    "Bellevue Hill", "Point Piper", "Dover Heights", "Bronte", "Clovelly"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 flex items-center w-fit">
                <MapPin className="mr-2 h-4 w-4" />
                Eastern Suburbs Specialists
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Building Services - Eastern Suburbs
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Exclusive building services for Sydney's Eastern Suburbs. Specializing in luxury 
                residential properties, heritage homes, and coastal building protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Get Premium Quote</Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +61 483 981 292
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={teamImage} alt="Eastern Suburbs building services" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Eastern Suburbs Building Services</h2>
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
                    Premium {service.toLowerCase()} tailored for Eastern Suburbs properties.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Premium Eastern Suburbs Service</h2>
          <p className="text-xl mb-8 opacity-90">Exclusive building services for discerning clients</p>
          <Button size="lg" variant="secondary">Get Premium Assessment</Button>
        </section>
      </div>
  );
}