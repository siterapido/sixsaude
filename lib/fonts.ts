import { Inter, Montserrat } from 'next/font/google'

/**
 * Inter - Body font (highly legible, professional)
 * Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
 */
export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

/**
 * Montserrat - Display font (modern, bold, premium)
 * Weights: 600 (Semibold), 700 (Bold), 800 (ExtraBold)
 * Alternative to Clash Display
 */
export const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  variable: '--font-clash-display',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

/**
 * Font combinations for layout
 */
export const fontVariables = [inter.variable, montserrat.variable].join(' ')
