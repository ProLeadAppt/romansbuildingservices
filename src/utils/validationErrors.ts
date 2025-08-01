import { AppError } from '@/contexts/ErrorProvider';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
  email?: boolean;
  phone?: boolean;
  url?: boolean;
  number?: boolean;
  min?: number;
  max?: number;
}

export interface ValidationSchema {
  [fieldName: string]: ValidationRule;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  firstError?: string;
}

export class ValidationError extends Error {
  constructor(
    public field: string,
    message: string,
    public value?: any
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export const createValidationError = (
  field: string,
  message: string,
  value?: any,
  retry?: () => void
): AppError => ({
  id: Math.random().toString(36).substr(2, 9),
  type: 'validation',
  severity: 'low',
  message: `Validation failed for field: ${field}`,
  userMessage: message,
  details: { field, value },
  timestamp: new Date(),
  retry: retry ? async () => retry() : undefined
});

export const validateField = (
  value: any,
  rule: ValidationRule,
  fieldName: string
): string | null => {
  // Required validation
  if (rule.required && (!value || (typeof value === 'string' && !value.trim()))) {
    return `${fieldName} is required`;
  }

  // Skip other validations if value is empty and not required
  if (!value && !rule.required) {
    return null;
  }

  const stringValue = String(value);

  // Length validations
  if (rule.minLength && stringValue.length < rule.minLength) {
    return `${fieldName} must be at least ${rule.minLength} characters long`;
  }

  if (rule.maxLength && stringValue.length > rule.maxLength) {
    return `${fieldName} must be no more than ${rule.maxLength} characters long`;
  }

  // Email validation
  if (rule.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(stringValue)) {
      return 'Please enter a valid email address';
    }
  }

  // Phone validation (Australian format)
  if (rule.phone) {
    const phoneRegex = /^(\+61|0)[2-9]\d{8}$/;
    const cleanPhone = stringValue.replace(/[\s\-\(\)]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return 'Please enter a valid Australian phone number';
    }
  }

  // URL validation
  if (rule.url) {
    try {
      new URL(stringValue);
    } catch {
      return 'Please enter a valid URL';
    }
  }

  // Number validation
  if (rule.number) {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      return `${fieldName} must be a valid number`;
    }

    if (rule.min !== undefined && numValue < rule.min) {
      return `${fieldName} must be at least ${rule.min}`;
    }

    if (rule.max !== undefined && numValue > rule.max) {
      return `${fieldName} must be no more than ${rule.max}`;
    }
  }

  // Pattern validation
  if (rule.pattern && !rule.pattern.test(stringValue)) {
    return `${fieldName} format is invalid`;
  }

  // Custom validation
  if (rule.custom) {
    const result = rule.custom(value);
    if (result === false) {
      return `${fieldName} is invalid`;
    }
    if (typeof result === 'string') {
      return result;
    }
  }

  return null;
};

export const validateForm = (
  data: Record<string, any>,
  schema: ValidationSchema
): ValidationResult => {
  const errors: Record<string, string> = {};

  for (const [fieldName, rule] of Object.entries(schema)) {
    const error = validateField(data[fieldName], rule, fieldName);
    if (error) {
      errors[fieldName] = error;
    }
  }

  const errorMessages = Object.values(errors);
  return {
    isValid: errorMessages.length === 0,
    errors,
    firstError: errorMessages[0]
  };
};

export const createFormValidationError = (
  validationResult: ValidationResult,
  context?: Record<string, any>
): AppError => {
  const firstField = Object.keys(validationResult.errors)[0];
  const firstError = validationResult.firstError || 'Validation failed';

  return {
    id: Math.random().toString(36).substr(2, 9),
    type: 'validation',
    severity: 'low',
    message: 'Form validation failed',
    userMessage: firstError,
    details: {
      errors: validationResult.errors,
      fieldCount: Object.keys(validationResult.errors).length,
      firstField
    },
    context,
    timestamp: new Date()
  };
};

// Common validation schemas
export const commonSchemas = {
  contact: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s'.-]+$/
    },
    email: {
      required: true,
      email: true,
      maxLength: 254
    },
    phone: {
      required: true,
      phone: true
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000
    }
  },

  quote: {
    name: { required: true, minLength: 2, maxLength: 50 },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    service: { required: true },
    propertyType: { required: true },
    timeline: { required: true },
    budget: { number: true, min: 0 }
  },

  newsletter: {
    email: { required: true, email: true }
  }
};

// Helper function for real-time validation
export const createRealtimeValidator = (
  schema: ValidationSchema,
  onValidation?: (result: ValidationResult) => void
) => {
  return (data: Record<string, any>) => {
    const result = validateForm(data, schema);
    onValidation?.(result);
    return result;
  };
};