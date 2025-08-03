import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { serviceCategories, serviceAreas } from '@/utils/navigationData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MapPin, Wrench, FileText, Phone, Search } from 'lucide-react';

const SitemapPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Sitemap - Romans Building Services | All Pages & Services</title>
        <meta name="description" content="Complete sitemap of Romans Building Services website. Find all our building restoration services, service areas across Sydney, and important pages." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://romansbuildingservices.com.au/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Website Sitemap
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Navigate through all pages and services offered by Romans Building Services. 
              Professional building restoration services across Sydney.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Main Pages */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Main Pages
                </CardTitle>
                <CardDescription>
                  Primary navigation and essential information pages
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link 
                  to="/" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">Home</div>
                  <div className="text-sm text-muted-foreground">Professional building services in Sydney</div>
                </Link>
                
                <Link 
                  to="/about" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">About Us</div>
                  <div className="text-sm text-muted-foreground">Our story, team, and expertise</div>
                </Link>
                
                <Link 
                  to="/projects" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">Projects</div>
                  <div className="text-sm text-muted-foreground">Showcase of completed work</div>
                </Link>
                
                <Link 
                  to="/contact" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </div>
                  <div className="text-sm text-muted-foreground">Get in touch for your project</div>
                </Link>
              </CardContent>
            </Card>

            {/* Action Pages */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Get Started
                </CardTitle>
                <CardDescription>
                  Request quotes, assessments, and emergency services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link 
                  to="/quote" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">Get Quote</div>
                  <div className="text-sm text-muted-foreground">Request detailed project quotation</div>
                </Link>
                
                <Link 
                  to="/assessment" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">Building Assessment</div>
                  <div className="text-sm text-muted-foreground">Professional property evaluation</div>
                </Link>
                
                <Link 
                  to="/emergency" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">Emergency Services</div>
                  <div className="text-sm text-muted-foreground">Urgent building repairs</div>
                </Link>
                
                <Link 
                  to="/search" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </div>
                  <div className="text-sm text-muted-foreground">Find specific services or information</div>
                </Link>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="border-border bg-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Our Services
                </CardTitle>
                <CardDescription>
                  Comprehensive building restoration and repair services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Link 
                    to="/services" 
                    className="inline-block p-4 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <div className="font-medium text-lg">All Services Overview</div>
                    <div className="text-sm text-muted-foreground">Complete list of our building services</div>
                  </Link>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {serviceCategories.map((category) => (
                    <div key={category.id} className="space-y-3">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <Badge variant="outline">{category.label}</Badge>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.id}
                            to={service.href}
                            className="block p-3 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            <div className="font-medium text-sm">{service.label}</div>
                            {service.description && (
                              <div className="text-xs text-muted-foreground mt-1">
                                {service.description}
                              </div>
                            )}
                            {service.badge && (
                              <Badge variant="secondary" className="mt-1 text-xs">
                                {service.badge}
                              </Badge>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="border-border bg-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Service Areas
                </CardTitle>
                <CardDescription>
                  We serve all major areas across Sydney metropolitan region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Link 
                    to="/areas" 
                    className="inline-block p-4 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <div className="font-medium text-lg">All Service Areas</div>
                    <div className="text-sm text-muted-foreground">Complete coverage across Sydney</div>
                  </Link>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.id}
                      to={area.href}
                      className="block p-4 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <div className="font-medium mb-2">{area.label}</div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {area.description}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <strong>Suburbs:</strong> {area.suburbs.slice(0, 3).join(', ')}
                        {area.suburbs.length > 3 && ` +${area.suburbs.length - 3} more`}
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Legal & Utility Pages */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Legal & Information
                </CardTitle>
                <CardDescription>
                  Terms, policies, and additional information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link 
                  to="/privacy-policy" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">Privacy Policy</div>
                  <div className="text-sm text-muted-foreground">How we protect your information</div>
                </Link>
                
                <Link 
                  to="/terms-of-service" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">Terms of Service</div>
                  <div className="text-sm text-muted-foreground">Service terms and conditions</div>
                </Link>
                
                <Link 
                  to="/thank-you" 
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium">Thank You</div>
                  <div className="text-sm text-muted-foreground">Form submission confirmation</div>
                </Link>
              </CardContent>
            </Card>

            {/* XML Sitemaps */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  XML Sitemaps
                </CardTitle>
                <CardDescription>
                  Machine-readable sitemaps for search engines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="/sitemap.xml" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium flex items-center gap-2">
                    Main Sitemap
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div className="text-sm text-muted-foreground">Primary XML sitemap for all pages</div>
                </a>
                
                <a 
                  href="/sitemap-images.xml" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <div className="font-medium flex items-center gap-2">
                    Image Sitemap
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div className="text-sm text-muted-foreground">XML sitemap for images and media</div>
                </a>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12" />

          {/* Footer */}
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              Last updated: {new Date().toLocaleDateString('en-AU')}
            </p>
            <p className="text-sm">
              © {currentYear} Romans Building Services. All rights reserved. | 
              Professional building restoration services across Sydney.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;