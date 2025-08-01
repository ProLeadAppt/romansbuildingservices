// Service Worker for offline support and error handling
const CACHE_NAME = 'romans-building-v1';
const OFFLINE_URL = '/offline.html';

// Files to cache for offline use
const CACHE_URLS = [
  '/',
  '/offline.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell');
        return cache.addAll(CACHE_URLS);
      })
      .catch(error => {
        console.error('Failed to cache app shell:', error);
      })
  );
  
  // Force activation of new service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all pages
      return self.clients.claim();
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external URLs
  if (request.method !== 'GET' || !url.origin.includes(self.location.origin)) {
    return;
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // If online, cache the page
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseClone))
              .catch(error => console.error('Failed to cache page:', error));
          }
          return response;
        })
        .catch(() => {
          // If offline, try to serve from cache or show offline page
          return caches.match(request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Fallback to offline page
              return caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }

  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful API responses for offline fallback
          if (response.status === 200 && request.method === 'GET') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseClone))
              .catch(error => console.error('Failed to cache API response:', error));
          }
          return response;
        })
        .catch(() => {
          // Try to serve cached API response
          return caches.match(request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              
              // Return a proper error response for failed API calls
              return new Response(
                JSON.stringify({ 
                  error: 'Network unavailable',
                  message: 'Please check your internet connection and try again.',
                  offline: true,
                  timestamp: new Date().toISOString()
                }),
                {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                  }
                }
              );
            });
        })
    );
    return;
  }

  // Handle static assets (CSS, JS, images)
  if (url.pathname.startsWith('/static/') || 
      url.pathname.includes('.css') || 
      url.pathname.includes('.js') ||
      url.pathname.includes('.png') ||
      url.pathname.includes('.jpg') ||
      url.pathname.includes('.svg')) {
    
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then(response => {
              // Cache successful responses
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(request, responseClone))
                  .catch(error => console.error('Failed to cache asset:', error));
              }
              return response;
            })
            .catch(() => {
              // For images, return a placeholder
              if (request.destination === 'image') {
                return new Response(
                  '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Image unavailable</text></svg>',
                  { headers: { 'Content-Type': 'image/svg+xml' } }
                );
              }
              
              // Return network error
              return new Response('Network error', { 
                status: 408, 
                statusText: 'Request Timeout' 
              });
            });
        })
    );
    return;
  }

  // Default: try network first, then cache
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, responseClone))
            .catch(error => console.error('Failed to cache resource:', error));
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'offline-form-sync') {
    event.waitUntil(
      processOfflineRequests()
    );
  }
});

// Process queued offline requests
async function processOfflineRequests() {
  try {
    // Get offline queue from IndexedDB or localStorage
    const queue = await getOfflineQueue();
    
    for (const request of queue) {
      try {
        const response = await fetch(request.url, request.options);
        
        if (response.ok) {
          // Remove from queue on success
          await removeFromQueue(request.id);
          
          // Notify the app about successful sync
          await notifyClients({
            type: 'SYNC_SUCCESS',
            requestId: request.id,
            url: request.url
          });
        }
      } catch (error) {
        console.error('Failed to sync request:', error);
        
        // Notify the app about sync failure
        await notifyClients({
          type: 'SYNC_FAILED',
          requestId: request.id,
          url: request.url,
          error: error.message
        });
      }
    }
  } catch (error) {
    console.error('Error processing offline requests:', error);
  }
}

// Get offline queue (simplified - would use IndexedDB in production)
async function getOfflineQueue() {
  try {
    const data = await self.registration.sync.getTags();
    return data || [];
  } catch {
    return [];
  }
}

// Remove request from queue
async function removeFromQueue(requestId) {
  // Implementation would remove from IndexedDB
  console.log('Removing request from queue:', requestId);
}

// Notify all clients about sync events
async function notifyClients(message) {
  const clients = await self.clients.matchAll({ type: 'window' });
  
  clients.forEach(client => {
    client.postMessage(message);
  });
}

// Error logging
self.addEventListener('error', event => {
  console.error('Service Worker error:', event.error);
  
  // Send error to logging service
  fetch('/api/errors/sw', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'service_worker_error',
      message: event.error?.message || 'Unknown service worker error',
      stack: event.error?.stack,
      timestamp: new Date().toISOString()
    })
  }).catch(() => {
    // Silently fail if error logging fails
  });
});

// Unhandled promise rejections
self.addEventListener('unhandledrejection', event => {
  console.error('Service Worker unhandled promise rejection:', event.reason);
  
  fetch('/api/errors/sw', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'service_worker_promise_rejection',
      message: event.reason?.message || 'Unhandled promise rejection',
      timestamp: new Date().toISOString()
    })
  }).catch(() => {
    // Silently fail if error logging fails
  });
});

console.log('Service Worker loaded successfully');