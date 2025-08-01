import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface DropdownOption {
  id: string;
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
  group?: string;
}

interface AccessibleDropdownProps {
  options: DropdownOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  searchable?: boolean;
  multiSelect?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  description?: string;
  className?: string;
  maxDisplayedOptions?: number;
}

export const AccessibleDropdown: React.FC<AccessibleDropdownProps> = ({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  searchable = false,
  multiSelect = false,
  disabled = false,
  required = false,
  error,
  label,
  description,
  className,
  maxDisplayedOptions = 10
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    multiSelect ? (value ? value.split(',') : []) : (value ? [value] : [])
  );

  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (option.description && option.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Group options if they have groups
  const groupedOptions = filteredOptions.reduce((groups, option) => {
    const group = option.group || 'default';
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(option);
    return groups;
  }, {} as Record<string, DropdownOption[]>);

  // Limit displayed options for performance
  const displayedOptions = filteredOptions.slice(0, maxDisplayedOptions);

  // Handle selection
  const handleSelect = useCallback((optionValue: string) => {
    if (multiSelect) {
      const newSelectedValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues.join(','));
    } else {
      setSelectedValues([optionValue]);
      onValueChange(optionValue);
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  }, [multiSelect, selectedValues, onValueChange]);

  // Keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => 
            prev < displayedOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : displayedOptions.length - 1
          );
        }
        break;
      
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else if (focusedIndex >= 0 && focusedIndex < displayedOptions.length) {
          const option = displayedOptions[focusedIndex];
          if (!option.disabled) {
            handleSelect(option.value);
          }
        }
        break;
      
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        break;
      
      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
      
      default:
        if (searchable && isOpen && event.key.length === 1) {
          searchRef.current?.focus();
        }
        break;
    }
  }, [isOpen, focusedIndex, displayedOptions, handleSelect, searchable]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node) &&
          listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll focused option into view
  useEffect(() => {
    if (focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }, [focusedIndex]);

  // Auto-focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [isOpen, searchable]);

  const getDisplayValue = () => {
    if (selectedValues.length === 0) return placeholder;
    
    if (multiSelect) {
      if (selectedValues.length === 1) {
        const option = options.find(opt => opt.value === selectedValues[0]);
        return option?.label || selectedValues[0];
      }
      return `${selectedValues.length} selected`;
    }
    
    const option = options.find(opt => opt.value === selectedValues[0]);
    return option?.label || selectedValues[0];
  };

  const clearSelection = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedValues([]);
    onValueChange('');
  };

  return (
    <div className={cn("relative", className)}>
      {/* Label */}
      {label && (
        <label 
          htmlFor="dropdown-trigger"
          className="block text-sm font-medium mb-2"
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}

      {/* Description */}
      {description && (
        <p id="dropdown-description" className="text-sm text-muted-foreground mb-2">
          {description}
        </p>
      )}

      {/* Trigger Button */}
      <Button
        ref={triggerRef}
        id="dropdown-trigger"
        variant="outline"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={label ? undefined : "dropdown-trigger"}
        aria-describedby={description ? "dropdown-description" : undefined}
        aria-invalid={!!error}
        aria-required={required}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={cn(
          "w-full justify-between text-left font-normal",
          !selectedValues.length && "text-muted-foreground",
          error && "border-destructive focus:ring-destructive"
        )}
      >
        <span className="truncate">{getDisplayValue()}</span>
        <div className="flex items-center space-x-1">
          {selectedValues.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0 hover:bg-transparent"
              onClick={clearSelection}
              aria-label="Clear selection"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "transform rotate-180"
          )} />
        </div>
      </Button>

      {/* Error message */}
      {error && (
        <p role="alert" className="text-sm text-destructive mt-1">
          {error}
        </p>
      )}

      {/* Dropdown List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 bg-white border border-border rounded-lg shadow-lg max-h-60 overflow-hidden"
          >
            {/* Search Input */}
            {searchable && (
              <div className="p-2 border-b">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    ref={searchRef}
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setFocusedIndex(0);
                    }}
                    onKeyDown={handleKeyDown}
                    className="pl-8 h-8"
                    aria-label="Search options"
                  />
                </div>
              </div>
            )}

            {/* Options List */}
            <ul
              ref={listRef}
              role="listbox"
              aria-multiselectable={multiSelect}
              className="max-h-48 overflow-y-auto py-1"
            >
              {displayedOptions.length === 0 ? (
                <li className="px-3 py-2 text-sm text-muted-foreground text-center">
                  No options found
                </li>
              ) : (
                displayedOptions.map((option, index) => {
                  const isSelected = selectedValues.includes(option.value);
                  const isFocused = index === focusedIndex;
                  
                  return (
                    <li
                      key={option.id}
                      ref={(el) => (optionRefs.current[index] = el)}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled}
                      className={cn(
                        "relative flex items-center px-3 py-2 text-sm cursor-pointer select-none",
                        option.disabled && "opacity-50 cursor-not-allowed",
                        isFocused && "bg-accent text-accent-foreground",
                        isSelected && "bg-primary/10 text-primary font-medium"
                      )}
                      onClick={() => !option.disabled && handleSelect(option.value)}
                      onMouseEnter={() => setFocusedIndex(index)}
                    >
                      {multiSelect && (
                        <div className={cn(
                          "flex items-center justify-center w-4 h-4 mr-2 border rounded",
                          isSelected && "bg-primary border-primary text-primary-foreground"
                        )}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="truncate">{option.label}</div>
                        {option.description && (
                          <div className="text-xs text-muted-foreground truncate">
                            {option.description}
                          </div>
                        )}
                      </div>
                      
                      {!multiSelect && isSelected && (
                        <Check className="w-4 h-4 ml-2 text-primary" />
                      )}
                    </li>
                  );
                })
              )}
            </ul>

            {/* Show truncation message if there are more options */}
            {filteredOptions.length > maxDisplayedOptions && (
              <div className="px-3 py-2 text-xs text-muted-foreground border-t text-center">
                Showing {maxDisplayedOptions} of {filteredOptions.length} options
                {searchable && ". Use search to narrow results."}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};