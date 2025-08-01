import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { toast } from 'sonner';

export interface AppError {
  id: string;
  type: 'network' | 'api' | 'validation' | 'runtime' | 'offline' | 'auth';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  userMessage?: string;
  details?: any;
  timestamp: Date;
  context?: Record<string, any>;
  retry?: () => Promise<void>;
  dismissed?: boolean;
}

interface ErrorContextType {
  errors: AppError[];
  addError: (error: Omit<AppError, 'id' | 'timestamp'>) => void;
  removeError: (id: string) => void;
  clearErrors: () => void;
  retryError: (id: string) => Promise<void>;
  dismissError: (id: string) => void;
  getErrorsByType: (type: AppError['type']) => AppError[];
  hasErrors: boolean;
  criticalErrors: AppError[];
}

const ErrorContext = createContext<ErrorContextType | null>(null);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

interface ErrorProviderProps {
  children: ReactNode;
  onError?: (error: AppError) => void;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children, onError }) => {
  const [errors, setErrors] = useState<AppError[]>([]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addError = useCallback((errorData: Omit<AppError, 'id' | 'timestamp'>) => {
    const error: AppError = {
      ...errorData,
      id: generateId(),
      timestamp: new Date(),
      dismissed: false
    };

    setErrors(prev => [...prev, error]);

    // Log error for monitoring
    console.error('Application Error:', error);

    // Call external error handler if provided
    onError?.(error);

    // Show user-friendly toast notifications based on severity
    const userMessage = error.userMessage || getDefaultUserMessage(error);
    
    switch (error.severity) {
      case 'critical':
        toast.error(userMessage, {
          duration: 0, // Don't auto-dismiss critical errors
          action: error.retry ? {
            label: 'Retry',
            onClick: () => retryError(error.id)
          } : undefined
        });
        break;
      case 'high':
        toast.error(userMessage, {
          duration: 8000,
          action: error.retry ? {
            label: 'Retry',
            onClick: () => retryError(error.id)
          } : undefined
        });
        break;
      case 'medium':
        toast.warning(userMessage, { duration: 5000 });
        break;
      case 'low':
        toast.info(userMessage, { duration: 3000 });
        break;
    }

    return error.id;
  }, [onError]);

  const removeError = useCallback((id: string) => {
    setErrors(prev => prev.filter(error => error.id !== id));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const retryError = useCallback(async (id: string) => {
    const error = errors.find(e => e.id === id);
    if (error?.retry) {
      try {
        await error.retry();
        removeError(id);
        toast.success('Operation completed successfully');
      } catch (retryError) {
        addError({
          type: error.type,
          severity: 'high',
          message: 'Retry failed',
          userMessage: 'The retry attempt failed. Please try again later.',
          details: retryError
        });
      }
    }
  }, [errors, removeError, addError]);

  const dismissError = useCallback((id: string) => {
    setErrors(prev => 
      prev.map(error => 
        error.id === id ? { ...error, dismissed: true } : error
      )
    );
  }, []);

  const getErrorsByType = useCallback((type: AppError['type']) => {
    return errors.filter(error => error.type === type && !error.dismissed);
  }, [errors]);

  const getDefaultUserMessage = (error: AppError): string => {
    switch (error.type) {
      case 'network':
        return 'Network connection issue. Please check your internet connection.';
      case 'api':
        return 'Service temporarily unavailable. Please try again.';
      case 'validation':
        return 'Please check your input and try again.';
      case 'auth':
        return 'Authentication required. Please log in again.';
      case 'offline':
        return 'You are currently offline. Some features may be limited.';
      default:
        return 'Something went wrong. Please try again.';
    }
  };

  const hasErrors = errors.filter(e => !e.dismissed).length > 0;
  const criticalErrors = errors.filter(e => e.severity === 'critical' && !e.dismissed);

  return (
    <ErrorContext.Provider value={{
      errors: errors.filter(e => !e.dismissed),
      addError,
      removeError,
      clearErrors,
      retryError,
      dismissError,
      getErrorsByType,
      hasErrors,
      criticalErrors
    }}>
      {children}
    </ErrorContext.Provider>
  );
};