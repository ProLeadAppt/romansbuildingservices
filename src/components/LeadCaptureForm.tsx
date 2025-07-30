import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "FREE Assessment Request Submitted!",
      description: "We'll contact you within 2 hours to schedule your free structural assessment. Plus get 10% off your first project!",
    });
    
    setFormData({ name: "", phone: "", email: "", projectType: "", description: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your FREE Structural Assessment
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Professional building inspection worth $300 - completely free with no obligation. Plus get 10% off your first project when you proceed with Romans Building Services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form */}
            <div className="bg-white rounded-lg p-8 trust-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Schedule Your FREE Assessment
                </h3>
                <p className="text-muted-foreground">
                  Quick response • Expert evaluation • No obligation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-1"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-1"
                      placeholder="(02) 9XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-1"
                    placeholder="john@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType" className="text-sm font-medium">
                    What Type of Work Do You Need?
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masonry">Masonry & Brickwork</SelectItem>
                      <SelectItem value="restoration">Structural Restoration</SelectItem>
                      <SelectItem value="remedial">Remedial Building</SelectItem>
                      <SelectItem value="waterproofing">Waterproofing & Damp</SelectItem>
                      <SelectItem value="heritage">Heritage Conservation</SelectItem>
                      <SelectItem value="inspection">Building Inspection</SelectItem>
                      <SelectItem value="other">Not Sure / Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description" className="text-sm font-medium">
                    Describe Your Building Issues
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="mt-1"
                    placeholder="Please describe any visible cracks, water damage, structural concerns, or other issues you've noticed..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground font-bold py-6 text-lg cta-shadow">
                  {isSubmitting ? "Submitting..." : "Get FREE Assessment + 10% Off"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted about your project. We respect your privacy and never share your information.
                </p>
              </form>
            </div>

            {/* Right Column - Benefits & Contact */}
            <div className="text-white">
              <h3 className="text-xl font-semibold text-white mb-4">Why Romans Building Services?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">24+ Years Experience</h4>
                    <p className="text-sm text-white/80">Established 1995, trusted across Sydney</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">Qualified Professionals</h4>
                    <p className="text-sm text-white/80">Licensed builders and heritage specialists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">Quality Guarantee</h4>
                    <p className="text-sm text-white/80">Comprehensive warranty on all work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">1000+ Properties Restored</h4>
                    <p className="text-sm text-white/80">Proven track record across Sydney</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mt-8">
                <h4 className="font-bold text-lg mb-4">Prefer to Call? Contact Us Directly</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span className="font-medium">(02) 9XXX-XXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary" />
                    <span className="font-medium">info@romansbuildingservices.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Serving Greater Sydney Area</span>
                  </div>
                </div>
              </div>

              {/* Offer Highlight */}
              <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 border border-secondary/30 mt-6">
                <h4 className="font-bold text-lg mb-2">🎯 Your FREE Assessment Includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Professional structural inspection (worth $300)</li>
                  <li>• Written report with recommendations</li>
                  <li>• 10% discount on approved work</li>
                  <li>• No obligation consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};