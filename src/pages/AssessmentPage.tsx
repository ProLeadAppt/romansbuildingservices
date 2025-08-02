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
import { Calendar, Search, Clock, Phone, CheckCircle, AlertTriangle } from 'lucide-react';

export default function AssessmentPage() {
  const assessmentTypes = [
    { value: "structural", label: "Structural Assessment", description: "Foundation, walls, load-bearing elements" },
    { value: "heritage", label: "Heritage Building Assessment", description: "Conservation and restoration planning" },
    { value: "building-condition", label: "Building Condition Report", description: "Comprehensive property evaluation" },
    { value: "pre-purchase", label: "Pre-Purchase Inspection", description: "Buying/selling property assessment" },
    { value: "insurance", label: "Insurance Assessment", description: "Damage evaluation for claims" },
    { value: "maintenance", label: "Maintenance Planning", description: "Preventive maintenance strategy" }
  ];

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM", 
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM"
  ];

  const benefits = [
    { icon: Search, title: "Thorough Inspection", description: "Comprehensive 360-degree property evaluation" },
    { icon: Clock, title: "Fast Turnaround", description: "48-72 hour preliminary report available" },
    { icon: CheckCircle, title: "Licensed Assessor", description: "Qualified building professionals only" },
    { icon: AlertTriangle, title: "Risk Identification", description: "Early detection of potential issues" }
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
          <Badge className="mb-4">Professional Assessment</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Stonework Assessment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert evaluation of your property's stonework condition with our comprehensive stone 
            assessment service. Identify issues early and plan your maintenance with confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Assessment Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span>Assessment Booking Form</span>
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

                {/* Property Details */}
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address *</Label>
                  <Input id="address" placeholder="Enter the full property address" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment/Unit</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="commercial">Commercial Building</SelectItem>
                        <SelectItem value="heritage">Heritage Building</SelectItem>
                        <SelectItem value="industrial">Industrial Property</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buildingAge">Building Age</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select building age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Less than 5 years</SelectItem>
                        <SelectItem value="recent">5-15 years</SelectItem>
                        <SelectItem value="established">15-30 years</SelectItem>
                        <SelectItem value="older">30-50 years</SelectItem>
                        <SelectItem value="heritage">Over 50 years</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Assessment Type */}
                <div className="space-y-3">
                  <Label>Assessment Type Required *</Label>
                  {assessmentTypes.map((type) => (
                    <div key={type.value} className="flex items-start space-x-3">
                      <Checkbox id={type.value} />
                      <div className="grid gap-1.5 leading-none">
                        <Label 
                          htmlFor={type.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type.label}
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scheduling */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input id="preferredDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeSlot">Preferred Time *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-2">
                  <Label htmlFor="concerns">Specific Concerns or Issues</Label>
                  <Textarea 
                    id="concerns" 
                    placeholder="Describe any specific areas of concern, visible issues, or particular aspects you'd like us to focus on during the assessment..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="access">Access Instructions</Label>
                  <Textarea 
                    id="access" 
                    placeholder="Any special instructions for property access, key collection, parking, or safety considerations..."
                    rows={2}
                  />
                </div>

                {/* Additional Services */}
                <div className="space-y-3">
                  <Label>Additional Services (Optional)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Thermal imaging inspection",
                      "Detailed photographic report", 
                      "Priority assessment (48-72hrs)",
                      "Engineer consultation",
                      "Heritage specialist report",
                      "Insurance claim documentation"
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox id={service} />
                        <Label htmlFor={service} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Book Assessment
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
            {/* Assessment Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Assessment Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <benefit.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{benefit.title}</div>
                      <div className="text-xs text-muted-foreground">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Priority Contact */}
            <Card className="bg-destructive/10 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Urgent Assessment Needed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For structural concerns or safety issues, call us for prompt professional assessment.
                </p>
                <Button variant="destructive" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Priority: 0414 922 276
                </Button>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Assessment Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Basic Assessment</span>
                  <span className="font-medium">$350</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Comprehensive Report</span>
                  <span className="font-medium">$650</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Heritage Specialist</span>
                  <span className="font-medium">$850</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-sm">Priority (24hr)</span>
                    <span>+50%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  * Assessment fee credited towards any work commissioned
                </p>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Visual inspection of all accessible areas",
                  "Structural integrity assessment", 
                  "Detailed photographic documentation",
                  "Written report with recommendations",
                  "Follow-up consultation included",
                  "Priority booking for any work needed"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}