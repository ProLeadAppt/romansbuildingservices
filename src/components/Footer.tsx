import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Romans Building Services</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Expert masonry, restoration, and building services with over 15 years of experience. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-secondary transition-smooth">Masonry Repair</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Building Restoration</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Remedial Works</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Waterproofing</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Heritage Restoration</a></li>
              <li><a href="#" className="hover:text-secondary transition-smooth">Emergency Repairs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">0400 123 456</div>
                  <div className="text-sm">24/7 Emergency Line</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">info@romansbuildingservices.com</div>
                  <div className="text-sm">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Greater Sydney Area</div>
                  <div className="text-sm">NSW, Australia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & CTA */}
          <div>
            <h4 className="text-lg font-bold mb-4">Business Hours</h4>
            <div className="space-y-2 text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm">Mon - Fri: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm">Saturday: 8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm">Sunday: Emergency Only</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground font-bold transition-smooth"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Romans Building Services. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-secondary transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-smooth">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};