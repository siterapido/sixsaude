'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MagneticButton } from '@/components/animations'
import { useReducedMotion } from '@/components/hooks'

/**
 * Hero Section Component
 * Cinematographic full-bleed background with family image
 * Dark overlay gradient for text contrast
 */
export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.1])
  const contentY = useTransform(scrollY, [0, 300], [0, 50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black-premium">
      {/* Background Image - Full Bleed */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: prefersReducedMotion ? 1 : imageScale }}
      >
        <img
          src="/hero.png"
          alt="Família brasileira feliz"
          className="w-full h-full object-cover object-[center_20%]"
        />

        {/* Cinematic Overlay - Dark gradient from left */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg,
                rgba(10,10,10,0.95) 0%,
                rgba(10,10,10,0.85) 25%,
                rgba(10,10,10,0.6) 50%,
                rgba(10,10,10,0.3) 70%,
                rgba(10,10,10,0.1) 100%
              )
            `,
          }}
        />

        {/* Bottom gradient for scroll transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 100%)',
          }}
        />

        {/* Subtle gold accent glow */}
        <div
          className="absolute top-1/4 left-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(241,193,15,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col justify-center min-h-screen pt-24 pb-20">
        <motion.div
          className="max-w-[700px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: prefersReducedMotion ? 0 : contentY }}
        >
          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
            <h1 className="font-display font-bold text-white leading-[0.95] tracking-tight">
              <span className="block text-[clamp(2.5rem,7vw,5.5rem)]">
                Sua saúde
              </span>
              <span className="block text-[clamp(2.5rem,7vw,5.5rem)] text-gold-primary">
                em boas mãos
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={itemVariants} className="mb-10 lg:mb-12 max-w-[520px]">
            <p className="text-lg md:text-xl text-platinum-light leading-relaxed">
              Planos de saúde com transparência, agilidade e um time sempre pronto para cuidar de você e sua família.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <MagneticButton strength={0.15}>
              <Button
                variant="primary"
                size="lg"
                className="!bg-gold-primary !text-black-premium hover:!bg-gold-signature !px-8 !py-6 !text-base font-bold min-w-[200px] rounded-xl shadow-gold-md transition-all duration-300 hover:shadow-gold-lg"
                onClick={() => {
                  const phoneNumber = '5521972338589'
                  const message = 'Olá! Tenho interesse em conhecer os planos da SIX Saúde. Podem me ajudar?'
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
                }}
              >
                Quero Contratar
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.1}>
              <Button
                variant="ghost"
                size="lg"
                className="!bg-white/5 !border !border-white/20 !text-white hover:!bg-white/10 hover:!border-white/30 !px-8 !py-6 !text-base font-medium min-w-[180px] rounded-xl transition-all duration-300"
                onClick={() => {
                  document.getElementById('client-section')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Já Sou Cliente
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-12 lg:mt-16 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[
                { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', alt: 'Cliente satisfeito' },
                { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', alt: 'Cliente satisfeita' },
                { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', alt: 'Cliente satisfeito' },
                { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', alt: 'Cliente satisfeita' },
              ].map((person, i) => (
                <img
                  key={i}
                  src={person.src}
                  alt={person.alt}
                  className="w-8 h-8 rounded-full border-2 border-black-premium object-cover"
                />
              ))}
            </div>
            <div className="text-sm text-platinum">
              <span className="text-white font-medium">+2.500</span> famílias protegidas
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ opacity: prefersReducedMotion ? 0.6 : scrollIndicatorOpacity }}
        animate={!prefersReducedMotion ? { y: [0, 8, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      >
        <button
          onClick={() => document.getElementById('client-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-3 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={20} />
        </button>
      </motion.div>
    </section>
  )
}
