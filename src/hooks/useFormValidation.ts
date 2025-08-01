import { useState, useCallback } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const rules: ValidationRules = {
    phone: {
      required: true,
      pattern: /^(\+61|0)[2-9]\d{8}$/,
      custom: (value: string) => {
        if (!value) return 'Phone number is required';
        if (!/^(\+61|0)[2-9]\d{8}$/.test(value.replace(/\s/g, ''))) {
          return 'Please enter a valid Australian phone number';
        }
        return null;
      }
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      custom: (value: string) => {
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        return null;
      }
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      custom: (value: string) => {
        if (!value) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        if (value.length > 50) return 'Name must be less than 50 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(value)) {
          return 'Name can only contain letters, spaces, hyphens and apostrophes';
        }
        return null;
      }
    },
    message: {
      maxLength: 500,
      custom: (value: string) => {
        if (value && value.length > 500) {
          return 'Message must be less than 500 characters';
        }
        return null;
      }
    }
  };

  const validateField = useCallback((fieldName: string, value: string) => {
    const rule = rules[fieldName];
    if (!rule) return null;

    const error = rule.custom ? rule.custom(value) : null;
    
    setErrors(prev => ({
      ...prev,
      [fieldName]: error || ''
    }));

    return error;
  }, []);

  const validateForm = useCallback((formData: Record<string, string>) => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(formData).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return { isValid, errors: newErrors };
  }, [validateField]);

  const getFieldError = useCallback((fieldName: string) => {
    return errors[fieldName] || '';
  }, [errors]);

  const isFieldValid = useCallback((fieldName: string, value: string) => {
    const rule = rules[fieldName];
    if (!rule) return true;
    
    if (rule.custom) {
      return rule.custom(value) === null;
    }
    
    if (rule.required && !value) return false;
    if (rule.pattern && !rule.pattern.test(value)) return false;
    if (rule.minLength && value.length < rule.minLength) return false;
    if (rule.maxLength && value.length > rule.maxLength) return false;
    
    return true;
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const clearFieldError = useCallback((fieldName: string) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: ''
    }));
  }, []);

  return {
    errors,
    validateField,
    validateForm,
    getFieldError,
    isFieldValid,
    clearErrors,
    clearFieldError
  };
};