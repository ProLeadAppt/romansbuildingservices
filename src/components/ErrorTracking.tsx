import React, { useState, useEffect } from 'react';
import { AlertTriangle, X, RefreshCw, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export interface AppError {
  id: string;
  type: 'network' | 'api' | 'client' | 'validation' | 'permission';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  userMessage?: string;
  details?: Record<string, any>;
  timestamp: Date;
  stack?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
  sessionId?: string;
  retry?: () => void;
  resolved?: boolean;
}

interface ErrorTrackingContextType {
  errors: AppError[];
  reportError: (error: Partial<AppError>) => void;
  resolveError: (errorId: string) => void;
  clearErrors: () => void;
  getUnresolvedErrors: () => AppError[];
}

const ErrorTrackingContext = React.createContext<ErrorTrackingContextType | null>(null);

// Error severity colors and icons
const severityConfig = {
  low: { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  medium: { color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
  high: { color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
  critical: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' }
};

// Generate unique session ID
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const sessionId = generateSessionId();

export const ErrorTrackingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [errors, setErrors] = useState<AppError[]>([]);

  // Load persisted errors from localStorage
  useEffect(() => {
    try {
      const persistedErrors = localStorage.getItem('app-errors');
      if (persistedErrors) {
        const parsed = JSON.parse(persistedErrors);
        setErrors(parsed.map((error: any) => ({
          ...error,
          timestamp: new Date(error.timestamp)
        })));
      }
    } catch (error) {
      console.warn('Failed to load persisted errors:', error);
    }
  }, []);

  // Persist errors to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('app-errors', JSON.stringify(errors));
    } catch (error) {
      console.warn('Failed to persist errors:', error);
    }
  }, [errors]);

  const reportError = (errorData: Partial<AppError>) => {
    const error: AppError = {
      id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: 'client',
      severity: 'medium',
      message: 'An error occurred',
      timestamp: new Date(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      sessionId,
      resolved: false,
      ...errorData
    };

    setErrors(prev => [error, ...prev.slice(0, 49)]); // Keep only last 50 errors

    // Log to console for development
    console.error('App Error:', error);

    // Send to external error tracking service if configured
    if (process.env.NODE_ENV === 'production') {
      try {
        // You can integrate with services like Sentry, LogRocket, etc.
        // Example: Sentry.captureException(error);
        
        // For now, we'll just log to a hypothetical error endpoint
        fetch('/api/errors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(error)
        }).catch(console.warn);
      } catch (err) {
        console.warn('Failed to send error to tracking service:', err);
      }
    }

    // Show user-friendly toast for high/critical errors
    if (error.severity === 'high' || error.severity === 'critical') {
      toast.error(error.userMessage || error.message, {
        action: error.retry ? {
          label: 'Retry',
          onClick: error.retry
        } : undefined
      });
    }
  };

  const resolveError = (errorId: string) => {
    setErrors(prev => prev.map(error => 
      error.id === errorId ? { ...error, resolved: true } : error
    ));
  };

  const clearErrors = () => {
    setErrors([]);
    localStorage.removeItem('app-errors');
  };

  const getUnresolvedErrors = () => {
    return errors.filter(error => !error.resolved);
  };

  // Global error handlers
  useEffect(() => {
    const handleUnhandledError = (event: ErrorEvent) => {
      reportError({
        type: 'client',
        severity: 'high',
        message: event.message,
        userMessage: 'An unexpected error occurred. Please refresh the page or try again.',
        details: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        },
        stack: event.error?.stack
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      reportError({
        type: 'client',
        severity: 'medium',
        message: `Unhandled promise rejection: ${event.reason}`,
        userMessage: 'A background operation failed. Some features may not work correctly.',
        details: { reason: event.reason }
      });
    };

    window.addEventListener('error', handleUnhandledError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleUnhandledError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const contextValue: ErrorTrackingContextType = {
    errors,
    reportError,
    resolveError,
    clearErrors,
    getUnresolvedErrors
  };

  return (
    <ErrorTrackingContext.Provider value={contextValue}>
      {children}
      <ErrorDisplay />
    </ErrorTrackingContext.Provider>
  );
};

// Error display component for development/admin use
const ErrorDisplay: React.FC = () => {
  const context = React.useContext(ErrorTrackingContext);
  const [isVisible, setIsVisible] = useState(false);
  const [feedback, setFeedback] = useState('');

  if (!context) return null;

  const { errors, resolveError, clearErrors, getUnresolvedErrors } = context;
  const unresolvedErrors = getUnresolvedErrors();

  // Only show in development or for admin users
  const shouldShow = process.env.NODE_ENV === 'development' || 
    localStorage.getItem('admin-mode') === 'true';

  if (!shouldShow || unresolvedErrors.length === 0) return null;

  const sendFeedback = async (errorId: string) => {
    if (!feedback.trim()) return;
    
    try {
      // Send feedback to your error tracking service
      await fetch('/api/error-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ errorId, feedback, timestamp: new Date() })
      });
      
      toast.success('Feedback sent successfully');
      setFeedback('');
    } catch (error) {
      toast.error('Failed to send feedback');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      {/* Error indicator */}
      {!isVisible && (
        <Button
          onClick={() => setIsVisible(true)}
          className="rounded-full w-12 h-12 p-0 bg-red-500 hover:bg-red-600 animate-pulse"
          title={`${unresolvedErrors.length} unresolved error(s)`}
        >
          <AlertTriangle className="w-5 h-5" />
          <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs">
            {unresolvedErrors.length}
          </Badge>
        </Button>
      )}

      {/* Error panel */}
      {isVisible && (
        <Card className="w-96 max-h-96 overflow-y-auto shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">
              Errors ({unresolvedErrors.length})
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={clearErrors}
                title="Clear all errors"
              >
                <RefreshCw className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsVisible(false)}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {unresolvedErrors.slice(0, 5).map(error => {
              const config = severityConfig[error.severity];
              return (
                <div
                  key={error.id}
                  className={`p-3 rounded-lg border ${config.bg} ${config.border}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className={`w-4 h-4 ${config.color}`} />
                      <Badge variant="outline" className={`text-xs ${config.color}`}>
                        {error.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      {error.retry && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={error.retry}
                          className="h-6 px-2"
                          title="Retry operation"
                        >
                          <RefreshCw className="w-3 h-3" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => resolveError(error.id)}
                        className="h-6 px-2"
                        title="Mark as resolved"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="font-medium">{error.message}</div>
                    {error.userMessage && (
                      <div className="text-muted-foreground">
                        User: {error.userMessage}
                      </div>
                    )}
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{error.timestamp.toLocaleTimeString()}</span>
                    </div>
                  </div>

                  {/* Feedback section */}
                  <div className="mt-2 pt-2 border-t border-current/20">
                    <div className="flex items-center space-x-2">
                      <Textarea
                        placeholder="Add feedback about this error..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="text-xs h-8 resize-none"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => sendFeedback(error.id)}
                        disabled={!feedback.trim()}
                        className="h-8 px-2"
                      >
                        <Send className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {unresolvedErrors.length > 5 && (
              <div className="text-center text-xs text-muted-foreground">
                And {unresolvedErrors.length - 5} more errors...
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Hook to use error tracking
export const useErrorTracking = () => {
  const context = React.useContext(ErrorTrackingContext);
  if (!context) {
    throw new Error('useErrorTracking must be used within ErrorTrackingProvider');
  }
  return context;
};

// Higher-order component for error boundaries
export const withErrorTracking = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithErrorTracking = (props: P) => {
    const { reportError } = useErrorTracking();

    React.useEffect(() => {
      const handleError = (error: Error, errorInfo: any) => {
        reportError({
          type: 'client',
          severity: 'high',
          message: error.message,
          stack: error.stack,
          details: errorInfo
        });
      };

      // This would typically be handled by an Error Boundary component
      // but for demonstration, we'll just log it
      window.addEventListener('error', (event) => {
        handleError(event.error, { componentStack: 'Unknown' });
      });

      return () => {
        window.removeEventListener('error', () => {});
      };
    }, [reportError]);

    return <WrappedComponent {...props} />;
  };

  ComponentWithErrorTracking.displayName = `withErrorTracking(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return ComponentWithErrorTracking;
};