# CLAUDE.md - SIX Saude

## Project Overview

Landing page institucional premium para **SIX Saude Administradora de Beneficios**. Site focado em conversao com design minimalista preto/amarelo ouro.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Commands

```bash
pnpm dev      # Start dev server (localhost:3000)
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Project Structure

```
app/
  layout.tsx          # Root layout + SEO metadata
  page.tsx            # Home page
  sitemap.ts          # Dynamic sitemap
  sobre/              # About page
  privacidade/        # Privacy policy
  termos/             # Terms of service
  lgpd/               # LGPD compliance

components/
  ui/                 # Reusable components
    Button.tsx        # primary | secondary | ghost
    Card.tsx          # default | glass | elevated
    Badge.tsx         # default | premium | success
    Container.tsx     # Responsive wrapper
    WhatsAppButton.tsx # Floating CTA
  sections/           # Page sections
    HeroSection.tsx
    ClientSection.tsx
    PlanSection.tsx
    AppSection.tsx
    SocialProofSection.tsx
    FAQSection.tsx
    CTABanner.tsx
  layout/
    Navbar.tsx
    Footer.tsx
    Section.tsx
    LegalPageLayout.tsx

lib/
  fonts.ts            # next/font (Inter + Montserrat)
  utils/cn.ts         # clsx utility
```

## Design System

### Colors
- **Primary**: `#0A0A0A` (black), `#F5A623` / `#FFB800` (gold)
- **Secondary**: `#B8B8B8` (platinum), `#1E1E1E` (charcoal)
- **Contrast**: `#FFFFFF` (white)

### Typography
- **Display**: Montserrat (headlines)
- **Body**: Inter (copy)

### Accessibility
- WCAG AAA contrast (7:1)
- Keyboard navigation
- ARIA labels
- Semantic HTML

## Code Patterns

### Component Props
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'base' | 'lg'
}
```

### Styling
Use `cn()` utility from `lib/utils/cn.ts` for conditional classes:
```tsx
import { cn } from '@/lib/utils/cn'
className={cn('base-class', condition && 'conditional-class')}
```

### Imports
Use `@/` alias for absolute imports from project root.

## Key Considerations

- Mobile-first responsive design (320px to 4K)
- All content in Portuguese (pt-BR)
- WhatsApp as primary CTA channel
- Performance target: 95+ PageSpeed
- Deploy target: Vercel
