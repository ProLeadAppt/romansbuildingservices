import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield } from 'lucide-react';
import { BUSINESS_INFO } from './StructuredData';

// Consistent NAP Component
export const NAPDisplay: React.FC<{
  variant?: 'header' | 'footer' | 'contact' | 'inline';
  showSchema?: boolean;
  className?: string;
}> = ({ variant = 'contact', showSchema = false, className = '' }) => {
  const baseClasses = "space-y-2";
  const variantClasses = {
    header: "text-sm",
    footer: "text-sm text-white",
    contact: "text-base",
    inline: "inline-flex items-center space-x-2"
  };

  const ContactInfo = () => (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Business Name */}
      <div className="font-semibold">
        {showSchema ? (
          <span itemProp="name">{BUSINESS_INFO.name}</span>
        ) : (
          BUSINESS_INFO.name
        )}
      </div>

      {/* Address */}
      <div className="flex items-start space-x-2">
        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
        <div>
          {showSchema ? (
            <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span><br />
              <span itemProp="addressLocality">{BUSINESS_INFO.address.suburb}</span>{' '}
              <span itemProp="addressRegion">{BUSINESS_INFO.address.state}</span>{' '}
              <span itemProp="postalCode">{BUSINESS_INFO.address.postcode}</span><br />
              <span itemProp="addressCountry">{BUSINESS_INFO.address.country}</span>
            </address>
          ) : (
            <address className="not-italic">
              {BUSINESS_INFO.address.street}<br />
              {BUSINESS_INFO.address.suburb} {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postcode}<br />
              {BUSINESS_INFO.address.country}
            </address>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center space-x-2">
        <Phone className="w-4 h-4" />
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          className="hover:text-primary focus:text-primary"
          {...(showSchema && { itemProp: "telephone" })}
        >
          {BUSINESS_INFO.phone}
        </a>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4" />
        <a 
          href={`mailto:${BUSINESS_INFO.email}`}
          className="hover:text-primary focus:text-primary"
          {...(showSchema && { itemProp: "email" })}
        >
          {BUSINESS_INFO.email}
        </a>
      </div>
    </div>
  );

  if (showSchema) {
    return (
      <div itemScope itemType="https://schema.org/LocalBusiness">
        <ContactInfo />
      </div>
    );
  }

  return <ContactInfo />;
};

// Business Hours Component
export const BusinessHours: React.FC<{ className?: string }> = ({ className = '' }) => {
  const days = [
    { day: 'Monday', hours: BUSINESS_INFO.businessHours.monday },
    { day: 'Tuesday', hours: BUSINESS_INFO.businessHours.tuesday },
    { day: 'Wednesday', hours: BUSINESS_INFO.businessHours.wednesday },
    { day: 'Thursday', hours: BUSINESS_INFO.businessHours.thursday },
    { day: 'Friday', hours: BUSINESS_INFO.businessHours.friday },
    { day: 'Saturday', hours: BUSINESS_INFO.businessHours.saturday },
    { day: 'Sunday', hours: BUSINESS_INFO.businessHours.sunday }
  ];

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Business Hours</h3>
      </div>
      <div className="space-y-1 text-sm">
        {days.map(({ day, hours }) => (
          <div key={day} className="flex justify-between">
            <span>{day}:</span>
            <span className={hours === 'Emergency Only' ? 'text-orange-600' : ''}>{hours}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-muted-foreground">
        * Emergency services available 24/7
      </div>
    </div>
  );
};

// Service Areas Component
export const ServiceAreas: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
      <h3 className="font-semibold mb-3">Sydney Service Areas</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {BUSINESS_INFO.serviceAreas.map((area) => (
          <div key={area} className="flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-primary" />
            <span>{area}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-muted-foreground">
        Contact us for services in surrounding areas
      </div>
    </div>
  );
};

// Credentials Display
export const BusinessCredentials: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center space-x-2">
        <Shield className="w-5 h-5 text-green-600" />
        <div>
          <div className="font-medium">Licensed & Insured</div>
          <div className="text-sm text-muted-foreground">NSW License: {BUSINESS_INFO.licenseNumber}</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Award className="w-5 h-5 text-blue-600" />
        <div>
          <div className="font-medium">ABN: {BUSINESS_INFO.abn}</div>
          <div className="text-sm text-muted-foreground">Registered Business</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5 text-purple-600" />
        <div>
          <div className="font-medium">Established {BUSINESS_INFO.established}</div>
          <div className="text-sm text-muted-foreground">25+ Years Experience</div>
        </div>
      </div>
    </div>
  );
};

// Quick Contact Bar
export const QuickContactBar: React.FC = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <span>📍 Serving Greater Sydney Area</span>
          <span>📞 {BUSINESS_INFO.phone}</span>
        </div>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <span>✅ Licensed & Insured</span>
          <span>⚡ 24/7 Emergency Service</span>
        </div>
      </div>
    </div>
  );
};