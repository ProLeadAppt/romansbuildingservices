import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Building, Palette, CheckCircle } from 'lucide-react';
import { LocalBusinessSchema } from '@/components/LocalSEO/StructuredData';

const InnerWestPage = () => {
  const services = [
    'Heritage Terrace Restoration',
    'Victorian Era Brickwork', 
    'Federation Home Repairs',
    'Warehouse Conversions',
    'Character Home Preservation',
    'Period Masonry Matching',
    'Structural Strengthening',
    'Conservation Assessments'
  ];

  const suburbs = [
    'Newtown', 'Leichhardt', 'Balmain', 'Rozelle', 'Glebe',
    'Annandale', 'Marrickville', 'Petersham', 'Camperdown', 'Stanmore'
  ];

  return (
    <div>
      <LocalBusinessSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Building className="w-4 h-4 mr-2" />
              Heritage Restoration Specialists
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Heritage Building Services
              <span className="text-primary block">Inner West Sydney</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert restoration and conservation of Inner West's iconic heritage architecture. 
              From Victorian terraces in Newtown to Federation homes in Balmain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call +61 483 981 292
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Heritage Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Inner West Heritage Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Preserving the character and authenticity of Sydney's most culturally significant neighborhoods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Victorian Terraces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized restoration of iconic Victorian terraces throughout Newtown, 
                  Annandale, and surrounding heritage precincts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Federation Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Authentic restoration of Federation-era architecture in Balmain, 
                  Rozelle, and Glebe with period-appropriate materials.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Industrial Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conversion and restoration of heritage warehouses and 
                  industrial buildings throughout Leichhardt and Marrickville.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Heritage Conservation Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Heritage Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Notable Inner West Heritage Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Newtown Victorian Terrace Row</CardTitle>
                  <CardDescription>1880s heritage-listed restoration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete facade restoration of five Victorian terraces including hand-matched 
                    heritage brickwork, ornate render repairs, and period-appropriate mortar.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Heritage Listed</Badge>
                    <Badge variant="secondary">Victorian Era</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Balmain Warehouse Conversion</CardTitle>
                  <CardDescription>Industrial heritage adaptive reuse</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Structural strengthening and heritage-sensitive conversion of 1920s shipping 
                    warehouse into residential apartments while preserving original character.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Adaptive Reuse</Badge>
                    <Badge variant="secondary">Structural Engineering</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs We Service */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Inner West Suburbs We Service
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {suburbs.map((suburb) => (
                <Badge key={suburb} variant="outline" className="p-3 text-center justify-center">
                  {suburb}
                </Badge>
              ))}
            </div>
            
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Inner West Heritage Services</CardTitle>
                <CardDescription>
                  Specialized conservation for Sydney's cultural heartland
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Heritage Conservation Areas:</h4>
                  <p className="text-muted-foreground text-sm">
                    Expert restoration within heritage conservation areas including Newtown, 
                    Balmain East, and Glebe Point Road precincts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Character Home Preservation:</h4>
                  <p className="text-muted-foreground text-sm">
                    Maintaining the authentic character of Federation and Victorian homes 
                    throughout Leichhardt, Annandale, and surrounding areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Council Heritage Requirements:</h4>
                   <p className="text-muted-foreground text-sm">
                     Expert heritage restoration in compliance with Inner West Council heritage guidelines 
                     and conservation requirements.
                   </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Preserve Your Inner West Heritage Property
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Trust Romans Building Services with your heritage restoration project. 
            Expert craftsmanship that honors history while ensuring structural integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +61 483 981 292
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-primary/10 backdrop-blur-sm">
              Heritage Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnerWestPage;