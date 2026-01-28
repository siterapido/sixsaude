'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, BarChart3, Smartphone, HelpCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TiltCard, MagneticButton } from '@/components/animations'

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
      cta: 'Acessar',
    },
    {
      icon: BarChart3,
      title: 'Demonstrativo de IR',
      description: 'Disponível para download a qualquer momento',
      cta: 'Baixar',
    },
    {
      icon: Smartphone,
      title: 'Nosso App',
      description: 'Tudo na palma da sua mão',
      cta: 'Baixar',
    },
    {
      icon: HelpCircle,
      title: 'Dúvidas Frequentes',
      description: 'Respostas rápidas para suas dúvidas',
      cta: 'Ver FAQ',
    },
  ]

  return (
    <section
      id="client-section"
      className="relative py-24 md:py-32 lg:py-48 glass-section-dark glass-overlay noise-overlay gradient-mesh-dark ambient-glow"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <SectionHeader
            title="Você já é nosso"
            highlight="cliente"
            subtitle="Resolva tudo por aqui de forma rápida e prática, quando e onde você estiver"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
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
                  <Card variant="gold-glass" className="group h-full">
                    <CardContent className="p-6 md:p-7 relative z-10">
                      {/* Icon */}
                      <div className="mb-5">
                        <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#D4A84B]" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-display font-semibold text-lg mb-2 text-[#1A1A1A]">
                        {card.title}
                      </h3>
                      <p className="text-[#5A5A5A] text-sm mb-5 leading-relaxed">
                        {card.description}
                      </p>

                      {/* CTA */}
                      <MagneticButton strength={0.15} className="w-full">
                        <button className="w-full py-2.5 px-4 bg-[#1A1A1A] text-[#D4A84B] text-sm font-medium rounded-lg hover:bg-[#2A2A2A] transition-colors">
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
