import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Star, Shield, Clock, Award, Building } from 'lucide-react';
import heroImage from '@/assets/stone-wall-hero.jpg';

export default function StructuralRepairsPage() {
  const services = [
    "Load-Bearing Wall Repairs",
    "Beam & Column Restoration", 
    "Steel Structure Repairs",
    "Structural Crack Repair",
    "Building Reinforcement",
    "Emergency Structural Support"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Structural Repair Experts</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Structural Repairs in Sydney
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional structural repair services for load-bearing elements, beams, columns, 
                and critical building components. Engineering-backed solutions you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Get Structural Assessment</Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0414 922 276
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={heroImage} alt="Structural repair work" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Structural Repair Services</h2>
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
                    Professional {service.toLowerCase()} with engineering support and quality guarantee.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Structural Issues? Get Expert Help</h2>
          <p className="text-xl mb-8 opacity-90">Emergency structural repairs available 24/7</p>
          <Button size="lg" variant="secondary">Book Structural Assessment</Button>
      </section>
    </div>
  );
}