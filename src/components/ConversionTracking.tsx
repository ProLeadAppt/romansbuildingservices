import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { 
  TrendingUp, Users, MousePointer, Phone, Mail, 
  Calendar, Clock, Eye, Target, ArrowUpRight
} from 'lucide-react';

interface ConversionMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  change: number;
  period: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface ConversionEvent {
  id: string;
  type: 'form_submit' | 'phone_call' | 'email_sent' | 'quote_request';
  formType?: string;
  timestamp: Date;
  source: string;
  conversionValue: number;
  userAgent: string;
  location?: string;
}

interface ConversionTrackingProps {
  className?: string;
}

export const ConversionTracking: React.FC<ConversionTrackingProps> = ({
  className = ""
}) => {
  const [metrics, setMetrics] = useState<ConversionMetric[]>([]);
  const [events, setEvents] = useState<ConversionEvent[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<'24h' | '7d' | '30d'>('7d');
  const [isTracking, setIsTracking] = useState(true);

  // Sample metrics data
  useEffect(() => {
    const sampleMetrics: ConversionMetric[] = [
      {
        id: 'visitors',
        name: 'Weekly Visitors',
        value: 2847,
        target: 3000,
        change: 12.5,
        period: 'vs last week',
        icon: Users,
        color: 'text-blue-600'
      },
      {
        id: 'conversions',
        name: 'Form Conversions',
        value: 89,
        target: 100,
        change: 8.2,
        period: 'vs last week',
        icon: Target,
        color: 'text-green-600'
      },
      {
        id: 'phone_calls',
        name: 'Phone Inquiries',
        value: 34,
        target: 40,
        change: -2.1,
        period: 'vs last week',
        icon: Phone,
        color: 'text-orange-600'
      },
      {
        id: 'quote_requests',
        name: 'Quote Requests',
        value: 67,
        target: 70,
        change: 15.3,
        period: 'vs last week',
        icon: Calendar,
        color: 'text-purple-600'
      }
    ];

    setMetrics(sampleMetrics);
  }, [selectedPeriod]);

  // Sample events data
  useEffect(() => {
    const generateSampleEvents = (): ConversionEvent[] => {
      const eventTypes: ConversionEvent['type'][] = ['form_submit', 'phone_call', 'email_sent', 'quote_request'];
      const sources = ['Google Search', 'Direct', 'Facebook', 'Referral', 'Email Campaign'];
      const formTypes = ['hero_contact', 'assessment_popup', 'feedback', 'lead_capture'];
      
      return Array.from({ length: 50 }, (_, i) => ({
        id: `event-${i}`,
        type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
        formType: Math.random() > 0.3 ? formTypes[Math.floor(Math.random() * formTypes.length)] : undefined,
        timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
        source: sources[Math.floor(Math.random() * sources.length)],
        conversionValue: Math.floor(Math.random() * 1000) + 100,
        userAgent: 'Sample Browser',
        location: Math.random() > 0.5 ? 'Sydney, NSW' : undefined
      }));
    };

    setEvents(generateSampleEvents());
  }, [selectedPeriod]);

  // Analytics data for charts
  const conversionsByDay = events
    .filter(e => e.timestamp > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
    .reduce((acc, event) => {
      const day = event.timestamp.toLocaleDateString();
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const chartData = Object.entries(conversionsByDay).map(([day, count]) => ({
    day: new Date(day).toLocaleDateString('en-US', { weekday: 'short' }),
    conversions: count
  }));

  const conversionsByType = events.reduce((acc, event) => {
    acc[event.type] = (acc[event.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(conversionsByType).map(([type, count]) => ({
    name: type.replace('_', ' ').toUpperCase(),
    value: count,
    color: {
      'form_submit': '#3B82F6',
      'phone_call': '#F59E0B',
      'email_sent': '#10B981',
      'quote_request': '#8B5CF6'
    }[type] || '#6B7280'
  }));

  // Track conversion event
  const trackConversion = (eventData: Partial<ConversionEvent>) => {
    if (!isTracking) return;

    const event: ConversionEvent = {
      id: `event-${Date.now()}`,
      type: 'form_submit',
      timestamp: new Date(),
      source: 'Direct',
      conversionValue: 0,
      userAgent: navigator.userAgent,
      ...eventData
    };

    setEvents(prev => [event, ...prev.slice(0, 99)]); // Keep last 100 events

    // In a real implementation, send to analytics service
    console.log('Conversion tracked:', event);
  };

  // Calculate conversion rate
  const totalVisitors = metrics.find(m => m.id === 'visitors')?.value || 0;
  const totalConversions = events.length;
  const conversionRate = totalVisitors > 0 ? (totalConversions / totalVisitors) * 100 : 0;

  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Analytics Dashboard</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conversion Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time tracking of website performance, user engagement, and conversion metrics 
            to optimize our services and customer experience.
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex rounded-lg border bg-background p-1">
            {(['24h', '7d', '30d'] as const).map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
              >
                {period === '24h' ? '24 Hours' : period === '7d' ? '7 Days' : '30 Days'}
              </Button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => (
            <Card key={metric.id} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-muted ${metric.color}`}>
                    <metric.icon className="w-5 h-5" />
                  </div>
                  <div className={`flex items-center text-sm ${
                    metric.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <ArrowUpRight className={`w-4 h-4 mr-1 ${
                      metric.change < 0 ? 'rotate-90' : ''
                    }`} />
                    {Math.abs(metric.change)}%
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-2xl font-bold">{metric.value.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">{metric.name}</div>
                  
                  <Progress 
                    value={(metric.value / metric.target) * 100} 
                    className="h-2"
                  />
                  
                  <div className="text-xs text-muted-foreground">
                    Target: {metric.target.toLocaleString()} • {metric.period}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Conversion Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Daily Conversions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="conversions" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Conversion Types */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Conversion Types</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Conversion Summary</span>
              </div>
              <Badge variant={conversionRate >= 3 ? "default" : "secondary"}>
                {conversionRate.toFixed(1)}% Conversion Rate
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {totalVisitors.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Visitors</div>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {totalConversions}
                </div>
                <div className="text-sm text-muted-foreground">Total Conversions</div>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  ${events.reduce((acc, e) => acc + e.conversionValue, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Est. Conversion Value</div>
              </div>
            </div>

            {/* Recent Events */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-medium mb-4">Recent Conversion Events</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {events.slice(0, 10).map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-background rounded-lg text-sm">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        event.type === 'form_submit' ? 'bg-blue-500' :
                        event.type === 'phone_call' ? 'bg-orange-500' :
                        event.type === 'email_sent' ? 'bg-green-500' :
                        'bg-purple-500'
                      }`} />
                      <span className="font-medium">
                        {event.type.replace('_', ' ').toUpperCase()}
                      </span>
                      {event.formType && (
                        <Badge variant="outline" className="text-xs">
                          {event.formType}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <span>{event.source}</span>
                      <span>•</span>
                      <span>{event.timestamp.toLocaleTimeString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Note */}
        {process.env.NODE_ENV === 'development' && (
          <Card className="mt-8 border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <div className="text-sm text-yellow-800">
                <strong>Development Mode:</strong> This is sample conversion tracking data. 
                In production, this would integrate with Google Analytics, Facebook Pixel, 
                and other analytics services to provide real conversion tracking.
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

// Global conversion tracking function
export const trackFormSubmission = (formType: string, additionalData?: any) => {
  // Track in Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
      value: 1,
      ...additionalData
    });
  }

  // Track in Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: formType,
      ...additionalData
    });
  }

  // Custom tracking
  console.log('Form submission tracked:', { formType, ...additionalData });
};

export const trackPhoneCall = (phoneNumber: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: phoneNumber,
      value: 1
    });
  }
  
  console.log('Phone call tracked:', phoneNumber);
};