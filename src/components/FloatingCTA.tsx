import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, X, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCallPrompt, setShowCallPrompt] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const promptTimer = setTimeout(() => {
        setShowCallPrompt(true);
      }, 3000); // Show call prompt 3 seconds after CTA appears

      return () => clearTimeout(promptTimer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  // Mobile version - simplified single emergency call button
  if (isMobile) {
    return (
      <motion.div
        className="fixed bottom-20 right-4 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => window.open('tel:0414922276')}
          className="w-14 h-14 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Emergency call"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {showCallPrompt && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="mb-4 max-w-sm"
          >
            <div className="bg-white rounded-xl p-4 shadow-xl border border-secondary/20 relative">
              <button
                onClick={() => setShowCallPrompt(false)}
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Emergency Response Available</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Need urgent building repairs? We're available 24/7 for emergency response.
                  </p>
                  <Button
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      window.open('tel:0414922276');
                      setShowCallPrompt(false);
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: 0414 922 276
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex flex-col gap-3"
      >
        {/* Emergency Call Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            size="lg"
            className="rounded-full w-14 h-14 p-0 shadow-xl hover-glow-strong bg-destructive hover:bg-destructive/90"
            onClick={() => window.open('tel:0414922276')}
          >
            <Phone className="w-6 h-6" />
          </Button>
        </motion.div>

        {/* WhatsApp/SMS Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full w-14 h-14 p-0 shadow-xl hover-glow-strong"
            onClick={() => window.open('sms:0414922276')}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};