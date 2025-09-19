import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, CheckCircle2, Shield, Award, Clock, AlertTriangle, Droplets, Construction } from 'lucide-react';
import { AssessmentPopup } from "@/components/AssessmentPopup";
import { MobileOptimizedImage } from '@/components/images/MobileOptimizedImage';

export default function ConcreteCancerRepairsPage() {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const typicalIssues = [
    "Concrete spalling and deterioration",
    "Exposed and corroded steel reinforcement",
    "Structural cracking from concrete expansion",
    "Water ingress accelerating deterioration",
    "Balcony and facade concrete damage",
    "Carbonation reducing concrete alkalinity",
    "Chloride contamination from salt exposure",
    "Structural integrity compromised by concrete cancer"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Comprehensive Investigation",
      description: "Thorough assessment including concrete testing, rebar condition evaluation, and structural impact analysis. We identify the extent and severity of concrete cancer."
    },
    {
      step: "2", 
      title: "Concrete Removal & Treatment",
      description: "Careful removal of affected concrete, cleaning and treatment of steel reinforcement. Application of protective coatings and corrosion inhibitors."
    },
    {
      step: "3",
      title: "Reconstruction & Protection",
      description: "Rebuild with high-quality concrete and protective systems. Apply waterproofing and anti-carbonation coatings for long-term protection."
    }
  ];

  const faqs = [
    {
      question: "What exactly is concrete cancer and what causes it?",
      answer: "Concrete cancer is the deterioration of concrete caused by the corrosion of steel reinforcement inside. When steel rusts, it expands and cracks the surrounding concrete. This is typically caused by water ingress, chloride exposure (especially near coastal areas), or carbonation reducing the concrete's protective alkalinity."
    },
    {
      question: "How urgent is concrete cancer repair?",
      answer: "Concrete cancer should be addressed promptly as it progressively worsens and can compromise structural integrity. Early intervention is more cost-effective and prevents extensive damage. In severe cases, it can affect building safety and require emergency repairs."
    },
    {
      question: "Can concrete cancer be prevented after repairs?",
      answer: "Yes, proper repairs include protective measures to prevent recurrence. We apply anti-carbonation coatings, improve waterproofing, use corrosion-resistant reinforcement, and ensure adequate concrete cover. Regular maintenance and inspections also help prevent future issues."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Concrete Specialists</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Concrete Cancer Repairs – Sydney
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert concrete cancer treatment and structural restoration across Sydney. Comprehensive solutions for spalling concrete, corroded reinforcement, and long-term protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowAssessmentPopup(true)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Free Concrete Assessment
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
                Concrete cancer is a serious structural issue that affects buildings across Sydney, particularly in coastal areas and older structures. At Romans Building Services, we specialize in comprehensive concrete cancer treatment using advanced techniques and materials to restore structural integrity and prevent recurrence.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our concrete cancer repair process involves thorough investigation, careful removal of affected areas, treatment of corroded reinforcement, and reconstruction with protective systems. We understand that concrete cancer requires immediate attention to prevent further deterioration and potential safety hazards.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From residential balconies to commercial facades, our experienced team provides lasting solutions that address both the immediate damage and underlying causes. We use only premium materials and proven techniques to ensure repairs stand the test of time in Sydney's challenging climate.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Structural Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Concrete Removal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Rebar Treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Protective Coatings</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <MobileOptimizedImage
                src="/lovable-uploads/2020-06-04.png"
                alt="Concrete cancer damage showing spalling concrete and exposed corroded steel reinforcement requiring professional repair"
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
            <h2 className="text-3xl font-bold text-center mb-12">Common Concrete Cancer Problems</h2>
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
                src="/lovable-uploads/unnamed (46).png"
                alt="Before image showing severe concrete cancer damage with spalling and structural deterioration"
                className="w-full rounded-lg shadow-lg"
              />
              <MobileOptimizedImage
                src="/lovable-uploads/unnamed (47).png"
                alt="After image of completed concrete cancer repair work showing restored structure with protective coatings"
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Concrete Cancer Repair Process</h2>
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
              src="/lovable-uploads/unnamed (48).png"
              alt="Concrete repair specialist applying protective coating system after concrete cancer treatment"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Concrete Cancer Repair Guarantees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Structural Integrity Warranty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All concrete cancer repairs come with comprehensive structural warranty protection. We guarantee the integrity of our repair work and materials used.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Structural repairs: 10-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Concrete reconstruction: 7-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Protective coatings: 5-year warranty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Prevention Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive repair approach includes preventive measures to protect against future concrete cancer recurrence in treated areas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Anti-carbonation coating application</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Corrosion inhibitor treatment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Waterproofing system integration</span>
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
            <Construction className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Concerned About Concrete Cancer?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let concrete cancer compromise your building's safety. Get expert assessment and lasting repair solutions from Sydney's concrete specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowAssessmentPopup(true)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6"
              >
                <CheckCircle2 className="w-6 h-6 mr-2" />
                Get Urgent Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('tel:+61483981292')}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Concrete Experts
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Licensed concrete specialists • Emergency response available • Comprehensive insurance
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