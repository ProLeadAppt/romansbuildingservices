import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "We typically provide same-day consultations and can often begin work within 48-72 hours for urgent repairs. For larger projects, we'll work with your timeline to ensure minimal disruption to your property or business operations."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide completely free, no-obligation estimates for all projects. Our experienced team will assess your property, explain the required work, and provide a detailed written quote with transparent pricing."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed builders, insured with comprehensive liability coverage, and proud members of the Master Builders Association. We can provide certificates of insurance upon request."
    },
    {
      question: "What warranty do you offer on your work?",
      answer: "We offer comprehensive warranties on all our work - up to lifetime warranties on certain services. Our warranty covers both materials and workmanship, giving you complete peace of mind."
    },
    {
      question: "How much will my project cost?",
      answer: "Project costs vary based on scope, materials, and complexity. We provide detailed, transparent quotes with no hidden fees. Most homeowners find our competitive pricing offers excellent value for the quality of work we deliver."
    },
    {
      question: "Can you work on heritage buildings?",
      answer: "Yes, we specialize in heritage building restoration and have extensive experience working with heritage-listed properties. We understand the unique requirements and regulations involved in preserving historical buildings."
    },
    {
      question: "Do you handle emergency repairs?",
      answer: "Yes, we offer emergency repair services for urgent structural issues. Contact us immediately for emergency situations - we're available 24/7 for critical repairs that affect safety or property protection."
    },
    {
      question: "What areas do you service?",
      answer: "We service the greater Sydney metropolitan area, including the CBD, North Shore, Eastern Suburbs, Inner West, and surrounding regions. Contact us to confirm if we service your specific location."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services and process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg trust-shadow px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our team is here to help. Get in touch for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0414922276" 
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-light text-secondary-foreground font-bold px-6 py-3 rounded-md transition-smooth"
              >
                Call Now: 0414 922 276
              </a>
              <a 
                href="mailto:info@romansbuildingservices.com"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-6 py-3 rounded-md transition-smooth"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};