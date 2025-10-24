import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Minas",
    value: "+61 414 922 276",
    description: "Available 7 days a week",
    action: "tel:+61414922276",
    primary: true
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "romanspropertyservices@gmail.com",
    description: "We respond within 24 hours",
    action: "mailto:romanspropertyservices@gmail.com",
    primary: false
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Greater Sydney",
    description: "All metropolitan areas covered",
    action: "/areas",
    primary: false
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "7 Days a Week",
    description: "Flexible scheduling available",
    action: "/quote",
    primary: false
  }
];

const quickServices = [
  "Free Building Assessment",
  "Emergency Repairs", 
  "Masonry & Brickwork",
  "Heritage Restoration",
  "Foundation Repairs",
  "Structural Solutions"
];

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 section-bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Get in touch with Sydney's trusted masonry and restoration experts for your free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <div key={index} className={`group cursor-pointer ${method.primary ? 'bg-secondary/10' : 'bg-card'} p-6 rounded-lg trust-shadow hover:elevated-card transition-smooth`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${method.primary ? 'bg-secondary text-secondary-foreground' : 'bg-primary/10 text-primary'} group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{method.title}</h4>
                    <p className={`mb-2 ${method.primary ? 'text-lg font-semibold' : ''}`}>{method.value}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Services & CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            
            <div className="bg-card p-6 rounded-lg trust-shadow">
              <div className="grid grid-cols-1 gap-3 mb-6">
                {quickServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-6">
                <h4 className="font-bold text-lg mb-3">Ready to Start?</h4>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
                    onClick={() => window.open('tel:+61414922276')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now for Free Assessment
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open('/quote', '_blank')}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Request Online Quote
                  </Button>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
              <h4 className="font-bold text-destructive mb-2">Emergency Repairs?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Structural issues that need immediate attention? We provide emergency response for urgent building repairs.
              </p>
              <Button 
                size="sm" 
                variant="destructive"
                onClick={() => window.open('/emergency', '_blank')}
              >
                Emergency Service
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Promise */}
        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-8 trust-shadow text-center">
          <h3 className="text-2xl font-bold mb-4">Our Contact Promise</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            When you contact Romans Building Services, you'll speak directly with experienced professionals who understand your needs. We provide honest advice, transparent pricing, and reliable communication throughout your project.
          </p>
        </div>
      </div>
    </section>
  );
};