import React, { ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId: string;
}

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export class GlobalErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    const errorId = Math.random().toString(36).substr(2, 9);
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.state.errorId;
    
    // Log error details
    console.error('React Error Boundary caught an error:', {
      error,
      errorInfo,
      errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    // Send to error logging service
    this.logError(error, errorInfo, errorId);

    // Call external error handler
    this.props.onError?.(error, errorInfo);

    this.setState({
      error,
      errorInfo,
      errorId
    });
  }

  private logError = async (error: Error, errorInfo: ErrorInfo, errorId: string) => {
    try {
      // This would typically send to your logging service
      const errorData = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: 'anonymous', // Replace with actual user ID if available
      };

      // Example: Send to logging service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });

      console.log('Error logged:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: ''
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      timestamp: new Date().toISOString()
    };

    const mailto = `mailto:romanspropertyservices@gmail.com?subject=Bug Report - Error ${this.state.errorId}&body=Error ID: ${this.state.errorId}%0A%0APlease describe what you were doing when this error occurred:%0A%0A`;
    window.open(mailto);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-xl">Something went wrong</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                We apologize for the inconvenience. An unexpected error has occurred.
              </p>
              
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm font-mono text-muted-foreground">
                  Error ID: {this.state.errorId}
                </p>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="bg-destructive/5 p-3 rounded-lg">
                  <summary className="cursor-pointer text-sm font-medium text-destructive">
                    Debug Information
                  </summary>
                  <pre className="mt-2 text-xs overflow-auto">
                    {this.state.error.message}
                    {'\n\n'}
                    {this.state.error.stack}
                    {this.state.errorInfo?.componentStack && (
                      '\n\nComponent Stack:' + this.state.errorInfo.componentStack
                    )}
                  </pre>
                </details>
              )}

              <div className="grid grid-cols-2 gap-2">
                <Button 
                  onClick={this.handleRetry} 
                  variant="outline"
                  className="w-full"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button 
                  onClick={this.handleReload} 
                  variant="outline"
                  className="w-full"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </Button>
              </div>

              <Button 
                onClick={this.handleGoHome} 
                className="w-full"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>

              <Button 
                onClick={this.handleReportBug} 
                variant="ghost" 
                size="sm"
                className="w-full"
              >
                <Bug className="w-4 h-4 mr-2" />
                Report Bug
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}