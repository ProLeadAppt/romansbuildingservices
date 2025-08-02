import { useEffect } from 'react';

export const LeadConnectorChat = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[data-widget-id="688bdf6506c967693ee27c64"]')) {
      return;
    }

    // Create and load the LeadConnector chat widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '688bdf6506c967693ee27c64');
    script.async = true;

    // Add error handling
    script.onload = () => {
      console.log('LeadConnector chat widget loaded successfully');
    };

    script.onerror = () => {
      console.error('Failed to load LeadConnector chat widget');
    };

    // Append to document head
    document.head.appendChild(script);

    // Cleanup function to remove script if component unmounts
    return () => {
      const existingScript = document.querySelector('script[data-widget-id="688bdf6506c967693ee27c64"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};