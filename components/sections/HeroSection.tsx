'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Shield, HeartPulse, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SplitText, MagneticButton, FloatingOrbs, ParallaxLayer } from '@/components/animations'
import { useReducedMotion } from '@/components/hooks'

/**
 * Hero Section Component
 * Modern, bold design with oversized typography
 * Centered layout with dramatic visual impact
 */
export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0])

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden section-gold pattern-shield grain-gold vibrant-blur-gold">
      {/* Vibrant Blur Inner Layer */}
      <div className="vibrant-blur-gold-inner" aria-hidden="true" />

      {/* Background Effects */}
      <FloatingOrbs count={3} />

      {/* Decorative elements - mais sutis e orgânicos */}
      <ParallaxLayer speed={0.2} direction="up" className="absolute top-[15%] left-[8%] hidden lg:block">
        <div className="opacity-[0.04]">
          <Shield className="w-48 h-48 text-black-premium" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.3} direction="down" className="absolute bottom-[20%] right-[10%] hidden lg:block">
        <div className="opacity-[0.03]">
          <HeartPulse className="w-56 h-56 text-black-premium" />
        </div>
      </ParallaxLayer>

      {/* Gradient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-black-premium/8 via-transparent to-transparent blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-[1400px] mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black-premium/6 backdrop-blur-sm border border-black-premium/12 text-black-premium text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4" />
              Administradora AAA Registrada
            </span>
          </motion.div>

          {/* Giant Headline */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-10">
            <h1 className="font-display font-bold text-black-premium leading-[0.95] tracking-tight uppercase">
              <span className="block text-[clamp(2.5rem,8vw,6rem)]">
                <SplitText type="words" stagger={0.05} delay={0.2}>
                  Sua saúde
                </SplitText>
              </span>
              <span className="block text-[clamp(2.5rem,8vw,6rem)] text-black-premium/40">
                <SplitText type="words" stagger={0.05} delay={0.4}>
                  em boas mãos
                </SplitText>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline + CTAs row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16"
          >
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-black-premium/70 leading-relaxed max-w-xl">
              Planos de saúde com transparência, agilidade e um time sempre pronto para ajudar.
              Autoatendimento rápido ou especialista quando precisar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <MagneticButton strength={0.4}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="btn-on-gold !bg-black-premium !text-gold-primary hover:!bg-black-deep shadow-[0_10px_50px_rgba(0,0,0,0.2)] !px-8 !py-4 !text-base"
                  onClick={() => {
                    const phoneNumber = '5511999999999'
                    const message = 'Olá! Tenho interesse em conhecer os planos da SIX Saúde. Podem me ajudar?'
                    const encodedMessage = encodeURIComponent(message)
                    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
                  }}
                >
                  Quero Contratar
                </Button>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="!bg-white/15 !border-black-premium/15 !text-black-premium hover:!bg-white/25 !px-8 !py-4 !text-base"
                  onClick={() => {
                    document.getElementById('client-section')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  Já Sou Cliente
                </Button>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Visual accent line */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-24 flex items-center gap-6"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-black-premium/20 via-black-premium/10 to-transparent" />
            <span className="text-xs text-black-premium/40 uppercase tracking-[0.3em] font-medium">
              Atendimento humanizado
            </span>
            <div className="h-px w-20 bg-black-premium/20" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: prefersReducedMotion ? 1 : scrollIndicatorOpacity }}
        animate={!prefersReducedMotion ? { y: [0, 8, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      >
        <button
          onClick={() => {
            document.getElementById('client-section')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="flex flex-col items-center gap-2 text-black-premium/50 hover:text-black-premium/80 transition-colors"
          aria-label="Scroll para próxima seção"
        >
          <ChevronDown size={24} />
        </button>
      </motion.div>
    </section>
  )
}
