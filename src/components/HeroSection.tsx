import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Calendar, Star, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendFormToZapier } from "@/utils/zapierWebhook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-masonry.jpg";

export const HeroSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await sendFormToZapier('hero_form', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        priority: 'high',
        source: 'Hero Section Form'
      });

      if (response.success) {
        toast({
          title: "Assessment Request Received!",
          description: "We'll contact you within 30 minutes to schedule your FREE assessment.",
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
        
        // Navigate to thank you page
        navigate('/thank-you');
      } else {
        throw new Error(response.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at +61 483 981 292",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>
      </div>
      
      {/* Content - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Main Content */}
          <div className="text-white space-y-8 order-1 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Shield className="mr-2 h-4 w-4" />
              Licensed & Insured • Trusted Since 1995 • 2025 Industry Standards
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Professional Structural Solutions
                <span className="block text-yellow-400">For Sydney Homes</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-6">
                Established Sydney Masonry Specialists Since 1995
              </p>
            </div>

            {/* Professional Offer */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6 rounded-xl">
              <div className="text-sm font-bold uppercase tracking-wide mb-2">Building Assessment</div>
              <div className="text-2xl md:text-3xl font-bold mb-2">Building Assessment & Quote</div>
              <div className="text-lg font-semibold mb-2">Property Evaluation Service</div>
              <div className="text-sm">Detailed Analysis • Prompt Response • No Obligation</div>
            </div>

            {/* Primary CTA */}
            <div className="space-y-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-10 py-6 h-auto w-full sm:w-auto font-bold">
                <Calendar className="mr-3 h-6 w-6" />
                Schedule Your Assessment
              </Button>
              
              {/* Phone Number - Prominent */}
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="h-6 w-6 text-yellow-400" />
                <a href="tel:+61483981292" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                  +61 483 981 292
                </a>
                <span className="text-sm text-gray-300">Contact us</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24+</div>
                <div className="text-xs text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">✓</div>
                <div className="text-xs text-gray-300">Licensed & Insured</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-gray-300">5-Star Rated</div>
              </div>
            </div>
          </div>

          {/* Right Side - Lead Capture Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl order-2 lg:order-2">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Your Assessment</h2>
              <p className="text-gray-600">Complete the form below for prompt response</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name*" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name*" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number*" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address*" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              >
                <option value="">What service do you need?</option>
                <option value="Structural Assessment">Structural Assessment</option>
                <option value="Masonry Repairs">Masonry Repairs</option>
                <option value="Foundation Issues">Foundation Issues</option>
                <option value="Crack Repairs">Crack Repairs</option>
                <option value="Heritage Restoration">Heritage Restoration</option>
                <option value="Professional Consultation">Professional Consultation</option>
              </select>
              
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your building issue..." 
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              ></textarea>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-bold disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Request My Assessment'}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive calls/texts. No spam, unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};