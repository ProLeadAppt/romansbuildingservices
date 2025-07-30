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
    number: "100%",
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
    text: "Romans Building Services transformed our heritage building facade. The attention to detail and craftsmanship was exceptional. Professional service from start to finish."
  },
  {
    name: "Michael Thompson", 
    location: "North Shore",
    rating: 5,
    text: "Outstanding masonry work on our century-old home. The team's knowledge of heritage restoration techniques was impressive. Highly recommend their services."
  },
  {
    name: "Lisa Chen",
    location: "Eastern Suburbs", 
    rating: 5,
    text: "Excellent remedial work on our apartment building. They solved complex waterproofing issues that previous contractors couldn't fix. True professionals."
  }
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted Across Sydney Since 1995
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Romans Building Services has built a reputation for quality masonry, restoration and remedial building works across Sydney's residential and commercial properties.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-card rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 trust-shadow">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg trust-shadow">
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
        <div className="bg-card rounded-lg p-8 trust-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Romans Building Services Team</h3>
              <p className="text-muted-foreground mb-6">
                Our qualified professionals bring 24+ years of combined experience in masonry, restoration, and remedial building works. Based in Sydney, we're committed to delivering quality solutions that stand the test of time.
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
                alt="Romans Building Services professional team"
                className="w-full rounded-lg trust-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};