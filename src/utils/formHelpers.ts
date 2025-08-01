// Form field formatting helpers
export const formatPhoneNumber = (value: string): string => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, '');
  
  // Handle Australian numbers starting with 0 or +61
  if (digits.startsWith('61')) {
    // Format +61 X XXXX XXXX
    return digits.replace(/^61(\d)(\d{4})(\d{4})/, '+61 $1 $2 $3');
  } else if (digits.startsWith('0')) {
    // Format (0X) XXXX XXXX
    return digits.replace(/^0(\d)(\d{4})(\d{4})/, '(0$1) $2 $3');
  }
  
  return value;
};

export const formatName = (value: string): string => {
  return value
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Smart placeholder text based on current context
export const getSmartPlaceholder = (field: string, context?: any): string => {
  const placeholders = {
    phone: {
      default: '(02) 9XXX XXXX',
      mobile: '04XX XXX XXX',
      business: '(02) 9XXX XXXX'
    },
    email: {
      default: 'john@email.com',
      business: 'contact@company.com.au'
    },
    name: {
      default: 'John Smith',
      business: 'Company Name'
    },
    message: {
      default: 'Tell us about your project requirements...',
      assessment: 'Describe any visible cracks, damage, or concerns...',
      emergency: 'Describe the urgent issue and safety concerns...',
      general: 'Tell us about your project requirements...'
    }
  };

  const fieldPlaceholders = placeholders[field as keyof typeof placeholders];
  if (!fieldPlaceholders) return '';

  if (context && typeof fieldPlaceholders === 'object' && 'default' in fieldPlaceholders) {
    return (fieldPlaceholders as any)[context] || fieldPlaceholders.default;
  }

  if (typeof fieldPlaceholders === 'object' && 'default' in fieldPlaceholders) {
    return fieldPlaceholders.default;
  }

  return typeof fieldPlaceholders === 'string' ? fieldPlaceholders : '';
};

// Progressive disclosure helpers
export const shouldShowField = (
  field: string, 
  formData: Record<string, any>, 
  step?: number
): boolean => {
  const fieldDependencies = {
    urgency: () => formData.service !== '',
    message: () => formData.service && formData.service !== 'assessment',
    email: () => formData.phone && formData.name,
    location: () => formData.service === 'emergency'
  };

  const dependency = fieldDependencies[field as keyof typeof fieldDependencies];
  return dependency ? dependency() : true;
};

// Auto-save form data to localStorage
export const saveFormProgress = (formId: string, data: Record<string, any>): void => {
  try {
    localStorage.setItem(`form_${formId}`, JSON.stringify(data));
  } catch (error) {
    console.warn('Could not save form progress:', error);
  }
};

export const loadFormProgress = (formId: string): Record<string, any> | null => {
  try {
    const saved = localStorage.getItem(`form_${formId}`);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Could not load form progress:', error);
    return null;
  }
};

export const clearFormProgress = (formId: string): void => {
  try {
    localStorage.removeItem(`form_${formId}`);
  } catch (error) {
    console.warn('Could not clear form progress:', error);
  }
};

// Form analytics helpers
export const trackFormEvent = (eventName: string, formData: Record<string, any>): void => {
  // Basic form analytics (can be extended with actual analytics service)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      form_fields: Object.keys(formData).length,
      form_completion: calculateCompletionRate(formData),
      custom_map: {
        service_type: formData.service,
        urgency: formData.urgency
      }
    });
  }
};

const calculateCompletionRate = (formData: Record<string, any>): number => {
  const totalFields = Object.keys(formData).length;
  const filledFields = Object.values(formData).filter(value => 
    value !== '' && value !== null && value !== undefined
  ).length;
  
  return Math.round((filledFields / totalFields) * 100);
};

// Input masking helpers
export const createInputMask = (type: 'phone' | 'abn' | 'postcode') => {
  const masks = {
    phone: (value: string) => {
      const digits = value.replace(/\D/g, '');
      if (digits.length <= 10) {
        return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2 $3');
      }
      return value;
    },
    abn: (value: string) => {
      const digits = value.replace(/\D/g, '');
      return digits.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
    },
    postcode: (value: string) => {
      return value.replace(/\D/g, '').slice(0, 4);
    }
  };

  return masks[type];
};

// Smart field ordering based on user behavior
export const getOptimalFieldOrder = (serviceType?: string): string[] => {
  const baseOrder = ['phone', 'name', 'email'];
  
  const serviceSpecificFields = {
    emergency: ['phone', 'name', 'location', 'urgency', 'message'],
    assessment: ['phone', 'name', 'email', 'service', 'message'],
    standard: ['phone', 'name', 'email', 'service', 'urgency', 'message']
  };

  if (serviceType && serviceSpecificFields[serviceType as keyof typeof serviceSpecificFields]) {
    return serviceSpecificFields[serviceType as keyof typeof serviceSpecificFields];
  }

  return serviceSpecificFields.standard;
};