import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Star, Heart } from 'lucide-react';

interface GoogleReviewPromptProps {
  rating: number;
  businessName?: string;
  googleReviewUrl?: string;
}

export const GoogleReviewPrompt: React.FC<GoogleReviewPromptProps> = ({ 
  rating, 
  businessName = "Romans Building Services",
  googleReviewUrl = "https://www.google.com/search?q=romans+building+services+reviews#lrd=0x6b12bb0fada7152f:0x1ce36abd4586e82d,3,,,,"
}) => {
  const [hasClicked, setHasClicked] = useState(false);

  const handleReviewClick = () => {
    setHasClicked(true);
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-background">
      <div className="w-full max-w-md mx-auto text-center space-y-6">
        {/* Header with Celebration */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="text-6xl animate-bounce">🙌</div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Awesome! Glad You Loved It
          </h1>
          <p className="text-muted-foreground text-base">
            Would you mind sharing your experience on Google?
          </p>
        </div>

        {/* Star Display */}
        <div className="flex justify-center gap-1 py-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={24}
              className={`${
                star <= rating 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-muted-foreground'
              } transition-all duration-200`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <Card className="card-shadow">
          <CardContent className="p-6 space-y-4">
            <Button
              onClick={handleReviewClick}
              size="lg"
              className="w-full button-shadow"
              disabled={hasClicked}
            >
              {hasClicked ? (
                <>
                  <Heart className="w-5 h-5 mr-2 text-red-500 fill-red-500" />
                  Thank You!
                </>
              ) : (
                <>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Leave a Google Review
                </>
              )}
            </Button>

            {hasClicked && (
              <div className="animate-fade-in">
                <p className="text-sm text-muted-foreground">
                  Opening Google Reviews in a new tab...
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Thank You Message */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <div className="flex justify-center">
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-sm text-muted-foreground">
            Your support helps us grow – thank you!
          </p>
        </div>

        {/* Optional: Return to main site */}
        <div className="pt-4">
          <a
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to {businessName}
          </a>
        </div>
      </div>
    </div>
  );
};