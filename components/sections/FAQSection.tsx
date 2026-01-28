'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MagneticButton } from '@/components/animations'

/**
 * FAQ Section
 * Accordion with frequently asked questions
 */
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Como faço para contratar um plano?',
      answer:
        'É muito simples! Clique no botão "Quero Contratar" e fale diretamente com um de nossos consultores pelo WhatsApp. Vamos te ajudar a escolher o melhor plano para você ou sua empresa.',
    },
    {
      question: 'Como acessar a 2ª via do boleto?',
      answer:
        'Você pode acessar diretamente aqui no site, na seção "Sou Cliente", ou pelo nosso aplicativo disponível na App Store e Google Play. É rápido e seguro!',
    },
    {
      question: 'Como funciona o reembolso?',
      answer:
        'O reembolso varia de acordo com o plano contratado. Entre em contato com nosso suporte para entender as regras do seu plano específico.',
    },
    {
      question: 'Posso incluir dependentes no meu plano?',
      answer:
        'Sim! Nossos planos permitem a inclusão de dependentes (cônjuge, filhos, pais). Fale com nosso time para entender as condições e valores.',
    },
    {
      question: 'Qual o prazo de carência?',
      answer:
        'Os prazos de carência variam conforme o plano e o tipo de atendimento. Em casos de urgência e emergência, não há carência. Consulte nosso time para detalhes do seu plano.',
    },
    {
      question: 'Como entrar em contato com o suporte?',
      answer:
        'Você pode falar conosco pelo WhatsApp, telefone ou e-mail. Estamos sempre prontos para ajudar! Use o botão de contato ou o ícone do WhatsApp no site.',
    },
  ]

  return (
    <section id="faq" className="relative py-24 md:py-32 lg:py-48 glass-section-dark glass-overlay noise-overlay shine-diagonal vignette-gold">
      <Container>
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <SectionHeader
            title="Perguntas"
            highlight="Frequentes"
            subtitle="Encontre respostas rápidas para as dúvidas mais comuns"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full bg-black-deep border rounded-card p-6 text-left transition-all duration-300 ${
                  openIndex === index
                    ? 'border-l-[3px] border-l-gold-primary border-t-gray-border border-r-gray-border border-b-transparent bg-gradient-to-r from-gold-primary/4 to-transparent'
                    : 'border-gray-border hover:border-gold-primary/25'
                }`}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`font-semibold text-lg pr-4 transition-colors duration-300 ${
                    openIndex === index ? 'text-gold-signature' : 'text-white'
                  }`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={24}
                      className={`flex-shrink-0 text-gold-primary ${
                        openIndex === index ? 'icon-glow-sm' : ''
                      }`}
                    />
                  </motion.div>
                </div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="bg-black-deep/50 border-x border-b border-gray-border border-l-[3px] border-l-gold-primary/45 rounded-b-card p-6">
                      <p className="text-platinum leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-platinum mb-6">Não encontrou sua resposta?</p>
          <MagneticButton strength={0.3}>
            <Button variant="primary">Fale com um especialista</Button>
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  )
}
