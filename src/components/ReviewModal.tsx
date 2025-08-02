import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Star, Heart, ExternalLink } from 'lucide-react';
import { AccessibleStarRating, useFocusTrap } from './AccessibilityEnhancements';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const focusTrapRef = useFocusTrap(isOpen);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    
    // Redirect based on rating
    setTimeout(() => {
      if (rating >= 4) {
        // High rating - redirect to Google Reviews
        window.open('https://g.page/r/your-business-id/review', '_blank');
      } else {
        // Lower rating - redirect to feedback form
        window.open('/review', '_blank');
      }
      onClose();
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="sm:max-w-md"
        ref={focusTrapRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
      >
        <DialogHeader>
          <DialogTitle id="review-modal-title" className="text-center text-2xl font-bold">
            Rate Your Experience
          </DialogTitle>
          <DialogDescription className="text-center">
            Help us improve our services by rating your experience with Romans Building Services
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              How was your experience with Romans Building Services?
            </p>
            
            <div className="mb-6">
              <AccessibleStarRating
                rating={selectedRating}
                onRatingChange={handleStarClick}
                size="lg"
                label="Rate your experience with Romans Building Services"
              />
            </div>

            <AnimatePresence>
              {selectedRating > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 mb-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Heart className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedRating >= 4 
                      ? "Thank you! Redirecting to Google Reviews..."
                      : "Thank you! Redirecting to feedback form..."
                    }
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center space-x-3">
            <Button variant="outline" onClick={onClose}>
              Maybe Later
            </Button>
            <Button 
              onClick={() => window.open('https://g.page/r/your-business-id/review', '_blank')}
              className="bg-primary hover:bg-primary/90"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Google Reviews
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};