import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "Standard projects typically begin within 48-72 hours. We understand the importance of addressing structural concerns promptly and work efficiently to minimize disruption to your daily routine."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide no-obligation estimates for all projects. Our team will assess your property, explain the required work, and provide a detailed written quote with transparent pricing."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed masonry contractors, insured with comprehensive liability coverage, and certified professionals. We can provide certificates of insurance upon request."
    },
    {
      question: "How much will my project cost?",
      answer: "Project costs vary based on scope and complexity. We provide detailed, transparent quotes after our assessment. Our pricing reflects quality workmanship and materials, and we'll explain all costs clearly before starting work."
    },
    {
      question: "Can you work on heritage buildings?",
      answer: "Yes, we specialize in heritage building restoration and have extensive experience working with heritage-listed properties. We understand the unique requirements and regulations involved in preserving historical buildings."
    },
    {
      question: "Do you handle structural repairs?",
      answer: "Yes, we offer professional repair services for structural issues. Contact us for prompt response within 48-72 hours on repairs that affect building integrity or property protection."
    },
    {
      question: "What areas do you service?",
      answer: "We service the greater Sydney metropolitan area, including the CBD, North Shore, Eastern Suburbs, Inner West, and surrounding regions. Contact us to confirm if we service your specific location."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-accent/30 section-bg-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              FAQs
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services and process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/95 backdrop-blur-sm rounded-lg trust-shadow border-0 hover:elevated-card transition-smooth px-6">
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
                href="tel:+61414922276" 
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-light text-secondary-foreground font-bold px-6 py-3 rounded-md transition-smooth"
              >
                Call Now: +61 414 922 276
              </a>
              <a 
                href="mailto:romanspropertyservices@gmail.com"
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