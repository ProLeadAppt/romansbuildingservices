import { Star, Users, Clock, CheckCircle, Award } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const stats = [
  {
    icon: Users,
    number: "1,000+",
    label: "Sydney Properties Restored"
  },
  {
    icon: Clock,
    number: "24+",
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
    name: "Sarah Mitchell",
    location: "Sydney CBD",
    rating: 5,
    text: "Romans Building Services identified structural issues early and provided effective solutions. Their prompt response and quality work gave us peace of mind about our property's condition."
  },
  {
    name: "Michael Thompson", 
    location: "North Shore",
    rating: 5,
    text: "Romans provided a comprehensive solution that addressed the root cause of our building issues. Two years later, no problems. Their expertise with heritage buildings was exactly what we needed."
  },
  {
    name: "Lisa Chen",
    location: "Eastern Suburbs", 
    rating: 5,
    text: "Romans provided effective stone restoration solutions for our apartment building when previous contractors couldn't resolve the issue. Their thorough approach gave us confidence in the long-term results."
  },
  {
    name: "James Wilson",
    location: "Inner West",
    rating: 5,
    text: "The assessment revealed structural issues that needed attention. Romans addressed these concerns effectively and professionally, providing good value for the work completed."
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
            Trusted by 1,000+ Sydney Homeowners Since 1995
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Romans Building Services has helped over 1,000 Sydney homeowners with building solutions. Fully licensed, insured, and trained to current industry standards - delivering quality solutions for your property.
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