'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, FileText, Search, Clock, Download } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

/**
 * Mobile App Section
 * Showcase app features and download links
 */
export const AppSection = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Carteirinha Digital',
      description: 'Sempre disponível, mesmo sem internet',
    },
    {
      icon: Search,
      title: 'Rede Credenciada',
      description: 'Encontre médicos e clínicas perto de você',
    },
    {
      icon: FileText,
      title: '2ª Via de Boleto',
      description: 'Emita e pague direto pelo app',
    },
    {
      icon: Clock,
      title: 'Histórico de Atendimentos',
      description: 'Acompanhe todas as suas consultas',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 lg:py-48 glass-section-dark glass-overlay noise-overlay ambient-glow">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <motion.div
            className="relative h-96 md:h-full min-h-[500px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-gold/8 border border-gold-primary/18 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-gold/15 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
                <p className="text-platinum text-sm">
                  App Mockup aqui
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div>
              <h2 className="font-display font-semibold text-h2 mb-4">
                Tudo na palma da sua mão
              </h2>
              <p className="text-xl text-platinum-light">
                Gerencie seu plano, consulte a rede credenciada e muito mais pelo aplicativo SIX Saúde
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-primary/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-platinum">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Download CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" icon={<Download size={20} />}>
                App Store
              </Button>
              <Button variant="secondary" size="lg" icon={<Download size={20} />}>
                Google Play
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
