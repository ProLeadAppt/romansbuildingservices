import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, CheckCircle2, Shield, Award, Clock, AlertTriangle, Droplets, Layers } from 'lucide-react';
import { AssessmentPopup } from "@/components/AssessmentPopup";
import { MobileOptimizedImage } from '@/components/images/MobileOptimizedImage';

export default function WaterproofingRemedialPage() {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const typicalIssues = [
    "Basement and foundation water leakage",
    "Bathroom and wet area waterproofing failure",
    "Balcony and deck water penetration",
    "Structural crack water ingress",
    "Failing building envelope seals",
    "Rising damp and moisture problems",
    "External wall water penetration",
    "Roof and gutter water infiltration"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Water Ingress Investigation",
      description: "Comprehensive assessment to identify water entry points, moisture sources, and structural damage. We use advanced detection methods to locate all problem areas."
    },
    {
      step: "2", 
      title: "Waterproofing Design & Crack Injection",
      description: "Development of comprehensive waterproofing solution including crack injection, membrane installation, and drainage improvements based on specific site conditions."
    },
    {
      step: "3",
      title: "Remedial Waterproofing Implementation",
      description: "Expert installation of waterproofing systems using premium materials and proven techniques. Quality testing ensures long-term water protection."
    }
  ];

  const faqs = [
    {
      question: "What is crack injection and when is it needed?",
      answer: "Crack injection involves injecting specialized materials into structural cracks to seal them against water penetration. It's needed when cracks allow water ingress and compromise the building's waterproofing integrity. We use polyurethane or epoxy injection depending on the crack type and location."
    },
    {
      question: "How long does remedial waterproofing last?",
      answer: "Quality remedial waterproofing systems typically last 15-25 years depending on the materials used, application quality, and environmental conditions. We provide warranties up to 10 years and recommend regular inspections to maintain optimal performance."
    },
    {
      question: "Can you waterproof existing buildings without major disruption?",
      answer: "Yes, we specialize in remedial waterproofing solutions that minimize disruption to existing buildings. We can often work from inside or use injection techniques that don't require major excavation, allowing continued occupancy during most repair work."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Waterproofing Experts</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Remedial Waterproofing & Crack Injection
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert remedial waterproofing and crack injection services across Sydney. Comprehensive solutions for water leakage, structural cracks, and building envelope failures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowAssessmentPopup(true)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Free Waterproofing Assessment
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
                Remedial waterproofing and crack injection are critical services for protecting buildings from water damage and structural deterioration. At Romans Building Services, we provide comprehensive waterproofing solutions designed to address existing water problems and prevent future issues across Sydney properties.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our remedial waterproofing services encompass crack injection, membrane installation, basement waterproofing, and complete building envelope remediation. We understand that water ingress can cause serious structural damage and health issues, requiring immediate professional intervention to protect your property investment.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From residential basement leaks to commercial building envelope failures, our experienced team uses advanced materials and proven techniques to create lasting waterproof barriers. We work with building owners, strata managers, and insurance companies to provide cost-effective solutions that address both immediate problems and long-term protection.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Crack Injection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Membrane Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Basement Waterproofing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Building Envelope</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <MobileOptimizedImage
                src="/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.png"
                alt="Remedial waterproofing application showing crack injection and membrane installation on Sydney building"
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
            <h2 className="text-3xl font-bold text-center mb-12">Common Waterproofing Problems We Solve</h2>
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
                src="/lovable-uploads/12ca1977-0622-414c-a4b7-fa428cde1018.png"
                alt="Before image showing water damage and structural cracks requiring remedial waterproofing treatment"
                className="w-full rounded-lg shadow-lg"
              />
              <MobileOptimizedImage
                src="/lovable-uploads/fca9df0e-1672-43ed-a1a0-4d254b541a48.png"
                alt="After image of completed waterproofing work showing crack injection and protective membrane installation"
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Remedial Waterproofing Process</h2>
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
              src="/lovable-uploads/ef614a43-ee83-488e-b50e-313f60198a45.png"
              alt="Waterproofing specialist performing crack injection and applying remedial waterproofing membrane system"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Waterproofing Guarantees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Waterproofing Warranty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All remedial waterproofing work comes with comprehensive warranty protection covering materials, installation, and water protection performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Structural waterproofing: 10-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Crack injection: 7-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Membrane systems: 10-year warranty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Performance Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We guarantee the effectiveness of our waterproofing solutions and provide ongoing support to ensure long-term water protection.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Water penetration prevention</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Premium material certification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">Post-completion inspection service</span>
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
            <Droplets className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Stop Water Damage Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let water damage compromise your building. Get expert remedial waterproofing and crack injection solutions from Sydney's specialists.
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
                Call Waterproofing Experts
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Licensed waterproofing specialists • Emergency leak response • Comprehensive warranties
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