import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Building } from "lucide-react";
import { ContentInfoLandmark } from "./ARIALandmarks";
import { AssessmentPopup } from '@/components/AssessmentPopup';

export const Footer = () => {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);
  return (
    <ContentInfoLandmark 
      id="site-footer"
      label="Site footer with contact information and company details"
      className="bg-foreground text-white"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Romans Building Services</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-secondary" />
                <span className="text-sm">Est. 1995 • 24+ Years Experience</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Sydney's trusted specialists in masonry, restoration and remedial building works. Licensed, insured, and committed to quality.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Masonry & Brickwork</li>
              <li>Structural Restoration</li>
              <li>Remedial Building</li>
              <li>Heritage Conservation</li>
              <li>Foundation Repairs</li>
              <li>Concrete Repairs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">+61 483 981 292</div>
                  <div className="text-muted-foreground">Professional Service Available</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">romanspropertyservices@gmail.com</div>
                  <div className="text-muted-foreground">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Greater Sydney Area</div>
                  <div className="text-muted-foreground">NSW, Australia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Mon - Fri: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Saturday: 8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Sunday: By Appointment</span>
              </div>
            </div>
            
            <Button size="lg" className="w-full bg-secondary hover:bg-secondary-light text-secondary-foreground font-bold py-6 mb-4 cta-shadow" onClick={() => setShowAssessmentPopup(true)}>
              Get FREE Assessment
            </Button>

            {/* Social Media */}
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Romans Building Services. All rights reserved. ABN: 49 641 892 677
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="/privacy-policy" className="hover:text-secondary transition-smooth">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-secondary transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-smooth">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Popup */}
      <AssessmentPopup isOpen={showAssessmentPopup} onClose={() => setShowAssessmentPopup(false)} />
    </ContentInfoLandmark>
  );
};