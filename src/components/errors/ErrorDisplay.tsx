import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  Wifi, 
  WifiOff, 
  RefreshCw, 
  X, 
  Clock,
  Shield,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useError } from '@/contexts/ErrorProvider';
import { cn } from '@/lib/utils';

const errorIcons = {
  network: WifiOff,
  api: AlertTriangle,
  validation: AlertCircle,
  runtime: AlertTriangle,
  offline: WifiOff,
  auth: Shield
};

const severityColors = {
  low: 'text-blue-600 bg-blue-50 border-blue-200',
  medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
  high: 'text-orange-600 bg-orange-50 border-orange-200',
  critical: 'text-red-600 bg-red-50 border-red-200'
};

interface ErrorDisplayProps {
  maxVisible?: number;
  showDismissAll?: boolean;
  compact?: boolean;
  position?: 'top' | 'bottom';
  className?: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  maxVisible = 3,
  showDismissAll = true,
  compact = false,
  position = 'top',
  className
}) => {
  const { 
    errors, 
    removeError, 
    retryError, 
    dismissError, 
    clearErrors,
    criticalErrors 
  } = useError();

  const visibleErrors = errors.slice(0, maxVisible);
  const hasMoreErrors = errors.length > maxVisible;

  if (errors.length === 0) {
    return null;
  }

  return (
    <div className={cn(
      "fixed z-50 left-4 right-4 max-w-md mx-auto",
      position === 'top' ? 'top-20' : 'bottom-4',
      className
    )}>
      <AnimatePresence>
        {visibleErrors.map((error) => {
          const Icon = errorIcons[error.type] || AlertTriangle;
          
          return (
            <motion.div
              key={error.id}
              initial={{ opacity: 0, y: position === 'top' ? -50 : 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: position === 'top' ? -50 : 50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mb-2"
            >
              <Card className={cn(
                "border-l-4 shadow-lg",
                severityColors[error.severity]
              )}>
                <CardContent className={cn(
                  "p-4",
                  compact && "p-3"
                )}>
                  <div className="flex items-start space-x-3">
                    <Icon className={cn(
                      "flex-shrink-0 mt-0.5",
                      compact ? "w-4 h-4" : "w-5 h-5",
                      error.severity === 'critical' ? 'text-red-600' :
                      error.severity === 'high' ? 'text-orange-600' :
                      error.severity === 'medium' ? 'text-yellow-600' :
                      'text-blue-600'
                    )} />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "text-xs",
                            compact && "text-xs px-1 py-0"
                          )}
                        >
                          {error.type}
                        </Badge>
                        
                        <div className="flex items-center space-x-1">
                          <span className={cn(
                            "text-xs text-muted-foreground",
                            compact && "text-xs"
                          )}>
                            <Clock className="w-3 h-3 inline mr-1" />
                            {error.timestamp.toLocaleTimeString()}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => dismissError(error.id)}
                            className={cn(
                              "h-6 w-6 p-0 hover:bg-transparent",
                              compact && "h-4 w-4"
                            )}
                            aria-label="Dismiss error"
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <p className={cn(
                        "text-sm font-medium mb-1",
                        compact && "text-xs"
                      )}>
                        {error.userMessage || error.message}
                      </p>
                      
                      {!compact && error.details && (
                        <details className="mt-2">
                          <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                            View details
                          </summary>
                          <pre className="text-xs text-muted-foreground mt-1 overflow-auto max-h-20">
                            {JSON.stringify(error.details, null, 2)}
                          </pre>
                        </details>
                      )}
                      
                      {error.retry && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => retryError(error.id)}
                          className={cn(
                            "mt-2 h-7 text-xs",
                            compact && "h-6 text-xs px-2"
                          )}
                        >
                          <RefreshCw className="w-3 h-3 mr-1" />
                          Retry
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      {(hasMoreErrors || (showDismissAll && errors.length > 1)) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 flex justify-center space-x-2"
        >
          {hasMoreErrors && (
            <Badge variant="secondary" className="text-xs">
              +{errors.length - maxVisible} more errors
            </Badge>
          )}
          
          {showDismissAll && errors.length > 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearErrors}
              className="h-7 text-xs"
            >
              <X className="w-3 h-3 mr-1" />
              Dismiss All
            </Button>
          )}
        </motion.div>
      )}
      
      {/* Critical Error Overlay */}
      {criticalErrors.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <Card className="max-w-md w-full border-red-500 border-2">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Critical Error</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {criticalErrors[0].userMessage || criticalErrors[0].message}
              </p>
              <div className="flex space-x-2">
                {criticalErrors[0].retry && (
                  <Button
                    onClick={() => retryError(criticalErrors[0].id)}
                    className="flex-1"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retry
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={() => removeError(criticalErrors[0].id)}
                  className="flex-1"
                >
                  Dismiss
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};