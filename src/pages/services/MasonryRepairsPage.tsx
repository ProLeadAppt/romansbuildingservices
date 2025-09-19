import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, CheckCircle2, Shield, Award, Clock, Hammer, AlertTriangle, Wrench } from 'lucide-react';
import { AssessmentPopup } from "@/components/AssessmentPopup";
import { MobileOptimizedImage } from '@/components/images/MobileOptimizedImage';

export default function MasonryRepairsPage() {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const typicalIssues = [
    "Cracked and deteriorating mortar joints",
    "Loose or damaged bricks requiring replacement",
    "Failed lintel causing structural sagging",
    "Water damage and moisture penetration",
    "Efflorescence and salt damage",
    "Structural movement causing brick displacement",
    "Inappropriate previous repairs failing",
    "Foundation settlement affecting masonry walls"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Comprehensive Inspection",
      description: "Detailed assessment of masonry condition, structural integrity, and underlying causes. We identify all affected areas and determine appropriate repair methods."
    },
    {
      step: "2", 
      title: "Material Sourcing & Preparation",
      description: "Source matching bricks, appropriate mortar mixes, and quality materials. Prepare work area and implement safety measures for efficient repair execution."
    },
    {
      step: "3",
      title: "Expert Repair Execution",
      description: "Skilled craftsmen perform repairs using proven techniques. Quality control throughout the process ensures lasting results and structural integrity."
    }
  ];

  const faqs = [
    {
      question: "How do you match existing bricks for replacement work?",
      answer: "We specialize in sourcing matching bricks through our extensive supplier network and recycled brick contacts. When exact matches aren't available, we can age new bricks or blend different bricks to achieve a seamless appearance that respects the building's character."
    },
    {
      question: "What causes masonry mortar to deteriorate over time?",
      answer: "Mortar deterioration typically results from weather exposure, age, inappropriate mortar types, structural movement, or water damage. Modern cement mortars used inappropriately on older buildings can cause particular problems as they're too hard for heritage bricks."
    },
    {
      question: "Do you handle both residential and commercial masonry repairs?",
      answer: "Yes, we provide masonry repair services for both residential and commercial properties across Sydney. Our team has experience with everything from heritage terraces to modern commercial buildings, adapting our techniques to suit each project's specific requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Masonry Specialists</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Masonry Repairs: Brick, Stone & Lintel Replacement
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert masonry repair services across Sydney. From brick replacement to repointing, stone restoration to lintel repairs - trusted craftsmen with 30+ years experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowAssessmentPopup(true)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Free Masonry Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('tel:+61483981292')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +61 483 981 292
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Masonry repairs require precision, expertise, and quality materials to ensure lasting results. At Romans Building Services, we provide comprehensive masonry repair services including brick replacement, repointing, stone restoration, and lintel repairs across Sydney's diverse architectural landscape.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our skilled masons combine traditional craftsmanship with modern techniques to restore structural integrity and visual appeal. Whether you're dealing with weather damage, structural movement, or aging materials, we have the expertise to diagnose problems accurately and implement effective solutions.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From Federation-era terraces requiring heritage brick matching to modern buildings needing structural lintel replacement, our team adapts techniques and materials to suit each project's unique requirements. We pride ourselves on delivering repairs that blend seamlessly with existing masonry while providing superior longevity.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Brick Replacement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Repointing Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Stone Restoration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Lintel Repairs</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <MobileOptimizedImage
                src="/lovable-uploads/2020-08-27.png"
                alt="Professional masonry repair work showing brick replacement and repointing on Sydney residential building"
                className="w-full rounded-lg shadow-lg"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Typical Issues Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Masonry Problems We Fix</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {typicalIssues.map((issue, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <span className="font-medium">{issue}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <MobileOptimizedImage
                src="/lovable-uploads/2020-09-01.png"
                alt="Before image showing damaged brick work and deteriorated mortar joints requiring professional repair"
                className="w-full rounded-lg shadow-lg"
              />
              <MobileOptimizedImage
                src="/lovable-uploads/2020-11-22.png"
                alt="After image of completed masonry repair work demonstrating expert brick replacement and repointing"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Masonry Repair Process</h2>
            <div className="space-y-8 mb-12">
              {processSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <MobileOptimizedImage
              src="/lovable-uploads/2020-12-29.png"
              alt="Masonry specialist performing expert brick replacement work using traditional techniques and quality materials"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Masonry Repair Guarantees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Workmanship Warranty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All masonry repair work comes with comprehensive warranty protection covering materials and craftsmanship. We stand behind our work with industry-leading guarantees.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Structural repairs: 10-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Brick replacement: 7-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Repointing work: 5-year warranty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Quality Materials Promise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We use only premium materials sourced from trusted suppliers. All materials come with manufacturer warranties and our quality guarantee.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Premium grade bricks and stone</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Appropriate mortar specifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Manufacturer warranty inclusion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Hammer className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Need Expert Masonry Repairs?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Trust Sydney's masonry specialists for lasting repairs. Quality workmanship, matching materials, and comprehensive warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowAssessmentPopup(true)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6"
              >
                <CheckCircle2 className="w-6 h-6 mr-2" />
                Get Free Masonry Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('tel:+61483981292')}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Masonry Experts
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Licensed masonry contractors • 30+ years experience • Full insurance coverage
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Popup */}
      {showAssessmentPopup && (
        <AssessmentPopup
          isOpen={showAssessmentPopup}
          onClose={() => setShowAssessmentPopup(false)}
        />
      )}
    </div>
  );
}