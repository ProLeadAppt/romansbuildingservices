import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  Type, 
  Contrast, 
  Palette, 
  Settings,
  RotateCcw,
  Check,
  Brain
} from 'lucide-react';

interface ReadabilitySettings {
  dyslexiaMode: boolean;
  highContrast: boolean;
  largeText: boolean;
  enhancedFocus: boolean;
  textSpacing: 'normal' | 'comfortable' | 'loose';
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  readingWidth: 'narrow' | 'normal' | 'wide';
}

const defaultSettings: ReadabilitySettings = {
  dyslexiaMode: false,
  highContrast: false,
  largeText: false,
  enhancedFocus: false,
  textSpacing: 'normal',
  fontSize: 100,
  lineHeight: 150,
  letterSpacing: 0,
  readingWidth: 'normal'
};

export const ReadabilityControls: React.FC = () => {
  const [settings, setSettings] = useState<ReadabilitySettings>(defaultSettings);
  const [isOpen, setIsOpen] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('readability-settings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.warn('Failed to load readability settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('readability-settings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings: ReadabilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // Remove existing classes
    body.classList.remove(
      'dyslexia-friendly',
      'high-contrast',
      'large-text',
      'focus-enhanced',
      'text-spacing-comfortable',
      'text-spacing-loose'
    );

    // Apply dyslexia-friendly mode
    if (newSettings.dyslexiaMode) {
      body.classList.add('dyslexia-friendly');
    }

    // Apply high contrast mode
    if (newSettings.highContrast) {
      body.classList.add('high-contrast');
    }

    // Apply large text mode
    if (newSettings.largeText) {
      body.classList.add('large-text');
    }

    // Apply enhanced focus mode
    if (newSettings.enhancedFocus) {
      body.classList.add('focus-enhanced');
    }

    // Apply text spacing
    if (newSettings.textSpacing === 'comfortable') {
      body.classList.add('text-spacing-comfortable');
    } else if (newSettings.textSpacing === 'loose') {
      body.classList.add('text-spacing-loose');
    }

    // Apply custom CSS variables
    root.style.setProperty('--custom-font-size', `${newSettings.fontSize}%`);
    root.style.setProperty('--custom-line-height', `${newSettings.lineHeight}%`);
    root.style.setProperty('--custom-letter-spacing', `${newSettings.letterSpacing}px`);

    // Apply reading width
    const readingElements = document.querySelectorAll('p, li, blockquote');
    readingElements.forEach(el => {
      (el as HTMLElement).classList.remove('reading-width-narrow', 'reading-width-normal', 'reading-width-wide');
      (el as HTMLElement).classList.add(`reading-width-${newSettings.readingWidth}`);
    });

    // Apply font size scaling
    if (newSettings.fontSize !== 100) {
      body.style.fontSize = `${newSettings.fontSize}%`;
    } else {
      body.style.fontSize = '';
    }
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('readability-settings');
  };

  const updateSetting = <K extends keyof ReadabilitySettings>(
    key: K,
    value: ReadabilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const presets = [
    {
      name: 'Dyslexia Friendly',
      icon: Brain,
      description: 'Optimized spacing and colors for dyslexia',
      settings: {
        ...defaultSettings,
        dyslexiaMode: true,
        textSpacing: 'comfortable' as const,
        fontSize: 110,
        lineHeight: 160,
        letterSpacing: 1
      }
    },
    {
      name: 'High Contrast',
      icon: Contrast,
      description: 'Maximum contrast for visual impairments',
      settings: {
        ...defaultSettings,
        highContrast: true,
        enhancedFocus: true,
        fontSize: 120,
        lineHeight: 170
      }
    },
    {
      name: 'Large Text',
      icon: Type,
      description: 'Increased text size for better visibility',
      settings: {
        ...defaultSettings,
        largeText: true,
        fontSize: 140,
        lineHeight: 180,
        textSpacing: 'comfortable' as const
      }
    }
  ];

  return (
    <>
      {/* Floating Accessibility Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-4 z-40 bg-background/95 backdrop-blur-sm border shadow-lg"
        aria-label="Open readability settings"
      >
        <Eye className="w-4 h-4 mr-2" />
        Readability
      </Button>

      {/* Readability Controls Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="readability-title"
        >
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle id="readability-title" className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Readability & Accessibility Settings
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Customize the display to improve readability and accessibility
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
                aria-label="Close readability settings"
              >
                ×
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Quick Presets */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Quick Presets</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {presets.map((preset) => (
                    <Button
                      key={preset.name}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-start space-y-2"
                      onClick={() => setSettings(preset.settings)}
                    >
                      <div className="flex items-center gap-2">
                        <preset.icon className="w-4 h-4" />
                        <span className="font-medium">{preset.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground text-left">
                        {preset.description}
                      </p>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Toggle Settings */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Display Modes</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Dyslexia-Friendly Mode</label>
                      <p className="text-sm text-muted-foreground">Optimized colors and spacing</p>
                    </div>
                    <Switch
                      checked={settings.dyslexiaMode}
                      onCheckedChange={(checked) => updateSetting('dyslexiaMode', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">High Contrast Mode</label>
                      <p className="text-sm text-muted-foreground">Maximum contrast for visibility</p>
                    </div>
                    <Switch
                      checked={settings.highContrast}
                      onCheckedChange={(checked) => updateSetting('highContrast', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Large Text Mode</label>
                      <p className="text-sm text-muted-foreground">Increased text sizes</p>
                    </div>
                    <Switch
                      checked={settings.largeText}
                      onCheckedChange={(checked) => updateSetting('largeText', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Enhanced Focus Indicators</label>
                      <p className="text-sm text-muted-foreground">Stronger focus outlines</p>
                    </div>
                    <Switch
                      checked={settings.enhancedFocus}
                      onCheckedChange={(checked) => updateSetting('enhancedFocus', checked)}
                    />
                  </div>
                </div>
              </div>

              {/* Text Spacing */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Text Spacing</h3>
                <Select 
                  value={settings.textSpacing} 
                  onValueChange={(value: 'normal' | 'comfortable' | 'loose') => 
                    updateSetting('textSpacing', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal Spacing</SelectItem>
                    <SelectItem value="comfortable">Comfortable Spacing</SelectItem>
                    <SelectItem value="loose">Loose Spacing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Fine-tuning Controls */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Fine-tune Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Font Size: {settings.fontSize}%
                    </label>
                    <Slider
                      value={[settings.fontSize]}
                      onValueChange={([value]) => updateSetting('fontSize', value)}
                      min={80}
                      max={200}
                      step={10}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Line Height: {settings.lineHeight}%
                    </label>
                    <Slider
                      value={[settings.lineHeight]}
                      onValueChange={([value]) => updateSetting('lineHeight', value)}
                      min={120}
                      max={250}
                      step={10}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Letter Spacing: {settings.letterSpacing}px
                    </label>
                    <Slider
                      value={[settings.letterSpacing]}
                      onValueChange={([value]) => updateSetting('letterSpacing', value)}
                      min={-1}
                      max={3}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Reading Width */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Reading Width</h3>
                <Select 
                  value={settings.readingWidth} 
                  onValueChange={(value: 'narrow' | 'normal' | 'wide') => 
                    updateSetting('readingWidth', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="narrow">Narrow (45 characters)</SelectItem>
                    <SelectItem value="normal">Normal (65 characters)</SelectItem>
                    <SelectItem value="wide">Wide (85 characters)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Active Settings Display */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Active Settings</h3>
                <div className="flex flex-wrap gap-2">
                  {settings.dyslexiaMode && (
                    <Badge variant="secondary">Dyslexia Mode</Badge>
                  )}
                  {settings.highContrast && (
                    <Badge variant="secondary">High Contrast</Badge>
                  )}
                  {settings.largeText && (
                    <Badge variant="secondary">Large Text</Badge>
                  )}
                  {settings.enhancedFocus && (
                    <Badge variant="secondary">Enhanced Focus</Badge>
                  )}
                  {settings.textSpacing !== 'normal' && (
                    <Badge variant="secondary">
                      {settings.textSpacing} Spacing
                    </Badge>
                  )}
                  {settings.fontSize !== 100 && (
                    <Badge variant="secondary">{settings.fontSize}% Size</Badge>
                  )}
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={resetSettings}
                  className="w-full"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset to Default
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};