import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useOffline } from '@/hooks/useOffline';

interface NetworkErrorFallbackProps {
  onRetry?: () => void;
  showOfflineOptions?: boolean;
  minimal?: boolean;
}

export const NetworkErrorFallback: React.FC<NetworkErrorFallbackProps> = ({
  onRetry,
  showOfflineOptions = true,
  minimal = false
}) => {
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const { isOnline, offlineQueue, processQueue } = useOffline();

  useEffect(() => {
    if (isOnline && retryCount > 0) {
      handleRetry();
    }
  }, [isOnline]);

  const handleRetry = async () => {
    setIsRetrying(true);
    setRetryCount(prev => prev + 1);

    try {
      if (onRetry) {
        await onRetry();
      }
      
      // Process any queued offline requests
      if (isOnline) {
        await processQueue();
      }
    } catch (error) {
      console.error('Retry failed:', error);
    } finally {
      setIsRetrying(false);
    }
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleOpenSettings = () => {
    // Open device network settings (mobile)
    if (navigator.userAgent.includes('Mobile')) {
      window.open('intent://settings/wifi#Intent;package=com.android.settings;end');
    }
  };

  if (minimal) {
    return (
      <div className="flex items-center justify-center p-8 text-center">
        <div className="space-y-4">
          <WifiOff className="w-12 h-12 text-muted-foreground mx-auto" />
          <div>
            <h3 className="font-semibold">Connection Lost</h3>
            <p className="text-sm text-muted-foreground">
              Please check your internet connection
            </p>
          </div>
          <Button 
            onClick={handleRetry} 
            disabled={isRetrying}
            size="sm"
          >
            {isRetrying ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 mr-2" />
            )}
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <WifiOff className="w-8 h-8 text-muted-foreground" />
            </div>
            <CardTitle>No Internet Connection</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">
                It looks like you're not connected to the internet. Please check your connection and try again.
              </p>
              
              {retryCount > 0 && (
                <p className="text-sm text-muted-foreground">
                  Retry attempts: {retryCount}
                </p>
              )}
            </div>

            {/* Connection Status */}
            <div className="flex items-center justify-center space-x-2 p-3 bg-muted rounded-lg">
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm font-medium">
                {isOnline ? 'Connected' : 'Offline'}
              </span>
            </div>

            {/* Offline Queue Status */}
            {showOfflineOptions && offlineQueue.length > 0 && (
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>{offlineQueue.length}</strong> action{offlineQueue.length > 1 ? 's' : ''} queued for when you're back online
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button 
                onClick={handleRetry} 
                disabled={isRetrying}
                className="w-full"
              >
                {isRetrying ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Checking Connection...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </>
                )}
              </Button>

              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  onClick={handleGoHome}
                  className="w-full"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
                
                {showOfflineOptions && (
                  <Button 
                    variant="outline" 
                    onClick={handleOpenSettings}
                    className="w-full"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                )}
              </div>
            </div>

            {/* Troubleshooting Tips */}
            <details className="text-sm">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                Troubleshooting tips
              </summary>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>• Check your WiFi or mobile data connection</p>
                <p>• Try refreshing the page</p>
                <p>• Restart your router or modem</p>
                <p>• Contact your internet service provider</p>
              </div>
            </details>

            {/* Offline Mode Notice */}
            {showOfflineOptions && (
              <div className="text-xs text-muted-foreground text-center">
                Don't worry - your actions are being saved locally and will sync when you're back online.
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};