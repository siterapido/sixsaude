import type { Config } from 'tailwindcss'

const colors = {
  // Premium Black - Refined with warm undertones for depth
  'black-premium': '#0A0A0A',
  'black-deep': '#111111',
  'black-charcoal': '#1A1A1A',
  'black-elevated': '#1E1E1E',
  'black-warm': '#1A1816',        // Black with warm undertone
  'black-gradient-end': '#141414', // For subtle gradients

  // Gold - Vibrant yellow (#f1c10f) with complementary tones
  'gold-primary': '#f1c10f',       // Main yellow-gold
  'gold-signature': '#f4ca2f',     // Slightly lighter
  'gold-light': '#f9dc6d',         // Light highlight
  'gold-soft': '#e0b00e',          // Warm deeper tone
  'gold-dark': '#c49a0c',          // Rich deep tone
  'gold-vibrant': '#f1c10f',       // Original vibrant

  // Warm neutrals
  'platinum': '#A8A8A8',
  'platinum-light': '#B8B8B8',
  'platinum-warm': '#C4B8A8',      // Warmer platinum
  'gray-border': '#2A2A2A',
  'gray-dark': '#333333',

  // Status colors
  'success-premium': '#10D86F',
  'error-premium': '#E63946',
  'warning-premium': '#FFCC00',
}

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        'display': ['var(--font-clash-display)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Desktop Scale
        'h1': ['72px', { lineHeight: '1.1', letterSpacing: '-2px' }],
        'h2': ['56px', { lineHeight: '1.2', letterSpacing: '-1px' }],
        'h3': ['32px', { lineHeight: '1.3', letterSpacing: '-0.5px' }],
        'h4': ['24px', { lineHeight: '1.4', letterSpacing: '0px' }],
        'body-lg': ['20px', { lineHeight: '1.7', letterSpacing: '0px' }],
        'body': ['16px', { lineHeight: '1.6', letterSpacing: '0px' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0px' }],
        'btn': ['16px', { lineHeight: '1', letterSpacing: '0.5px' }],
      },
      spacing: {
        // Premium spacing scale (8px base)
        'micro': '8px',
        'xs': '16px',
        'sm': '24px',
        'base': '32px',
        'md': '48px',
        'lg': '64px',
        'xl': '96px',
        'xxl': '128px',
      },
      borderRadius: {
        'premium': '14px',
        'card': '24px',        // Increased for softer look
        'card-sm': '16px',
        'section': '28px',
      },
      boxShadow: {
        // Premium shadows
        'premium': '0 8px 32px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.15)',
        'premium-hover': '0 20px 60px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.2)',
        // Gold shadows - vibrant #f1c10f
        'gold-sm': '0 8px 32px rgba(241, 193, 15, 0.25), 0 4px 12px rgba(241, 193, 15, 0.12)',
        'gold-md': '0 16px 48px rgba(241, 193, 15, 0.3), 0 8px 16px rgba(241, 193, 15, 0.15)',
        'gold-lg': '0 24px 64px rgba(241, 193, 15, 0.35), 0 12px 24px rgba(241, 193, 15, 0.18)',
        'gold-glow': '0 0 40px rgba(241, 193, 15, 0.3), 0 0 20px rgba(241, 193, 15, 0.18)',
        'gold-glow-lg': '0 0 60px rgba(241, 193, 15, 0.4), 0 0 30px rgba(241, 193, 15, 0.22)',
        // Glass effects
        'glass': '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(241, 193, 15, 0.12), inset 0 1px 0 rgba(241, 193, 15, 0.1)',
        'glass-hover': '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(241, 193, 15, 0.15), inset 0 1px 0 rgba(241, 193, 15, 0.15)',
        // Card shadows
        'card-soft': '0 10px 50px rgba(0, 0, 0, 0.12), 0 6px 20px rgba(0, 0, 0, 0.08)',
        'card-soft-hover': '0 25px 80px rgba(0, 0, 0, 0.18), 0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        // Gold gradients - vibrant #f1c10f based
        'gradient-gold': 'linear-gradient(135deg, #e0b00e 0%, #f1c10f 50%, #e0b00e 100%)',
        'gradient-gold-soft': 'linear-gradient(165deg, #f1c10f 0%, #f4ca2f 50%, #f1c10f 100%)',
        'gradient-gold-vibrant': 'linear-gradient(135deg, #f1c10f 0%, #f9dc6d 50%, #f1c10f 100%)',
        // Dark section gradients - subtle depth
        'gradient-black-deep': 'linear-gradient(180deg, #0A0A0A 0%, #141414 100%)',
        'gradient-black-warm': 'radial-gradient(ellipse at top center, #1A1816 0%, #0A0A0A 70%)',
        'gradient-black-radial': 'radial-gradient(ellipse 120% 80% at 50% 0%, #1A1816 0%, #0A0A0A 60%)',
        // Section transitions
        'gradient-section-dark': 'linear-gradient(180deg, transparent 0%, #0A0A0A 10%, #0A0A0A 90%, transparent 100%)',
        // Separators and accents - vibrant gold
        'gradient-separator': 'linear-gradient(90deg, transparent, rgba(241, 193, 15, 0.4), transparent)',
        'gradient-gold-radial': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(241, 193, 15, 0.12) 0%, transparent 70%)',
        'gradient-cta': 'linear-gradient(135deg, rgba(241, 193, 15, 0.06) 0%, transparent 50%)',
        // Gold section backgrounds
        'gradient-gold-section': 'linear-gradient(165deg, #e0b00e 0%, #f1c10f 50%, #e0b00e 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out-expo',
        'slide-up': 'slideUp 0.8s ease-out-expo',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'neon-pulse': 'neonPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(241, 193, 15, 0.22), 0 0 50px rgba(241, 193, 15, 0.1)' },
          '50%': { boxShadow: '0 0 35px rgba(241, 193, 15, 0.35), 0 0 70px rgba(241, 193, 15, 0.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        neonPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(241,193,15,0.25), 0 0 40px rgba(241,193,15,0.15), 0 0 60px rgba(241,193,15,0.08)',
            borderColor: 'rgba(241,193,15,0.6)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(241,193,15,0.35), 0 0 50px rgba(241,193,15,0.22), 0 0 80px rgba(241,193,15,0.12)',
            borderColor: 'rgba(241,193,15,0.8)',
          },
        },
      },
      transitionTimingFunction: {
        'premium-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      maxWidth: {
        'container': '1440px',
        'container-tight': '1280px',
      },
      screens: {
        'mobile': { 'max': '639px' },
        'mobile-lg': { 'min': '640px', 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1023px' },
        'desktop': { 'min': '1024px', 'max': '1439px' },
        'desktop-lg': { 'min': '1440px' },
      },
    },
  },
  plugins: [],
}

export default config
