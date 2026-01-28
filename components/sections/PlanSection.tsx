'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, Building2, Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TiltCard, MagneticButton } from '@/components/animations'

/**
 * Plans Section
 * Display available health plans with benefits
 */
export const PlanSection = () => {
  const plans = [
    {
      icon: User,
      title: 'Plano Individual & Familiar',
      description: 'Cobertura completa para você e quem você ama',
      badge: 'Mais Contratado',
      benefits: [
        'Rede credenciada ampla',
        'Cobertura nacional',
        'Sem carência para urgências',
      ],
    },
    {
      icon: Building2,
      title: 'Plano Empresarial',
      description: 'Benefícios de qualidade para sua equipe',
      benefits: [
        'Gestão simplificada',
        'Planos personalizados',
        'Suporte dedicado para RH',
      ],
    },
  ]

  return (
    <section id="plans" className="relative py-24 md:py-32 lg:py-48 glass-section-dark glass-overlay noise-overlay spotlight-gold aurora-dark">
      <Container>
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <SectionHeader
            title="Planos de saúde feitos"
            highlight="para você"
            subtitle="Operadoras de confiança, coberturas completas e um time pronto para te ajudar a escolher"
          />
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const floatDelayClass = index === 0 ? 'card-premium-float' : 'card-premium-float-delay-2'
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
                  <Card variant="glass" className="group h-full border border-gold-primary/20 hover:border-gold-primary/40">
                    <CardContent className="p-6 md:p-8 relative z-10">
                      {/* Icon */}
                      <div className="mb-5">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-primary to-gold-soft flex items-center justify-center shadow-gold-sm">
                          <Icon className="w-7 h-7 text-black-premium" />
                        </div>
                      </div>

                      {/* Badge */}
                      {plan.badge && (
                        <span className="inline-block mb-3 px-2.5 py-1 text-xs font-medium bg-gold-primary/20 text-gold-primary border border-gold-primary/30 rounded-xl">
                          {plan.badge}
                        </span>
                      )}

                      {/* Content */}
                      <h3 className="font-display font-bold text-xl md:text-2xl text-gold-primary mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-gold-dark text-sm md:text-base mb-6 leading-relaxed">
                        {plan.description}
                      </p>

                      {/* Benefits */}
                      <ul className="space-y-2.5 mb-8">
                        {plan.benefits.map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center gap-2.5"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Check className="w-4 h-4 text-gold-primary flex-shrink-0" />
                            <span className="text-gold-dark text-sm">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <MagneticButton strength={0.2} className="w-full">
                        <button className="w-full py-3 px-4 bg-black-premium/10 text-black-premium text-sm font-medium rounded-lg hover:bg-black-premium/20 transition-colors">
                          {index === 0 ? 'Quero Contratar' : 'Solicitar Cotação'}
                        </button>
                      </MagneticButton>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* Help CTA */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-platinum mb-4">Ainda com dúvidas sobre qual plano escolher?</p>
          <MagneticButton strength={0.3}>
            <Button variant="secondary">Fale com um consultor</Button>
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  )
}
