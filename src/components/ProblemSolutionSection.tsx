import { Zap, AlertTriangle, Wrench, Clock, Shield, Hammer, CheckCircle, Award } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

const problems = [
  {
    icon: Zap,
    title: "Structural Cracks",
    description: "Visible cracks in walls, foundations, or masonry indicating serious structural movement requiring expert assessment."
  },
  {
    icon: AlertTriangle,
    title: "Water Damage & Leaks",
    description: "Moisture infiltration through compromised masonry causing structural damage, mold growth, and deterioration."
  },
  {
    icon: Wrench,
    title: "Foundation Issues",
    description: "Settlement, shifting foundations causing uneven floors, sticking doors, and compromised building integrity."
  },
  {
    icon: Clock,
    title: "Deteriorating Brickwork",
    description: "Crumbling mortar, spalling bricks, or damaged stonework that's weakening your building's structure."
  }
];

const solutions = [
  {
    icon: Shield,
    title: "Expert Structural Assessment",
    description: "Comprehensive building inspections by qualified professionals to identify issues and provide detailed repair strategies."
  },
  {
    icon: Hammer,
    title: "Masonry & Restoration",
    description: "Skilled craftsmen specializing in brickwork, stonework, and heritage restoration using traditional and modern techniques."
  },
  {
    icon: CheckCircle,
    title: "Remedial Building Solutions",
    description: "Complete waterproofing, underpinning, and structural repairs to address foundation and building envelope issues."
  },
  {
    icon: Award,
    title: "24+ Years Experience",
    description: "Established 1995, trusted by 1000+ Sydney property owners with comprehensive warranties on all work."
  }
];

export const ProblemSolutionSection = () => {
  return (
    <section className="py-20 section-bg-pattern bg-gradient-to-br from-accent via-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Structural Problems Threatening Your Sydney Property?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't ignore the warning signs. These common building issues can lead to expensive damage and safety risks if left untreated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card p-6 rounded-lg trust-shadow text-center hover:elevated-card transition-smooth geometric-accent">
              <div className="bg-destructive/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              See The Romans Building Services Difference
            </h3>
            <p className="text-lg text-muted-foreground">
              Real transformations from our expert masonry and restoration work
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={beforeAfterImage} 
              alt="Before and after masonry restoration by Romans Building Services" 
              className="w-full rounded-lg trust-shadow"
            />
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Romans Building Services: Your Trusted Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With 24+ years serving Sydney, we provide comprehensive masonry, restoration & remedial building services that address root causes, not just symptoms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-card p-6 rounded-lg trust-shadow text-center hover:elevated-card transition-smooth geometric-accent">
              <div className="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};