import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, AlertCircle, ArrowRight, Home } from 'lucide-react';
import { serviceCategories, serviceAreas } from '@/utils/navigationData';

export default function SearchPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  
  // Generate search results (same logic as QuickSearch component)
  const searchResults = React.useMemo(() => {
    if (!query.trim()) return [];

    const results: any[] = [];
    const queryLower = query.toLowerCase();

    // Search through services
    serviceCategories.forEach(category => {
      category.services.forEach(service => {
        if (
          service.label.toLowerCase().includes(queryLower) ||
          service.description?.toLowerCase().includes(queryLower) ||
          category.label.toLowerCase().includes(queryLower)
        ) {
          results.push({
            id: service.id,
            title: service.label,
            description: service.description || '',
            type: 'service',
            href: service.href,
            category: category.label
          });
        }
      });
    });

    // Search through service areas
    serviceAreas.forEach(area => {
      if (
        area.label.toLowerCase().includes(queryLower) ||
        area.description.toLowerCase().includes(queryLower) ||
        area.suburbs.some(suburb => suburb.toLowerCase().includes(queryLower))
      ) {
        results.push({
          id: area.id,
          title: area.label,
          description: area.description,
          type: 'area',
          href: area.href
        });
      }
    });

    return results;
  }, [query]);

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <span>›</span>
            <span>Search Results</span>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {query ? `Search Results for "${query}"` : 'Search Our Services'}
          </h1>
          
          {query && (
            <p className="text-muted-foreground">
              Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Search Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Refine Search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search again..."
                    defaultValue={query}
                    className="pl-10"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const newQuery = (e.target as HTMLInputElement).value;
                        window.location.href = `/search?q=${encodeURIComponent(newQuery)}`;
                      }
                    }}
                  />
                </div>

                {/* Service Categories */}
                <div>
                  <h4 className="font-medium mb-3">Service Categories</h4>
                  <div className="space-y-2">
                    {serviceCategories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/services#${category.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <h4 className="font-medium mb-3">Service Areas</h4>
                  <div className="space-y-2">
                    {serviceAreas.slice(0, 5).map((area) => (
                      <Link
                        key={area.id}
                        to={area.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {area.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-4 border-t">
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Get Free Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            {searchResults.length > 0 ? (
              <div className="space-y-6">
                {searchResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold">
                              <Link 
                                to={result.href}
                                className="hover:text-primary transition-colors"
                              >
                                {result.title}
                              </Link>
                            </h3>
                            <Badge variant="outline">
                              {result.category || result.type}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {result.description}
                          </p>
                          <Link
                            to={result.href}
                            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : query ? (
              /* No Results */
              <Card>
                <CardContent className="p-12 text-center">
                  <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any results for "{query}". Try searching with different keywords.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Try searching for:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {['masonry', 'restoration', 'structural repairs', 'heritage', 'concrete'].map((suggestion) => (
                          <Badge
                            key={suggestion}
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={() => {
                              window.location.href = `/search?q=${encodeURIComponent(suggestion)}`;
                            }}
                          >
                            {suggestion}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button asChild>
                        <Link to="/contact">
                          Can't Find What You Need? Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* Empty Search State */
              <Card>
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Search Our Services</h3>
                  <p className="text-muted-foreground mb-6">
                    Enter a search term above to find our building services, service areas, or helpful information.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-medium mb-3">Popular Services</h4>
                      <div className="space-y-2">
                        {['Masonry & Brickwork', 'Heritage Restoration', 'Structural Repairs', 'Foundation Repairs'].map((service) => (
                          <div key={service} className="text-sm text-muted-foreground">
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Service Areas</h4>
                      <div className="space-y-2">
                        {['Sydney CBD', 'Eastern Suburbs', 'North Shore', 'Inner West'].map((area) => (
                          <div key={area} className="text-sm text-muted-foreground">
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}