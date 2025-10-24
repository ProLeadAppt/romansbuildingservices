import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Keyboard, Info, X } from 'lucide-react';

interface KeyboardShortcut {
  keys: string[];
  description: string;
  context?: string;
}

const keyboardShortcuts: KeyboardShortcut[] = [
  { keys: ['Tab'], description: 'Navigate to next interactive element' },
  { keys: ['Shift', 'Tab'], description: 'Navigate to previous interactive element' },
  { keys: ['Enter'], description: 'Activate buttons and links' },
  { keys: ['Space'], description: 'Activate buttons and checkboxes' },
  { keys: ['Escape'], description: 'Close modals and dropdowns' },
  { keys: ['Arrow Keys'], description: 'Navigate within menus and star ratings', context: 'Menus/Ratings' },
  { keys: ['Home'], description: 'Go to first item', context: 'Menus/Ratings' },
  { keys: ['End'], description: 'Go to last item', context: 'Menus/Ratings' },
  { keys: ['1-5'], description: 'Quick rating selection', context: 'Star Rating' },
];

export const KeyboardNavigationGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Keyboard Navigation Help Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 bg-background/95 backdrop-blur-sm border shadow-lg"
        aria-label="Open keyboard navigation guide"
      >
        <Keyboard className="w-4 h-4 mr-2" />
        Keyboard Help
      </Button>

      {/* Keyboard Navigation Guide Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="keyboard-guide-title"
        >
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          <Card className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle id="keyboard-guide-title" className="flex items-center gap-2">
                  <Keyboard className="w-5 h-5" />
                  Keyboard Navigation Guide
                </CardTitle>
                <CardDescription>
                  Learn how to navigate this website using only your keyboard
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
                aria-label="Close keyboard guide"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* General Navigation */}
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  General Navigation
                </h3>
                <div className="space-y-3">
                  {keyboardShortcuts
                    .filter(shortcut => !shortcut.context)
                    .map((shortcut, index) => (
                    <div key={index} className="flex items-start justify-between gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm">{shortcut.description}</p>
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {shortcut.keys.map((key, keyIndex) => (
                          <Badge key={keyIndex} variant="outline" className="text-xs font-mono">
                            {key}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Context-Specific Navigation */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Context-Specific Navigation</h3>
                
                {/* Group by context */}
                {['Menus/Ratings', 'Star Rating'].map(context => (
                  <div key={context} className="mb-4">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                      {context}
                    </h4>
                    <div className="space-y-2">
                      {keyboardShortcuts
                        .filter(shortcut => shortcut.context === context)
                        .map((shortcut, index) => (
                        <div key={index} className="flex items-start justify-between gap-4 p-3 bg-muted/30 rounded-lg">
                          <div className="flex-1">
                            <p className="text-sm">{shortcut.description}</p>
                          </div>
                          <div className="flex gap-1 flex-wrap">
                            {shortcut.keys.map((key, keyIndex) => (
                              <Badge key={keyIndex} variant="outline" className="text-xs font-mono">
                                {key}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Accessibility Features */}
              <div className="border-t pt-4">
                <h3 className="font-semibold text-lg mb-3">Accessibility Features</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• All interactive elements have visible focus indicators</p>
                  <p>• Screen reader announcements for important actions</p>
                  <p>• Skip links available for faster navigation</p>
                  <p>• Form fields include proper labels and error messages</p>
                  <p>• Modal dialogs trap focus and restore it on close</p>
                </div>
              </div>

              {/* Contact for Accessibility Issues */}
              <div className="border-t pt-4 bg-secondary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground">
                  If you encounter any accessibility issues or need assistance, 
                  please contact us at{' '}
                  <a 
                    href="tel:+61414922276" 
                    className="text-primary hover:underline focus:underline focus:outline-none"
                  >
                    +61 414 922 276
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};