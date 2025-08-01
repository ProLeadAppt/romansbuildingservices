import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, Eye, Type, Volume2, Keyboard, 
  MousePointer, Pause, Play, RotateCcw, X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { useInclusiveDesign } from './InclusiveDesignProvider';
import { cn } from '@/lib/utils';

interface AccessibilityToolbarProps {
  className?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  showBadge?: boolean;
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  className,
  position = 'bottom-right',
  showBadge = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const { preferences, updatePreference, resetPreferences } = useInclusiveDesign();

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  const handleFontSizeChange = (value: number[]) => {
    const newSize = value[0];
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    updatePreference('largeFonts', newSize > 100);
  };

  const handleReset = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
    resetPreferences();
  };

  const getActiveCount = () => {
    return Object.values(preferences).filter(Boolean).length;
  };

  return (
    <div className={cn("fixed z-50", positionClasses[position], className)}>
      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full shadow-lg bg-primary hover:bg-primary/90"
          aria-label={isOpen ? "Close accessibility toolbar" : "Open accessibility toolbar"}
          aria-expanded={isOpen}
        >
          <Settings className="w-6 h-6" />
        </Button>

        {/* Active preferences badge */}
        {showBadge && getActiveCount() > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs"
          >
            {getActiveCount()}
          </Badge>
        )}
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={cn(
              "absolute w-80 max-w-[90vw]",
              position.includes('right') ? "right-0" : "left-0",
              position.includes('bottom') ? "bottom-16" : "top-16"
            )}
          >
            <Card className="shadow-xl border-2">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Accessibility</span>
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close accessibility toolbar"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Visual Adjustments */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Visual</span>
                  </h3>

                  <div className="space-y-3">
                    {/* High Contrast */}
                    <div className="flex items-center justify-between">
                      <label htmlFor="high-contrast" className="text-sm font-medium cursor-pointer">
                        High Contrast
                      </label>
                      <Switch
                        id="high-contrast"
                        checked={preferences.highContrast}
                        onCheckedChange={(checked) => updatePreference('highContrast', checked)}
                      />
                    </div>

                    {/* Font Size */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="font-size" className="text-sm font-medium">
                          Font Size
                        </label>
                        <span className="text-sm text-muted-foreground">{fontSize}%</span>
                      </div>
                      <Slider
                        id="font-size"
                        value={[fontSize]}
                        onValueChange={handleFontSizeChange}
                        min={75}
                        max={200}
                        step={25}
                        className="w-full"
                        aria-label="Adjust font size"
                      />
                    </div>

                    {/* Focus Visible */}
                    <div className="flex items-center justify-between">
                      <label htmlFor="focus-visible" className="text-sm font-medium cursor-pointer">
                        Enhanced Focus
                      </label>
                      <Switch
                        id="focus-visible"
                        checked={preferences.focusVisible}
                        onCheckedChange={(checked) => updatePreference('focusVisible', checked)}
                      />
                    </div>
                  </div>
                </div>

                {/* Motion & Animation */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm flex items-center space-x-2">
                    <MousePointer className="w-4 h-4" />
                    <span>Motion</span>
                  </h3>

                  <div className="space-y-3">
                    {/* Reduce Motion */}
                    <div className="flex items-center justify-between">
                      <label htmlFor="reduce-motion" className="text-sm font-medium cursor-pointer">
                        Reduce Motion
                      </label>
                      <Switch
                        id="reduce-motion"
                        checked={preferences.reduceMotion}
                        onCheckedChange={(checked) => updatePreference('reduceMotion', checked)}
                      />
                    </div>

                    {/* Pause Autoplay */}
                    <div className="flex items-center justify-between">
                      <label htmlFor="pause-autoplay" className="text-sm font-medium cursor-pointer">
                        Pause Autoplay
                      </label>
                      <Switch
                        id="pause-autoplay"
                        checked={preferences.autoplayPaused}
                        onCheckedChange={(checked) => updatePreference('autoplayPaused', checked)}
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm flex items-center space-x-2">
                    <Keyboard className="w-4 h-4" />
                    <span>Navigation</span>
                  </h3>

                  <div className="space-y-3">
                    {/* Keyboard Navigation */}
                    <div className="flex items-center justify-between">
                      <label htmlFor="keyboard-nav" className="text-sm font-medium cursor-pointer">
                        Keyboard Navigation
                      </label>
                      <Switch
                        id="keyboard-nav"
                        checked={preferences.keyboardNavigation}
                        onCheckedChange={(checked) => updatePreference('keyboardNavigation', checked)}
                      />
                    </div>

                    {/* Screen Reader */}
                    <div className="flex items-center justify-between">
                      <label htmlFor="screen-reader" className="text-sm font-medium cursor-pointer">
                        Screen Reader Mode
                      </label>
                      <Switch
                        id="screen-reader"
                        checked={preferences.screenReader}
                        onCheckedChange={(checked) => updatePreference('screenReader', checked)}
                      />
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="pt-4 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="w-full"
                    disabled={getActiveCount() === 0}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset All Settings
                  </Button>
                </div>

                {/* Help Text */}
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>These settings are saved locally and will persist across sessions.</p>
                  <p>For additional accessibility features, check your browser or device settings.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isOpen && "Accessibility toolbar opened"}
        {!isOpen && getActiveCount() > 0 && `${getActiveCount()} accessibility features active`}
      </div>
    </div>
  );
};