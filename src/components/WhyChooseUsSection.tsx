import { Shield, Heart, Award, Clock, CheckCircle2, Users, Star, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Family-Owned Business",
    description: "Personal attention and care for every project. We treat your property like our own and build lasting relationships with our clients."
  },
  {
    icon: Clock,
    title: "30+ Years Experience",
    description: "Established in 1995, we've been serving Sydney with expert masonry, restoration, and remedial building services for over three decades."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed masonry contractors with comprehensive insurance coverage. All work comes with warranty protection."
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "Using only premium materials and proven techniques. Our craftsmen take pride in delivering results that exceed expectations."
  },
  {
    icon: Users,
    title: "800+ Happy Clients",
    description: "Trusted by over 800 Sydney property owners. Our reputation is built on consistent quality and reliable service."
  },
  {
    icon: CheckCircle2,
    title: "Honest Pricing",
    description: "Transparent, upfront pricing with no hidden costs. You'll know exactly what you're paying for before we start."
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-accent/50 section-bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three decades of building trust through exceptional masonry, restoration, and remedial building services across Sydney.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-card p-6 rounded-lg trust-shadow hover:elevated-card transition-smooth geometric-accent group">
              <div className="bg-primary/10 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <reason.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-smooth" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Client Promise */}
        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-8 trust-shadow">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Hammer className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold">Our Promise to You</h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              We're not just contractors – we're your partners in protecting and enhancing your property. From the initial assessment to project completion, we maintain open communication, deliver on our promises, and stand behind our work with comprehensive warranties.
            </p>
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">Rated 5 stars by our clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};