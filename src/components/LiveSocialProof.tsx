import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Activity {
  id: string;
  type: 'quote' | 'review' | 'booking' | 'completion';
  name: string;
  location: string;
  service: string;
  timeAgo: string;
  rating?: number;
}

export const LiveSocialProof = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();

  const activities: Activity[] = [
    {
      id: '1',
      type: 'quote',
      name: 'Sarah M.',
      location: 'Paddington',
      service: 'Heritage Restoration',
      timeAgo: '2 minutes ago'
    },
    {
      id: '2',
      type: 'review',
      name: 'Michael K.',
      location: 'North Shore',
      service: 'Structural Repairs',
      timeAgo: '5 minutes ago',
      rating: 5
    },
    {
      id: '3',
      type: 'booking',
      name: 'Jennifer L.',
      location: 'Eastern Suburbs',
      service: 'Masonry Work',
      timeAgo: '8 minutes ago'
    },
    {
      id: '4',
      type: 'completion',
      name: 'David R.',
      location: 'Inner West',
      service: 'Waterproofing',
      timeAgo: '12 minutes ago'
    },
    {
      id: '5',
      type: 'quote',
      name: 'Emma T.',
      location: 'Manly',
      service: 'Building Assessment',
      timeAgo: '15 minutes ago'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [activities.length]);

  // Hide on mobile devices - AFTER all hooks are called
  if (isMobile) {
    return null;
  }
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'quote': return '💬';
      case 'review': return '⭐';
      case 'booking': return '📅';
      case 'completion': return '✅';
      default: return '💬';
    }
  };

  const getActivityMessage = (activity: Activity) => {
    switch (activity.type) {
      case 'quote':
        return `${activity.name} requested a quote for ${activity.service}`;
      case 'review':
        return `${activity.name} left a ${activity.rating}-star review`;
      case 'booking':
        return `${activity.name} booked ${activity.service}`;
      case 'completion':
        return `${activity.name}'s ${activity.service} project completed`;
      default:
        return `${activity.name} interacted with our service`;
    }
  };

  const activity = activities[currentActivity];

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40 max-w-sm"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20"
          >
            <div className="flex items-start space-x-3">
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary text-white text-sm">
                    {activity.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                  <span className="text-xs">{getActivityIcon(activity.type)}</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground mb-1">
                  {getActivityMessage(activity)}
                </p>
                
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{activity.location}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{activity.timeAgo}</span>
                  </div>
                </div>

                {activity.rating && (
                  <div className="flex items-center mt-1">
                    {[...Array(activity.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                )}
              </div>

              <Badge variant="secondary" className="text-xs">
                Live
              </Badge>
            </div>

            {activity.type === 'quote' && (
              <motion.div
                className="mt-3 pt-3 border-t border-border/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Want a quote too?</span>
                  <motion.button
                    className="text-xs bg-primary text-white px-3 py-1 rounded-full hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('tel:0414922276')}
                  >
                    <Phone className="w-3 h-3 inline mr-1" />
                    Call Now
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};