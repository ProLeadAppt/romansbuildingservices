import { Star, Users, Clock, CheckCircle, Award } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const stats = [
  {
    icon: Users,
    number: "800+",
    label: "Sydney Properties Restored"
  },
  {
    icon: Clock,
    number: "30+",
    label: "Years Experience"
  },
  {
    icon: CheckCircle,
    number: "✓",
    label: "Licensed & Insured"
  },
  {
    icon: Award,
    number: "1995",
    label: "Established"
  }
];

const testimonials = [
  {
    name: "David Miller",
    location: "Paddington",
    rating: 5,
    text: "Outstanding heritage restoration work on our Victorian terrace. Minas personally supervised the project and the attention to detail was exceptional. Highly recommend Romans Building Services."
  },
  {
    name: "Jennifer Wilson", 
    location: "Balmain",
    rating: 5,
    text: "Professional stonework restoration that exceeded our expectations. The team was reliable, skilled, and completed the work on time. Great communication throughout the project."
  },
  {
    name: "Mark Thompson",
    location: "Leichhardt", 
    rating: 5,
    text: "Excellent masonry work on our retaining wall. Fair pricing, quality workmanship, and cleaned up perfectly after completion. Will definitely use Romans Building Services again."
  },
  {
    name: "Sarah Chen",
    location: "Newtown",
    rating: 5,
    text: "Minas and his team did an amazing job restoring our heritage brick facade. The craftsmanship is top-notch and the results speak for themselves. Very happy with the service."
  }
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 section-bg-image bg-gradient-to-br from-accent via-muted/50 to-background" style={{backgroundImage: `url(${teamImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-accent/95"></div>
      <div className="relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
             Trusted by 800+ Sydney Homeowners Since 1995
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Romans Building Services has helped over 800+ Sydney homeowners with building solutions. Fully licensed, insured, and trained to current industry standards - delivering quality solutions for your property.
           </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-card rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 trust-shadow hover:elevated-card transition-smooth">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Sydney Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from satisfied property owners across Sydney
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card/95 backdrop-blur-sm p-6 rounded-lg trust-shadow hover:elevated-card transition-smooth geometric-accent">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-8 trust-shadow elevated-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Romans Building Services Team</h3>
              <p className="text-muted-foreground mb-6">
                Our qualified professionals bring 30+ years of combined experience in masonry, restoration, and remedial building works. Based in Sydney, we're committed to delivering quality solutions that stand the test of time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Qualified Building Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Heritage & Conservation Specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Local Sydney Knowledge</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={teamImage} 
                alt="Romans Building Services professional team of skilled masonry contractors and building restoration specialists in Sydney"
                className="w-full rounded-lg trust-shadow"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};