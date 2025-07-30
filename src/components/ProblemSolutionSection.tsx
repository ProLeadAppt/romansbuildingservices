import { AlertTriangle, Shield, Clock, Award } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

export const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Structural Damage",
      description: "Cracks in walls and foundations that threaten your building's integrity"
    },
    {
      icon: AlertTriangle,
      title: "Water Damage",
      description: "Moisture penetration causing deterioration and potential health hazards"
    },
    {
      icon: AlertTriangle,
      title: "Aesthetic Issues",
      description: "Unsightly damaged masonry reducing your property's curb appeal and value"
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Expert Restoration",
      description: "Professional repair and restoration using industry-leading techniques"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick assessment and efficient project completion to minimize disruption"
    },
    {
      icon: Award,
      title: "Guaranteed Results",
      description: "Quality workmanship backed by comprehensive warranties"
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Don't Let Structural Problems
            <span className="block text-destructive">Destroy Your Investment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ignoring masonry and structural issues leads to exponentially higher repair costs, safety hazards, and plummeting property values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg trust-shadow">
              <problem.icon className="w-12 h-12 text-destructive mb-4" />
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              See The Transformation
            </h3>
            <p className="text-lg text-muted-foreground">
              Real results from our expert restoration work
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={beforeAfterImage} 
              alt="Before and after masonry restoration" 
              className="w-full rounded-lg trust-shadow"
            />
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Proven Solution Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We restore your building's structural integrity and beauty with a systematic approach that delivers lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-lg trust-shadow text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};