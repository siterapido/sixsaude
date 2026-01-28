'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Heart, Eye, Target, Users, Clock, Award, Headphones } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

/**
 * Sobre (About) Page
 * Company history, mission, vision, values, and impact numbers
 */
export default function SobrePage() {
  const values = [
    {
      icon: Heart,
      title: 'Missao',
      description:
        'Facilitar o acesso a saude de qualidade, conectando pessoas a planos que realmente cuidam delas, com transparencia e agilidade.',
    },
    {
      icon: Eye,
      title: 'Visao',
      description:
        'Ser referencia nacional em administracao de beneficios de saude, reconhecida pela excelencia no atendimento e inovacao continua.',
    },
    {
      icon: Target,
      title: 'Valores',
      description:
        'Transparencia, compromisso com o cliente, inovacao, etica e respeito as pessoas estao no centro de tudo que fazemos.',
    },
  ]

  const differentials = [
    {
      icon: Shield,
      title: 'Registro ANS',
      description: 'Administradora AAA registrada e regulamentada pela Agencia Nacional de Saude Suplementar.',
    },
    {
      icon: Headphones,
      title: 'Suporte 24/7',
      description: 'Time de especialistas sempre pronto para ajudar, a qualquer hora do dia ou da noite.',
    },
    {
      icon: Award,
      title: '10+ Anos',
      description: 'Mais de uma decada de experiencia cuidando da saude de milhares de familias brasileiras.',
    },
    {
      icon: Users,
      title: '5.000+ Clientes',
      description: 'Milhares de clientes satisfeitos que confiam na SIX Saude para cuidar do que mais importa.',
    },
  ]

  const stats = [
    { number: '10+', label: 'Anos de experiencia' },
    { number: '5.000+', label: 'Clientes ativos' },
    { number: '98%', label: 'Satisfacao' },
    { number: '24/7', label: 'Suporte disponivel' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-black-premium flex items-center">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-signature/5 rounded-full blur-3xl" />

        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-gold-signature text-sm font-semibold uppercase tracking-widest mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Sobre Nos
            </motion.span>
            <h1 className="font-display font-bold text-h1 mb-6">
              Quem <span className="text-gradient">Somos</span>
            </h1>
            <p className="text-xl text-platinum-light leading-relaxed max-w-2xl mx-auto">
              Ha mais de 10 anos cuidando da saude de familias e empresas brasileiras com
              transparencia, dedicacao e a tecnologia que voce merece.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* History Section */}
      <section className="relative py-24 md:py-32 bg-black-charcoal">
        <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Image placeholder */}
            <div className="relative h-80 md:h-96 rounded-2xl bg-gradient-gold/10 border border-gold-signature/20 flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-gold/20 flex items-center justify-center">
                  <span className="text-4xl">🏢</span>
                </div>
                <p className="text-platinum text-sm">Imagem da empresa</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-display font-semibold text-h2">Nossa Historia</h2>
              <div className="space-y-4 text-platinum-light leading-relaxed">
                <p>
                  A SIX Saude nasceu em 2014 com um proposito claro: transformar a forma como as pessoas
                  se relacionam com seus planos de saude. Desde o inicio, acreditamos que cuidar da
                  saude nao deveria ser complicado.
                </p>
                <p>
                  Ao longo dos anos, construimos uma equipe de especialistas dedicados e desenvolvemos
                  tecnologias que simplificam a gestao de beneficios. Hoje, somos uma administradora
                  AAA registrada na ANS, atendendo milhares de clientes em todo o Brasil.
                </p>
                <p>
                  Nosso compromisso e continuar inovando para oferecer o melhor atendimento possivel,
                  sempre com transparencia e respeito ao cliente.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="relative py-24 md:py-32 bg-black-premium">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="font-display font-semibold text-h2 mb-4">
              Nosso Proposito
            </h2>
            <p className="text-xl text-platinum-light max-w-2xl mx-auto">
              Os principios que guiam cada decisao e cada atendimento
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card variant="elevated" className="h-full">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-gold-signature/20 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-gold-signature" />
                        </div>
                      </div>
                      <h3 className="font-display font-semibold text-2xl mb-4">{value.title}</h3>
                      <p className="text-platinum leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* Differentials */}
      <section className="relative py-24 md:py-32 bg-black-charcoal">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="font-display font-semibold text-h2 mb-4">
              Por que escolher a SIX Saude?
            </h2>
            <p className="text-xl text-platinum-light max-w-2xl mx-auto">
              Diferenciais que fazem da gente uma referencia no mercado
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {differentials.map((diff, index) => {
              const Icon = diff.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card variant="elevated" className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gold-signature/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-gold-signature" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{diff.title}</h3>
                      <p className="text-platinum text-sm leading-relaxed">{diff.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* Impact Numbers */}
      <section className="relative py-24 md:py-32 bg-black-premium">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="font-display font-semibold text-h2 mb-4">
              Nosso Impacto
            </h2>
            <p className="text-xl text-platinum-light max-w-2xl mx-auto">
              Numeros que refletem nosso compromisso com a excelencia
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <motion.p
                  className="text-5xl md:text-6xl font-bold text-gradient mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-platinum">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-gold/5 border-t border-b border-gold-signature/30">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="font-display font-semibold text-h2 mb-6">
              Pronto para fazer parte da nossa historia?
            </h2>
            <p className="text-xl text-platinum-light mb-8">
              Junte-se a milhares de clientes que ja confiam na SIX Saude para cuidar
              do que mais importa: a saude de quem voce ama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const phoneNumber = '5511999999999'
                  const message = 'Ola! Vim da pagina Sobre e gostaria de conhecer os planos da SIX Saude.'
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
                }}
              >
                Quero Contratar
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const phoneNumber = '5511999999999'
                  const message = 'Ola! Vim da pagina Sobre e preciso de ajuda.'
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
                }}
              >
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  )
}
