import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Brand colours - DO NOT CHANGE
        navy: {
          DEFAULT: '#0A2E76',
          light: '#1F4CBE',
        },
        amber: {
          DEFAULT: '#EE9D2B',
          gold: '#FBBF24',
        },
        blue: {
          bright: '#2563EB',
          pale: '#DBEAFE',
        },
        green: '#059669',

        // Neutrals
        'text-primary': '#020817',
        'text-secondary': '#111827',
        'text-muted': '#374151',
        'bg-light': '#F1F5F9',
        'bg-off-white': '#F5F5F5',
        border: '#E2E8F0',

        // shadcn compat (simplified - no HSL indirection)
        background: '#FFFFFF',
        foreground: '#020817',
        primary: {
          DEFAULT: '#0A2E76',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F1F5F9',
          foreground: '#020817',
        },
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#374151',
        },
        accent: {
          DEFAULT: '#DBEAFE',
          foreground: '#0A2E76',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#020817',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#020817',
        },
        ring: '#0A2E76',
        input: '#E2E8F0',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        // Typographic scale (1.25x ratio)
        'xs': ['0.64rem', { lineHeight: '1.5' }],
        'sm': ['0.8rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.25rem', { lineHeight: '1.5' }],
        'xl': ['1.563rem', { lineHeight: '1.3' }],
        '2xl': ['1.953rem', { lineHeight: '1.2' }],
        '3xl': ['2.441rem', { lineHeight: '1.2' }],
        '4xl': ['3.052rem', { lineHeight: '1.1' }],
        '5xl': ['3.815rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      boxShadow: {
        'premium': '0 4px 14px rgba(10, 46, 118, 0.08)',
        'premium-lg': '0 12px 40px rgba(10, 46, 118, 0.12)',
        'premium-xl': '0 20px 60px rgba(10, 46, 118, 0.16)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
