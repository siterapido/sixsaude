'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, BarChart3, Smartphone, HelpCircle, Zap, Clock, Shield, Download } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TiltCard, MagneticButton, GradientText } from '@/components/animations'

/**
 * Client Self-Service Section
 * Quick access to common client needs (2ª via, IR proof, app, FAQ)
 */
export const ClientSection = () => {
  const cards = [
    {
      icon: FileText,
      title: '2ª Via de Boleto',
      description: 'Emita em segundos, pague com facilidade',
      detail: 'Sem filas, sem espera',
      badge: 'Instantâneo',
      badgeIcon: Zap,
      cta: 'Acessar',
    },
    {
      icon: BarChart3,
      title: 'Demonstrativo de IR',
      description: 'Disponível para download a qualquer momento',
      detail: 'Documento oficial para declaração',
      badge: '24/7',
      badgeIcon: Clock,
      cta: 'Baixar',
    },
    {
      icon: Smartphone,
      title: 'Nosso App',
      description: 'Tudo na palma da sua mão',
      detail: 'iOS e Android disponível',
      badge: 'Download',
      badgeIcon: Download,
      cta: 'Baixar',
    },
    {
      icon: HelpCircle,
      title: 'Dúvidas Frequentes',
      description: 'Respostas rápidas para suas dúvidas',
      detail: '+50 perguntas respondidas',
      badge: 'Suporte',
      badgeIcon: Shield,
      cta: 'Ver FAQ',
    },
  ]

  return (
    <section
      id="client-section"
      className="relative py-24 md:py-32 lg:py-48 glass-section-dark glass-overlay noise-overlay gradient-mesh-dark ambient-glow"
    >
      <Container>
        {/* Custom Section Header with Larger Title */}
        <div className="mb-16 md:mb-24 text-center space-y-6">
          <motion.p
            className="text-gold-primary font-medium text-lg tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Você já é nosso <GradientText className="font-semibold">cliente</GradientText>
          </motion.p>

          <motion.h2
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Resolva tudo por aqui de forma{' '}
            <span className="text-gold-primary">rápida</span> e{' '}
            <span className="text-gold-primary">prática</span>
          </motion.h2>

          <motion.div
            className="h-1 bg-gradient-to-r from-gold-primary to-gold-signature rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 100, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            const BadgeIcon = card.badgeIcon
            const floatDelayClass = ['card-premium-float', 'card-premium-float-delay-1', 'card-premium-float-delay-2', 'card-premium-float-delay-3'][index % 4]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className={floatDelayClass}
              >
                <TiltCard maxTilt={3} glareEnabled={false}>
                  <Card variant="default" className="group h-full relative overflow-hidden border border-gold-primary/40 hover:border-gold-primary/70 shadow-[0_0_30px_rgba(245,166,35,0.15)] hover:shadow-[0_0_50px_rgba(245,166,35,0.25)] transition-all duration-500">
                    {/* Premium gold glow effect */}
                    <div className="absolute -inset-px bg-gradient-to-br from-gold-primary/30 via-transparent to-gold-signature/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 via-gold-signature/5 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-premium/90 via-black-premium/50 to-transparent" />

                    <CardContent className="p-6 md:p-8 relative z-10">
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gold-primary/20 text-gold-primary text-xs font-medium rounded-full border border-gold-primary/30">
                          <BadgeIcon className="w-3 h-3" />
                          {card.badge}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-primary via-gold-signature to-gold-soft flex items-center justify-center shadow-[0_4px_20px_rgba(245,166,35,0.4)] group-hover:shadow-[0_4px_30px_rgba(245,166,35,0.6)] transition-shadow duration-500">
                          <Icon className="w-8 h-8 text-black-premium" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-display font-bold text-xl md:text-2xl text-gold-primary mb-2">
                        {card.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base mb-2 leading-relaxed">
                        {card.description}
                      </p>
                      <p className="text-gold-light/60 text-xs mb-6">
                        {card.detail}
                      </p>

                      {/* CTA */}
                      <MagneticButton strength={0.15} className="w-full">
                        <button className="w-full py-3 px-4 bg-gradient-to-r from-gold-primary/30 to-gold-signature/20 text-gold-primary text-sm font-semibold rounded-xl border border-gold-primary/40 hover:border-gold-primary/70 hover:from-gold-primary/40 hover:to-gold-signature/30 transition-all duration-300 shadow-[0_2px_10px_rgba(245,166,35,0.2)] hover:shadow-[0_4px_20px_rgba(245,166,35,0.3)]">
                          {card.cta}
                        </button>
                      </MagneticButton>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* Escape CTA */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-platinum mb-4">
            Não encontrou o que procurava?{' '}
            <button className="text-gold-primary hover:text-gold-signature font-semibold transition-colors">
              Fale com um especialista
            </button>
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
