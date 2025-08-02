import { useEffect, useState } from 'react';

export const LeadConnectorChat = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadWidget = () => {
      // Check if script is already loaded
      const existingScript = document.querySelector('script[data-widget-id="688bdf6506c967693ee27c64"]');
      if (existingScript && widgetLoaded) {
        console.log('LeadConnector widget already loaded');
        return;
      }

      // Remove any existing script first
      if (existingScript) {
        existingScript.remove();
      }

      // Create and load the LeadConnector chat widget script
      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', '688bdf6506c967693ee27c64');
      script.async = true;

      // Add error handling with retry mechanism
      script.onload = () => {
        console.log('LeadConnector chat widget loaded successfully');
        setWidgetLoaded(true);
        
        // Ensure chat widget has proper z-index
        setTimeout(() => {
          const chatElement = document.querySelector('[data-widget-id="688bdf6506c967693ee27c64"]');
          if (chatElement) {
            (chatElement as HTMLElement).style.zIndex = '9999';
          }
          
          // Look for chat bubble and ensure visibility
          const chatBubble = document.querySelector('.chat-bubble, [class*="chat"], [class*="widget"]');
          if (chatBubble) {
            (chatBubble as HTMLElement).style.zIndex = '9999';
            console.log('Chat widget z-index applied');
          }
        }, 1000);
      };

      script.onerror = () => {
        console.error('Failed to load LeadConnector chat widget, attempt:', retryCount + 1);
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 2000);
        }
      };

      // Append to document head
      document.head.appendChild(script);
    };

    loadWidget();

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[data-widget-id="688bdf6506c967693ee27c64"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [retryCount]);

  // Add global CSS to ensure chat widget visibility
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Ensure chat widget is always visible */
      [data-widget-id="688bdf6506c967693ee27c64"],
      .chat-widget,
      .chat-bubble,
      [class*="leadconnector"],
      [class*="chat"] {
        z-index: 9999 !important;
        position: fixed !important;
      }
      
      /* Ensure chat overlay has proper z-index */
      .chat-overlay,
      [class*="overlay"] {
        z-index: 9998 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};