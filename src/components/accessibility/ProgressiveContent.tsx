import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ContentItem {
  id: string;
  title: string;
  content: React.ReactNode;
  priority: 'high' | 'medium' | 'low';
  loadImmediately?: boolean;
}

interface ProgressiveContentProps {
  items: ContentItem[];
  className?: string;
  loadingText?: string;
  errorText?: string;
  onLoadMore?: () => Promise<ContentItem[]>;
  hasMore?: boolean;
  initialLoadCount?: number;
  loadIncrement?: number;
  enableVirtualization?: boolean;
}

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
}

export const ProgressiveContent: React.FC<ProgressiveContentProps> = ({
  items,
  className,
  loadingText = "Loading more content...",
  errorText = "Failed to load content. Please try again.",
  onLoadMore,
  hasMore = false,
  initialLoadCount = 5,
  loadIncrement = 5,
  enableVirtualization = false
}) => {
  const [loadedItems, setLoadedItems] = useState<ContentItem[]>([]);
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Initialize with priority-sorted items
  useEffect(() => {
    const prioritySorted = [...items].sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    setLoadedItems(prioritySorted);
  }, [items]);

  // Intersection Observer for virtual scrolling and lazy loading
  useEffect(() => {
    if (!enableVirtualization) return;

    observerRef.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const itemId = entry.target.getAttribute('data-item-id');
          if (itemId) {
            setVisibleItems(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(itemId);
              } else {
                newSet.delete(itemId);
              }
              return newSet;
            });
          }
        });
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.1
      }
    );

    // Observe all item elements
    itemRefs.current.forEach((element) => {
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enableVirtualization, loadedItems]);

  // Load more content with pagination
  const handleLoadMore = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      if (onLoadMore && hasMore) {
        // Load from external source
        const newItems = await onLoadMore();
        setLoadedItems(prev => [...prev, ...newItems]);
      } else {
        // Load more from current items
        setVisibleCount(prev => Math.min(prev + loadIncrement, loadedItems.length));
      }
    } catch (err) {
      setError(typeof err === 'string' ? err : errorText);
    } finally {
      setLoading(false);
    }
  }, [loading, onLoadMore, hasMore, loadIncrement, loadedItems.length, errorText]);

  // Intersection observer for auto-loading
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && (visibleCount < loadedItems.length || hasMore)) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [handleLoadMore, loading, visibleCount, loadedItems.length, hasMore]);

  // Toggle item expansion
  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });

    // Announce state change to screen readers
    const isExpanding = !expandedItems.has(itemId);
    const item = loadedItems.find(item => item.id === itemId);
    const announcement = `${item?.title} ${isExpanding ? 'expanded' : 'collapsed'}`;
    
    // Create announcement for screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.className = 'sr-only';
    announcer.textContent = announcement;
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  };

  // Skip to specific content
  const skipToItem = (itemId: string) => {
    const element = itemRefs.current.get(itemId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      element.focus({ preventScroll: true });
    }
  };

  const currentItems = loadedItems.slice(0, visibleCount);
  const hasMoreToShow = visibleCount < loadedItems.length || hasMore;

  return (
    <div className={cn("space-y-4", className)} ref={contentRef}>
      {/* Skip navigation for screen readers */}
      <div className="sr-only">
        <nav aria-label="Content sections">
          <ul>
            {currentItems.map((item, index) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => skipToItem(item.id)}
                  className="text-sm"
                >
                  Skip to {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content Items */}
      <div className="space-y-4">
        {currentItems.map((item, index) => {
          const isExpanded = expandedItems.has(item.id);
          const isVisible = !enableVirtualization || visibleItems.has(item.id);
          
          return (
            <motion.div
              key={item.id}
              ref={(el) => {
                if (el) {
                  itemRefs.current.set(item.id, el);
                }
              }}
              data-item-id={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="focus-within:outline-2 focus-within:outline-primary rounded-lg"
            >
              <Card>
                <CardContent className="p-0">
                  {/* Item Header */}
                  <Button
                    variant="ghost"
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full justify-between p-4 text-left h-auto"
                    aria-expanded={isExpanded}
                    aria-controls={`content-${item.id}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        item.priority === 'high' && "bg-red-500",
                        item.priority === 'medium' && "bg-yellow-500",
                        item.priority === 'low' && "bg-green-500"
                      )} />
                      <h3 className="font-semibold text-left">{item.title}</h3>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform flex-shrink-0",
                      isExpanded && "rotate-180"
                    )} />
                  </Button>

                  {/* Item Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={`content-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 border-t">
                          {isVisible ? (
                            item.content
                          ) : (
                            <div className="flex items-center justify-center py-8 text-muted-foreground">
                              <Loader2 className="w-5 h-5 animate-spin mr-2" />
                              Loading content...
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Load More Section */}
      {hasMoreToShow && (
        <div ref={loadMoreRef} className="flex flex-col items-center space-y-4 py-8">
          {loading ? (
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{loadingText}</span>
            </div>
          ) : error ? (
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2 text-destructive">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
              <Button
                variant="outline"
                onClick={handleLoadMore}
                className="text-destructive border-destructive hover:bg-destructive/5"
              >
                Try Again
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              onClick={handleLoadMore}
              className="min-w-[200px]"
              disabled={loading}
            >
              Load More Content
            </Button>
          )}
        </div>
      )}

      {/* Completion Message */}
      {!hasMoreToShow && currentItems.length > 0 && (
        <div className="flex items-center justify-center space-x-2 py-8 text-muted-foreground">
          <CheckCircle2 className="w-5 h-5" />
          <span>All content loaded</span>
        </div>
      )}

      {/* Screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {loading && `Loading more content. Please wait.`}
        {error && `Error: ${error}`}
        {!hasMoreToShow && `All ${currentItems.length} items loaded.`}
      </div>
    </div>
  );
};