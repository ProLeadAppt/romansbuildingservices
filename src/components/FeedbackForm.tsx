import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ExternalLink, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendFormToZapier } from '@/utils/zapierWebhook';

interface FeedbackFormProps {
  rating: number;
  businessName?: string;
  googleReviewUrl?: string;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ 
  rating, 
  businessName = "Romans Building Services",
  googleReviewUrl = "https://www.google.com/search?q=romans+building+services+reviews"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.feedback.trim()) {
      toast({
        title: "Feedback Required",
        description: "Please share your feedback with us.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send to Zapier webhook
      await sendFormToZapier('feedback', {
        ...formData,
        rating,
        submissionType: 'feedback'
      });
      
      toast({
        title: "Thank You!",
        description: "Your feedback has been submitted. We'll review it and get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', feedback: '' });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-background">
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            We're Sorry to Hear That
          </h1>
          <p className="text-muted-foreground text-base">
            Please share how we can make things right.
          </p>
        </div>

        {/* Feedback Form */}
        <Card className="card-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Your Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Name (Optional)</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Feedback Field */}
              <div className="space-y-2">
                <Label htmlFor="feedback">
                  Feedback <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="feedback"
                  placeholder="Please tell us what went wrong and how we can improve..."
                  value={formData.feedback}
                  onChange={(e) => handleChange('feedback', e.target.value)}
                  rows={4}
                  className="w-full resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.feedback.trim()}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Feedback
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Google Review Compliance Link */}
        <div className="text-center pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">
            Still wish to leave a public review?
          </p>
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};