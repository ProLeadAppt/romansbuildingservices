import { Star, Users, Calendar, Award } from "lucide-react";
import teamImage from "@/assets/team.jpg";

export const SocialProofSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Customers"
    },
    {
      icon: Calendar,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Award,
      number: "100%",
      label: "Licensed & Insured"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Sydney CBD",
      rating: 5,
      text: "Romans Building Services transformed our heritage building facade. The attention to detail and craftsmanship was exceptional. Highly recommend!"
    },
    {
      name: "Michael Thompson", 
      location: "North Shore",
      rating: 5,
      text: "Professional, reliable, and delivered exactly what they promised. The masonry repair work on our home was completed on time and within budget."
    },
    {
      name: "Lisa Chen",
      location: "Eastern Suburbs", 
      rating: 5,
      text: "Excellent communication throughout the project. The team was knowledgeable and solved our complex waterproofing issues permanently."
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 trust-shadow">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg trust-shadow">
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
        <div className="bg-white rounded-lg p-8 trust-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Meet Your Expert Team
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our licensed professionals bring decades of combined experience in masonry, restoration, and building services. We're committed to delivering excellence on every project.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Master Builders Association Member</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Heritage Restoration Specialists</span>
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