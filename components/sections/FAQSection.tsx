'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MagneticButton, GradientText } from '@/components/animations'

/**
 * FAQ Section
 * Accordion with frequently asked questions - Premium Gold Design
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
        {/* Premium Header */}
        <div className="mb-16 md:mb-24 text-center space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-4 h-4 text-gold-primary" />
            <span className="text-gold-primary text-sm font-medium">Tire suas dúvidas</span>
          </motion.div>

          <motion.h2
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Perguntas <GradientText className="font-bold">Frequentes</GradientText>
          </motion.h2>

          <motion.p
            className="text-platinum text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Encontre respostas rápidas para as dúvidas mais comuns
          </motion.p>

          <motion.div
            className="h-1 bg-gradient-to-r from-gold-primary to-gold-signature rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 100, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        {/* FAQ Accordion - Premium Style */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-50px' }}
              className="group"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full bg-black-deep/80 backdrop-blur-sm rounded-2xl p-6 text-left transition-all duration-500 ${
                  openIndex === index
                    ? 'border-2 border-gold-primary/60 shadow-[0_0_30px_rgba(245,166,35,0.2)]'
                    : 'border border-gold-primary/20 hover:border-gold-primary/40 shadow-[0_0_20px_rgba(245,166,35,0.05)] hover:shadow-[0_0_25px_rgba(245,166,35,0.1)]'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-center gap-4">
                  {/* Number indicator */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-gold-primary to-gold-signature text-black-premium shadow-[0_4px_15px_rgba(245,166,35,0.4)]'
                      : 'bg-gold-primary/10 text-gold-primary border border-gold-primary/30'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className={`flex-1 font-semibold text-lg md:text-xl pr-4 transition-colors duration-300 ${
                    openIndex === index ? 'text-gold-primary' : 'text-white group-hover:text-gold-light'
                  }`}>
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gold-primary/20 border border-gold-primary/40'
                        : 'bg-gold-primary/5 border border-gold-primary/20'
                    }`}
                  >
                    <ChevronDown
                      size={20}
                      className={`text-gold-primary transition-all duration-300 ${
                        openIndex === index ? 'drop-shadow-[0_0_8px_rgba(245,166,35,0.6)]' : ''
                      }`}
                    />
                  </motion.div>
                </div>
              </motion.button>

              {/* Answer - Premium Style */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="mx-4 bg-gradient-to-br from-gold-primary/5 via-black-deep/90 to-gold-signature/5 border-x-2 border-b-2 border-gold-primary/30 rounded-b-2xl p-6 shadow-[inset_0_4px_20px_rgba(245,166,35,0.05)]">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-1 bg-gradient-to-b from-gold-primary to-gold-signature rounded-full" />
                        <p className="text-platinum/90 leading-relaxed text-base">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Premium */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-gold-primary/10 via-black-deep/50 to-gold-signature/10 border border-gold-primary/30 rounded-3xl shadow-[0_0_40px_rgba(245,166,35,0.1)]">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-gold-primary" />
              <p className="text-white font-medium text-lg">Não encontrou sua resposta?</p>
            </div>
            <MagneticButton strength={0.3}>
              <Button variant="primary" className="shadow-[0_4px_20px_rgba(245,166,35,0.3)]">
                <MessageCircle className="w-4 h-4 mr-2" />
                Fale com um especialista
              </Button>
            </MagneticButton>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
