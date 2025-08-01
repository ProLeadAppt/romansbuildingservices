import { useState, useEffect, useCallback } from 'react';
import { useError } from '@/contexts/ErrorProvider';
import { toast } from 'sonner';

interface OfflineState {
  isOnline: boolean;
  isOfflineReady: boolean;
  offlineQueue: Array<{
    id: string;
    url: string;
    options: RequestInit;
    timestamp: Date;
    retryCount: number;
  }>;
}

interface UseOfflineReturn extends OfflineState {
  queueRequest: (url: string, options?: RequestInit) => string;
  processQueue: () => Promise<void>;
  removeFromQueue: (id: string) => void;
  clearQueue: () => void;
  installOfflineSupport: () => Promise<void>;
}

export const useOffline = (): UseOfflineReturn => {
  const [state, setState] = useState<OfflineState>({
    isOnline: navigator.onLine,
    isOfflineReady: false,
    offlineQueue: []
  });

  const { addError } = useError();

  // Handle online/offline events
  useEffect(() => {
    const handleOnline = () => {
      setState(prev => ({ ...prev, isOnline: true }));
      toast.success('Connection restored', {
        description: 'Processing queued requests...'
      });
      processQueue();
    };

    const handleOffline = () => {
      setState(prev => ({ ...prev, isOnline: false }));
      addError({
        type: 'offline',
        severity: 'medium',
        message: 'Network connection lost',
        userMessage: 'You are now offline. Changes will be saved locally and synced when connection is restored.',
        context: { timestamp: new Date() }
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [addError]);

  // Load offline queue from localStorage
  useEffect(() => {
    try {
      const savedQueue = localStorage.getItem('offline-queue');
      if (savedQueue) {
        const queue = JSON.parse(savedQueue).map((item: any) => ({
          ...item,
          timestamp: new Date(item.timestamp)
        }));
        setState(prev => ({ ...prev, offlineQueue: queue }));
      }
    } catch (error) {
      console.error('Failed to load offline queue:', error);
    }
  }, []);

  // Save offline queue to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('offline-queue', JSON.stringify(state.offlineQueue));
    } catch (error) {
      console.error('Failed to save offline queue:', error);
    }
  }, [state.offlineQueue]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const queueRequest = useCallback((url: string, options: RequestInit = {}): string => {
    const id = generateId();
    const queueItem = {
      id,
      url,
      options,
      timestamp: new Date(),
      retryCount: 0
    };

    setState(prev => ({
      ...prev,
      offlineQueue: [...prev.offlineQueue, queueItem]
    }));

    toast.info('Request queued for when online', {
      description: 'Your action will be processed when connection is restored.'
    });

    return id;
  }, []);

  const processQueue = useCallback(async () => {
    if (!state.isOnline || state.offlineQueue.length === 0) {
      return;
    }

    const processedIds: string[] = [];
    const failedRequests: typeof state.offlineQueue = [];

    for (const item of state.offlineQueue) {
      try {
        const response = await fetch(item.url, item.options);
        
        if (response.ok) {
          processedIds.push(item.id);
          toast.success(`Synced: ${item.options.method || 'GET'} ${item.url}`, {
            description: 'Offline action completed successfully'
          });
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        const retryCount = item.retryCount + 1;
        const maxRetries = 3;

        if (retryCount < maxRetries) {
          failedRequests.push({
            ...item,
            retryCount
          });
        } else {
          processedIds.push(item.id);
          addError({
            type: 'network',
            severity: 'high',
            message: `Failed to sync offline request after ${maxRetries} attempts`,
            userMessage: 'Some offline changes could not be synced. Please try the action again.',
            details: { url: item.url, error },
            context: { offlineRequest: true }
          });
        }
      }
    }

    setState(prev => ({
      ...prev,
      offlineQueue: prev.offlineQueue
        .filter(item => !processedIds.includes(item.id))
        .concat(failedRequests)
    }));
  }, [state.isOnline, state.offlineQueue, addError]);

  const removeFromQueue = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      offlineQueue: prev.offlineQueue.filter(item => item.id !== id)
    }));
  }, []);

  const clearQueue = useCallback(() => {
    setState(prev => ({ ...prev, offlineQueue: [] }));
    localStorage.removeItem('offline-queue');
  }, []);

  const installOfflineSupport = useCallback(async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
        
        setState(prev => ({ ...prev, isOfflineReady: true }));
        
        toast.success('Offline support enabled', {
          description: 'You can now use the app even without internet connection.'
        });
      }
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      addError({
        type: 'runtime',
        severity: 'low',
        message: 'Failed to enable offline support',
        userMessage: 'Offline features are not available in your browser.',
        details: error
      });
    }
  }, [addError]);

  return {
    ...state,
    queueRequest,
    processQueue,
    removeFromQueue,
    clearQueue,
    installOfflineSupport
  };
};