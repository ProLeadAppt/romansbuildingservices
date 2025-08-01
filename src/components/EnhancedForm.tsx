import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  description?: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ 
  id, 
  label, 
  required = false, 
  error, 
  description, 
  children 
}) => {
  const errorId = error ? `${id}-error` : undefined;
  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1" aria-label="required">*</span>}
      </Label>
      
      <div 
        aria-describedby={[descriptionId, errorId].filter(Boolean).join(' ') || undefined}
        aria-invalid={!!error}
      >
        {children}
      </div>
      
      {description && (
        <p id={descriptionId} className="text-xs text-muted-foreground">
          {description}
        </p>
      )}
      
      {error && (
        <p id={errorId} className="text-xs text-destructive font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

interface AccessibleInputProps extends React.ComponentProps<typeof Input> {
  label: string;
  error?: string;
  description?: string;
}

export const AccessibleInput: React.FC<AccessibleInputProps> = ({
  id,
  label,
  required,
  error,
  description,
  ...props
}) => (
  <FormField id={id!} label={label} required={required} error={error} description={description}>
    <Input
      id={id}
      required={required}
      aria-invalid={!!error}
      className={`focus:ring-2 focus:ring-primary focus:ring-offset-2 ${error ? 'border-destructive' : ''}`}
      {...props}
    />
  </FormField>
);

interface AccessibleTextareaProps extends React.ComponentProps<typeof Textarea> {
  label: string;
  error?: string;
  description?: string;
}

export const AccessibleTextarea: React.FC<AccessibleTextareaProps> = ({
  id,
  label,
  required,
  error,
  description,
  ...props
}) => (
  <FormField id={id!} label={label} required={required} error={error} description={description}>
    <Textarea
      id={id}
      required={required}
      aria-invalid={!!error}
      className={`focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none ${error ? 'border-destructive' : ''}`}
      {...props}
    />
  </FormField>
);

interface AccessibleSelectProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  description?: string;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const AccessibleSelect: React.FC<AccessibleSelectProps> = ({
  id,
  label,
  required,
  error,
  description,
  placeholder,
  value,
  onValueChange,
  disabled,
  children
}) => (
  <FormField id={id} label={label} required={required} error={error} description={description}>
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger 
        id={id}
        aria-invalid={!!error}
        className={`focus:ring-2 focus:ring-primary focus:ring-offset-2 ${error ? 'border-destructive' : ''}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {children}
      </SelectContent>
    </Select>
  </FormField>
);

// Enhanced Button with better accessibility
interface AccessibleButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean;
  loadingText?: string;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  loading = false,
  loadingText = "Loading...",
  disabled,
  className,
  ...props
}) => (
  <Button
    disabled={disabled || loading}
    aria-disabled={disabled || loading}
    className={`focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
    {...props}
  >
    {loading ? (
      <>
        <div 
          className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" 
          aria-hidden="true"
        />
        <span>{loadingText}</span>
        <span className="sr-only">Loading, please wait</span>
      </>
    ) : (
      children
    )}
  </Button>
);

// Form validation helpers
export const validateEmail = (email: string): string | undefined => {
  if (!email) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
  if (!phone) return "Phone number is required";
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
  if (phone.replace(/\D/g, '').length < 10) return "Phone number must be at least 10 digits";
  return undefined;
};

export const validateRequired = (value: string, fieldName: string): string | undefined => {
  if (!value?.trim()) return `${fieldName} is required`;
  return undefined;
};

// Live region for announcing form submission status
export const FormStatusAnnouncer: React.FC<{ message: string }> = ({ message }) => (
  <div 
    aria-live="polite" 
    aria-atomic="true" 
    className="sr-only"
    role="status"
  >
    {message}
  </div>
);