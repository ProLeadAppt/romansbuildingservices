import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { popularSearches, serviceCategories, serviceAreas } from '@/utils/navigationData';
import { Link } from 'react-router-dom';

interface QuickSearchProps {
  className?: string;
  placeholder?: string;
  onResultClick?: () => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({
  className = '',
  placeholder = 'Search services, areas, or information...',
  onResultClick
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('recentSearches');
    if (stored) {
      setRecentSearches(JSON.parse(stored).slice(0, 5));
    }
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search logic
  const searchResults = React.useMemo(() => {
    if (!query.trim()) return null;

    const searchTerm = query.toLowerCase().trim();
    const results: Array<{
      type: 'service' | 'area' | 'category';
      id: string;
      title: string;
      description: string;
      href: string;
      category?: string;
    }> = [];

    // Search services
    serviceCategories.forEach(category => {
      category.services.forEach(service => {
        if (
          service.label.toLowerCase().includes(searchTerm) ||
          service.description?.toLowerCase().includes(searchTerm)
        ) {
          results.push({
            type: 'service',
            id: service.id,
            title: service.label,
            description: service.description || '',
            href: service.href,
            category: category.label
          });
        }
      });
    });

    // Search service areas
    serviceAreas.forEach(area => {
      const matchesName = area.label.toLowerCase().includes(searchTerm);
      const matchesSuburb = area.suburbs.some(suburb => 
        suburb.toLowerCase().includes(searchTerm)
      );
      
      if (matchesName || matchesSuburb) {
        results.push({
          type: 'area',
          id: area.id,
          title: area.label,
          description: area.description,
          href: area.href
        });
      }
    });

    // Search categories
    serviceCategories.forEach(category => {
      if (
        category.label.toLowerCase().includes(searchTerm) ||
        category.description.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          type: 'category',
          id: category.id,
          title: category.label,
          description: category.description,
          href: `/services#${category.id}`
        });
      }
    });

    return results.slice(0, 8); // Limit results
  }, [query]);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    // Add to recent searches
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    // Clear and close
    setQuery('');
    setIsOpen(false);
    onResultClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      handleSearch(query);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-10 h-10"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results/Suggestions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border z-50 max-h-96 overflow-y-auto"
          >
            {/* Search Results */}
            {searchResults && searchResults.length > 0 && (
              <div className="p-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Search Results</h4>
                <div className="space-y-2">
                  {searchResults.map((result) => (
                    <Link
                      key={`${result.type}-${result.id}`}
                      to={result.href}
                      className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      onClick={() => handleSearch(query)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm group-hover:text-primary">
                              {result.title}
                            </span>
                            {result.category && (
                              <Badge variant="outline" className="text-xs">
                                {result.category}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {result.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {searchResults && searchResults.length === 0 && query && (
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  No results found for "{query}"
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2"
                  onClick={() => window.open(`tel:0414922276`)}
                >
                  Call for assistance
                </Button>
              </div>
            )}

            {/* Popular/Recent Searches */}
            {!query && (
              <div className="p-4 space-y-4">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <h4 className="text-sm font-semibold text-muted-foreground">Recent</h4>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setQuery(search);
                            handleSearch(search);
                          }}
                          className="block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <h4 className="text-sm font-semibold text-muted-foreground">Popular</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.slice(0, 6).map((search, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(search);
                          handleSearch(search);
                        }}
                        className="px-3 py-1 text-xs bg-muted rounded-full hover:bg-muted-foreground/20 transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};