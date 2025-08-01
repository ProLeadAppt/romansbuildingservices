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

    // Set popular services based on current trends
    const popularServices: ServiceOption[] = [
      {
        value: 'assessment',
        label: 'Building Assessment',
        desc: 'Professional inspection',
        popular: true
      },
      {
        value: 'masonry',
        label: 'Brick & Masonry',
        desc: 'Repairs & restoration',
        popular: true
      },
      {
        value: 'waterproofing',
        label: 'Waterproofing',
        desc: 'Leak repairs & prevention',
        popular: true
      },
      {
        value: 'structural',
        label: 'Structural Repairs',
        desc: 'Foundation & support',
        popular: false
      },
      {
        value: 'restoration',
        label: 'Heritage Restoration',
        desc: 'Period building work',
        popular: false
      },
      {
        value: 'emergency',
        label: 'Emergency Repairs',
        desc: 'Urgent safety issues',
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
    
    // Business hours on weekdays - could be urgent
    return 'urgent';
  };

  // Smart service suggestions based on season/weather
  const getSeasonalServices = () => {
    const month = new Date().getMonth(); // 0-11
    
    // Summer (Dec-Feb): Waterproofing high demand
    if (month === 11 || month <= 1) {
      return suggestedServices.filter(s => 
        s.value === 'waterproofing' || s.value === 'assessment'
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