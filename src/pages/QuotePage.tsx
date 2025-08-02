import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, Clock, Phone, CheckCircle, Star } from 'lucide-react';

export default function QuotePage() {
  const serviceTypes = [
    "Masonry & Brickwork",
    "Foundation Repairs", 
    "Structural Repairs",
    "Heritage Restoration",
    "Building Restoration",
    "Concrete Repairs",
    "Protective Coatings",
    "Remedial Building",
    "Building Inspections"
  ];

  const urgencyLevels = [
    { value: "standard", label: "Standard (7-14 days)", description: "Normal project timeline" },
    { value: "priority", label: "Priority (3-7 days)", description: "Faster turnaround required" },
    { value: "prompt", label: "Prompt (48-72 hours)", description: "Professional service required" }
  ];

  const features = [
    { icon: Clock, title: "Prompt Response", description: "Quote within 2-3 business days" },
    { icon: Calculator, title: "Accurate Pricing", description: "Detailed breakdown provided" },
    { icon: CheckCircle, title: "No Obligation", description: "Completely free assessment" },
    { icon: Star, title: "Expert Advice", description: "Professional recommendations" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Free Quote Request</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Building Quote
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Receive a detailed, accurate quote for your building project within 24 hours. 
            Our experienced team provides transparent pricing with no hidden costs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="w-6 h-6 text-primary" />
                  <span>Quote Request Form</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="0400 000 000" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address *</Label>
                  <Input id="address" placeholder="Enter the full property address" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service needed" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Please describe your project in detail, including any specific requirements, current issues, or challenges..."
                    rows={4}
                  />
                </div>

                {/* Urgency */}
                <div className="space-y-3">
                  <Label>Project Urgency *</Label>
                  {urgencyLevels.map((level) => (
                    <div key={level.value} className="flex items-start space-x-3">
                      <Checkbox id={level.value} />
                      <div className="grid gap-1.5 leading-none">
                        <Label 
                          htmlFor={level.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {level.label}
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          {level.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Options */}
                <div className="space-y-3">
                  <Label>Additional Services (Optional)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Site inspection required",
                      "Heritage building considerations", 
                      "Engineering consultation needed",
                      "Heritage stonework consultation",
                      "Professional after-hours service",
                      "Warranty and maintenance plan"
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox id={option} />
                        <Label htmlFor={option} className="text-sm">{option}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Request Free Quote
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Quotes?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{feature.title}</div>
                      <div className="text-xs text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Need to Speak With Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90 mb-4">
                  Prefer to discuss your project over the phone? Our experts are ready to help.
                </p>
                <Button variant="secondary" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0414 922 276
                </Button>
                <div className="mt-4 text-xs opacity-75 text-center">
                  Available 7 days a week
                  <br />
                  Professional service available
                </div>
              </CardContent>
            </Card>

            {/* Quote Process */}
            <Card>
              <CardHeader>
                <CardTitle>Our Quote Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-sm">Submit Form</div>
                    <div className="text-xs text-muted-foreground">Complete the quote request</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-sm">Site Inspection</div>
                    <div className="text-xs text-muted-foreground">Free on-site assessment</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-sm">Detailed Quote</div>
                    <div className="text-xs text-muted-foreground">Comprehensive pricing breakdown</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}