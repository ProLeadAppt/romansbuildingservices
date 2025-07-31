import React, { useState } from 'react';
import { StarRating } from '@/components/StarRating';
import { FeedbackForm } from '@/components/FeedbackForm';
import { GoogleReviewPrompt } from '@/components/GoogleReviewPrompt';

type FunnelStep = 'rating' | 'feedback' | 'google-review';

export const ReviewFunnel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FunnelStep>('rating');
  const [userRating, setUserRating] = useState<number>(0);

  const handleRatingSelect = (rating: number) => {
    setUserRating(rating);
    
    // Route based on rating
    if (rating <= 3) {
      setCurrentStep('feedback');
    } else {
      setCurrentStep('google-review');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'rating':
        return <StarRating onRatingSelect={handleRatingSelect} />;
      
      case 'feedback':
        return <FeedbackForm rating={userRating} />;
      
      case 'google-review':
        return <GoogleReviewPrompt rating={userRating} />;
      
      default:
        return <StarRating onRatingSelect={handleRatingSelect} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderStep()}
    </div>
  );
};

export default ReviewFunnel;