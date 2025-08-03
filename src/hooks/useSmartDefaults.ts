import { useState, useEffect } from 'react';

interface ServiceOption {
  value: string;
  label: string;
  desc: string;
  popular?: boolean;
}

export const useSmartDefaults = () => {
  const [location, setLocation] = useState<string>('');
  const [suggestedServices, setSuggestedServices] = useState<ServiceOption[]>([]);
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  // Detect user location and time
  useEffect(() => {
    // Get time of day for urgency defaults
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('morning');
    else if (hour < 18) setTimeOfDay('afternoon');
    else setTimeOfDay('evening');

    // Try to get approximate location from timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === 'Australia/Sydney') {
      setLocation('Sydney');
    }

    // Set comprehensive services based on current trends
    const popularServices: ServiceOption[] = [
      {
        value: 'assessment',
        label: 'Building Assessment',
        desc: 'Professional inspection & quote',
        popular: true
      },
      {
        value: 'masonry',
        label: 'Masonry & Brickwork',
        desc: 'Expert brick & stone work',
        popular: true
      },
      {
        value: 'heritage',
        label: 'Heritage Restoration',
        desc: 'Period building conservation',
        popular: true
      },
      {
        value: 'structural',
        label: 'Structural Repairs',
        desc: 'Foundation & load bearing',
        popular: false
      },
      {
        value: 'building-restoration',
        label: 'Building Restoration', 
        desc: 'Complete building renewal',
        popular: false
      },
      {
        value: 'concrete-repairs',
        label: 'Concrete Repairs',
        desc: 'Concrete cancer treatment',
        popular: false
      },
      {
        value: 'foundation-repairs',
        label: 'Foundation Repairs',
        desc: 'Underpinning & stabilization',
        popular: false
      },
      {
        value: 'remedial-building',
        label: 'Remedial Building',
        desc: 'Complex defect solutions',
        popular: false
      },
      {
        value: 'repointing',
        label: 'Repointing & Tuckpointing',
        desc: 'Mortar joint restoration',
        popular: false
      },
      {
        value: 'stone-restoration',
        label: 'Stone Restoration',
        desc: 'Sandstone & natural stone',
        popular: false
      },
      {
        value: 'retaining-walls',
        label: 'Retaining Walls',
        desc: 'New construction & repairs',
        popular: false
      },
      {
        value: 'consultation',
        label: 'Professional Consultation',
        desc: 'Expert advice & planning',
        popular: false
      }
    ];

    setSuggestedServices(popularServices);
  }, []);

  // Smart urgency default based on time and day
  const getDefaultUrgency = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();

    // Weekend or after hours - likely less urgent
    if (dayOfWeek === 0 || dayOfWeek === 6 || hour < 7 || hour > 18) {
      return 'standard';
    }
    
    // Business hours on weekdays - standard response
    return 'standard';
  };

  // Smart service suggestions based on season/weather
  const getSeasonalServices = () => {
    const month = new Date().getMonth(); // 0-11
    
    // Summer (Dec-Feb): Heritage and restoration high demand
    if (month === 11 || month <= 1) {
      return suggestedServices.filter(s => 
        s.value === 'heritage' || s.value === 'assessment'
      );
    }
    
    // Winter (Jun-Aug): Structural repairs more common
    if (month >= 5 && month <= 7) {
      return suggestedServices.filter(s => 
        s.value === 'structural' || s.value === 'restoration'
      );
    }
    
    // Default to popular services
    return suggestedServices.filter(s => s.popular);
  };

  // Auto-complete suggestions for common Sydney areas
  const getSydneyAreas = () => [
    'Sydney CBD',
    'North Sydney', 
    'Eastern Suburbs',
    'Inner West',
    'Northern Beaches',
    'Hills District',
    'Western Sydney',
    'South Sydney',
    'Parramatta',
    'Bondi',
    'Manly',
    'Chatswood',
    'Hornsby',
    'Blacktown',
    'Sutherland'
  ];

  return {
    location,
    suggestedServices: getSeasonalServices(),
    allServices: suggestedServices,
    defaultUrgency: getDefaultUrgency(),
    timeOfDay,
    sydneyAreas: getSydneyAreas()
  };
};