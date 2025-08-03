import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { AssessmentPopup } from '@/components/AssessmentPopup';
import { toast } from 'sonner';

interface ServiceArea {
  id: string;
  name: string;
  suburbs: string[];
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  emergencyService: boolean;
  averageResponseTime: string;
  projectCount: number;
}

interface InteractiveServiceMapProps {
  serviceAreas: ServiceArea[];
  className?: string;
}

export const InteractiveServiceMap: React.FC<InteractiveServiceMapProps> = ({
  serviceAreas,
  className = ""
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(null);
  const [isMapInitialized, setIsMapInitialized] = useState<boolean>(false);
  const [showAssessmentPopup, setShowAssessmentPopup] = useState<boolean>(false);

  // Check if we can get token from Supabase environment
  useEffect(() => {
    // Since this project is connected to Supabase, try to get token from environment
    // In a real implementation, this would be an API call to your Supabase Edge Function
    const checkSupabaseToken = async () => {
      try {
        // This would be replaced with actual Supabase Edge Function call
        // const { data } = await supabase.functions.invoke('get-mapbox-token');
        // if (data?.token) {
        //   setMapboxToken(data.token);
        //   setIsTokenValid(true);
        // }
        
        // For now, check if token is in localStorage (temporary fallback)
        const savedToken = localStorage.getItem('mapbox-token');
        if (savedToken) {
          setMapboxToken(savedToken);
          validateToken(savedToken);
        }
      } catch (error) {
        console.warn('Could not retrieve Mapbox token from Supabase:', error);
      }
    };

    checkSupabaseToken();
  }, []);

  const validateToken = async (token: string) => {
    try {
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/sydney.json?access_token=${token}`);
      if (response.ok) {
        setIsTokenValid(true);
        localStorage.setItem('mapbox-token', token);
        toast.success('Mapbox token validated successfully');
      } else {
        setIsTokenValid(false);
        toast.error('Invalid Mapbox token');
      }
    } catch (error) {
      setIsTokenValid(false);
      toast.error('Failed to validate Mapbox token');
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      validateToken(mapboxToken.trim());
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !isTokenValid || !mapboxToken || isMapInitialized) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [151.2093, -33.8688], // Sydney coordinates
        zoom: 10,
        pitch: 0,
        bearing: 0
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        if (!map.current) return;
        setIsMapInitialized(true);

        // Add service area markers
        serviceAreas.forEach((area) => {
          // Create popup content
          const popupContent = `
            <div class="p-3 min-w-[200px]">
              <h3 class="font-semibold text-lg mb-2">${area.name}</h3>
              <p class="text-sm text-gray-600 mb-2">${area.description}</p>
              <div class="space-y-1 text-xs">
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>${area.projectCount} projects completed</span>
                </div>
                <div class="flex items-center">
                  <span class="w-2 h-2 ${area.emergencyService ? 'bg-red-500' : 'bg-gray-400'} rounded-full mr-2"></span>
                  <span>${area.emergencyService ? '24/7 Emergency' : 'Standard Service'}</span>
                </div>
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Avg. response: ${area.averageResponseTime}</span>
                </div>
              </div>
              <div class="mt-3 pt-2 border-t">
                <p class="text-xs text-gray-500">Coverage: ${area.suburbs.slice(0, 3).join(', ')}${area.suburbs.length > 3 ? '...' : ''}</p>
              </div>
            </div>
          `;

          const popup = new mapboxgl.Popup({
            offset: 25,
            closeButton: true,
            closeOnClick: false,
            maxWidth: '300px'
          }).setHTML(popupContent);

          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = `w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer transition-transform hover:scale-110 ${
            area.emergencyService ? 'bg-red-500' : 'bg-primary'
          }`;
          markerElement.innerHTML = `
            <div class="w-full h-full rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
            </div>
          `;

          const marker = new mapboxgl.Marker(markerElement)
            .setLngLat(area.coordinates)
            .setPopup(popup)
            .addTo(map.current!);

          // Add click handler to marker
          markerElement.addEventListener('click', () => {
            setSelectedArea(area);
          });
        });

        // Add Sydney CBD indicator
        const cbdMarker = document.createElement('div');
        cbdMarker.className = 'w-12 h-12 rounded-full bg-secondary border-4 border-white shadow-lg flex items-center justify-center';
        cbdMarker.innerHTML = `
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.25 9.035 14.394 6.92a1 1 0 000-1.84l-4-2z"/>
            <path d="M3.364 9.047A1 1 0 004.5 8.5v4a1 1 0 001 1h9a1 1 0 001-1v-4a1 1 0 011.136.047l-7 3a1 1 0 00-.788 0l-7-3z"/>
          </svg>
        `;

        new mapboxgl.Marker(cbdMarker)
          .setLngLat([151.2093, -33.8688])
          .setPopup(new mapboxgl.Popup().setHTML(`
            <div class="p-3 text-center">
              <h3 class="font-semibold">Romans Building Services</h3>
              <p class="text-sm text-gray-600">Head Office - Sydney CBD</p>
              <p class="text-xs mt-2">📞 +61 483 981 292</p>
            </div>
          `))
          .addTo(map.current!);
      });

      return () => {
        if (map.current) {
          map.current.remove();
          setIsMapInitialized(false);
        }
      };
    } catch (error) {
      console.error('Failed to initialize map:', error);
      toast.error('Failed to load map. Please check your Mapbox token.');
    }
  }, [isTokenValid, mapboxToken, serviceAreas, isMapInitialized]);

  // Focus on selected area
  useEffect(() => {
    if (map.current && selectedArea) {
      map.current.flyTo({
        center: selectedArea.coordinates,
        zoom: 12,
        duration: 1000
      });
    }
  }, [selectedArea]);

  if (!isTokenValid) {
    return (
      <section className={`py-16 bg-muted/30 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4">Interactive Service Map</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Areas Across Sydney
            </h2>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <span>Mapbox Token Required</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 mb-2">
                  <strong>For Site Administrator:</strong> This project is connected to Supabase. 
                  Please add your Mapbox public token to Supabase Edge Function Secrets for the interactive map to work.
                </p>
                <p className="text-xs text-blue-600">
                  Go to your Supabase dashboard → Edge Functions → Secrets and add MAPBOX_PUBLIC_TOKEN
                </p>
              </div>
              
              <form onSubmit={handleTokenSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="mapbox-token">Temporary Mapbox Public Token</Label>
                  <Input
                    id="mapbox-token"
                    type="text"
                    placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Get your token from{' '}
                    <a 
                      href="https://mapbox.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      mapbox.com
                    </a>
                    {' '}→ Account → Tokens
                  </p>
                </div>
                <Button type="submit" disabled={!mapboxToken.trim()}>
                  Load Interactive Map
                </Button>
              </form>

              {/* Service areas list as fallback */}
              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-4">Our Service Areas:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceAreas.map((area) => (
                    <Card key={area.id} className="p-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-medium">{area.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{area.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {area.projectCount} projects
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {area.averageResponseTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="mb-4">Interactive Service Map</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Service Areas Across Sydney
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click on any area marker to see detailed service information, response times, and coverage areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div 
                ref={mapContainer} 
                className="h-[500px] w-full"
                style={{ minHeight: '500px' }}
              />
            </Card>
          </div>

          {/* Selected Area Details */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    {selectedArea ? selectedArea.name : 'Service Area Details'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedArea ? (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{selectedArea.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium">Projects Completed</span>
                        <Badge variant="secondary">{selectedArea.projectCount}</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium">Response Time</span>
                        <span className="text-sm font-semibold">{selectedArea.averageResponseTime}</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium">Emergency Service</span>
                        <Badge variant={selectedArea.emergencyService ? "default" : "secondary"}>
                          {selectedArea.emergencyService ? "24/7 Available" : "Standard Hours"}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Coverage Areas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedArea.suburbs.map((suburb, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {suburb}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button 
                        onClick={() => setShowAssessmentPopup(true)}
                        className="w-full" 
                        size="lg"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Get Quote for {selectedArea.name}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Click on any area marker on the map to see detailed service information.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">
              {serviceAreas.reduce((acc, area) => acc + area.projectCount, 0)}+
            </div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </Card>
          
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">
              {serviceAreas.length}
            </div>
            <div className="text-sm text-muted-foreground">Service Areas</div>
          </Card>
          
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency Response</div>
          </Card>
          
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </Card>
        </div>
      </div>
      
      {/* Assessment Popup */}
      <AssessmentPopup isOpen={showAssessmentPopup} onClose={() => setShowAssessmentPopup(false)} />
    </section>
  );
};

// Sample service areas data
export const sydneyServiceAreas: ServiceArea[] = [
  {
    id: 'cbd',
    name: 'Sydney CBD',
    suburbs: ['Circular Quay', 'The Rocks', 'Darling Harbour', 'Haymarket', 'Ultimo'],
    coordinates: [151.2093, -33.8688],
    description: 'Premium building services in the heart of Sydney with priority response for commercial properties.',
    emergencyService: true,
    averageResponseTime: '1-2 hours',
    projectCount: 45
  },
  {
    id: 'eastern-suburbs',
    name: 'Eastern Suburbs',
    suburbs: ['Bondi', 'Coogee', 'Double Bay', 'Woollahra', 'Paddington', 'Randwick'],
    coordinates: [151.2497, -33.8986],
    description: 'Specialized heritage and luxury residential building services across the Eastern Suburbs.',
    emergencyService: true,
    averageResponseTime: '2-4 hours',
    projectCount: 38
  },
  {
    id: 'north-shore',
    name: 'North Shore',
    suburbs: ['Chatswood', 'Willoughby', 'Lane Cove', 'Roseville', 'Lindfield'],
    coordinates: [151.1832, -33.7969],
    description: 'Quality building and restoration services for North Shore homes and businesses.',
    emergencyService: true,
    averageResponseTime: '2-4 hours',
    projectCount: 32
  },
  {
    id: 'inner-west',
    name: 'Inner West',
    suburbs: ['Newtown', 'Glebe', 'Balmain', 'Leichhardt', 'Annandale', 'Marrickville'],
    coordinates: [151.1749, -33.8881],
    description: 'Expert heritage restoration and modern building services throughout the Inner West.',
    emergencyService: true,
    averageResponseTime: '1-3 hours',
    projectCount: 41
  },
  {
    id: 'northern-beaches',
    name: 'Northern Beaches',
    suburbs: ['Manly', 'Dee Why', 'Mona Vale', 'Newport', 'Avalon', 'Palm Beach'],
    coordinates: [151.2767, -33.7500],
    description: 'Coastal building solutions with expertise in weather-resistant construction.',
    emergencyService: false,
    averageResponseTime: '4-6 hours',
    projectCount: 22
  },
  {
    id: 'lower-north-shore',
    name: 'Lower North Shore',
    suburbs: ['Mosman', 'Neutral Bay', 'Cremorne', 'Cammeray', 'North Sydney'],
    coordinates: [151.2414, -33.8365],
    description: 'Premium building services for prestigious Lower North Shore properties.',
    emergencyService: true,
    averageResponseTime: '2-3 hours',
    projectCount: 28
  }
];