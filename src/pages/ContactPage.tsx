import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Romans Building Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for your free assessment. We're here to help with all your 
            building, masonry, and restoration needs across Sydney.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Get Your Free Assessment</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 2 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(02) 9999-9999" />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <select className="w-full px-3 py-2 border border-input rounded-md">
                    <option>Select a service</option>
                    <option>Masonry</option>
                    <option>Restoration</option>
                    <option>Remedial Building</option>
                    <option>Structural Repairs</option>
                    <option>Emergency Service</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Get Free Assessment
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>Call Us Now</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:0414922276" className="text-2xl font-bold text-primary hover:underline">
                    0414 922 276
                  </a>
                  <p className="text-muted-foreground mt-2">
                    Available 24/7 for emergency services
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>Email Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@romansbuildingservices.com.au" className="text-lg text-primary hover:underline">
                    info@romansbuildingservices.com.au
                  </a>
                  <p className="text-muted-foreground mt-2">
                    We respond within 2 hours during business hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Service Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Greater Sydney Area</p>
                  <p className="text-muted-foreground mt-2">
                    Including CBD, Eastern Suburbs, Northern Beaches, 
                    North Shore, Inner West, and Western Sydney
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">Emergency Only</span>
                    </div>
                    <div className="flex justify-between text-primary font-semibold">
                      <span>Emergency:</span>
                      <span>24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Why Sydney Trusts Romans Building Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-500 fill-current" />
                <Star className="h-8 w-8 text-yellow-500 fill-current" />
                <Star className="h-8 w-8 text-yellow-500 fill-current" />
                <Star className="h-8 w-8 text-yellow-500 fill-current" />
                <Star className="h-8 w-8 text-yellow-500 fill-current" />
              </div>
              <div className="text-muted-foreground">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}