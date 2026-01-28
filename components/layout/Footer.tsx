'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils/cn'

/**
 * Footer Component - SIX Saúde Design System
 *
 * Premium footer with:
 * - 5 columns: Brand, Links, Legal, Contact, Social
 * - ANS badge and certifications
 * - Animated hover states
 * - Responsive grid layout
 *
 * @example
 * <Footer />
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Navegacao',
      links: [
        { label: 'Sou Cliente', href: '/#client-section' },
        { label: 'Quero Contratar', href: '/#plans' },
        { label: 'Canal de Atendimento', href: '/#faq' },
        { label: 'Sobre Nos', href: '/sobre' },
        { label: 'FAQ', href: '/#faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Politica de Privacidade', href: '/privacidade' },
        { label: 'Termos de Uso', href: '/termos' },
        { label: 'Politica de Cookies', href: '/cookies' },
        { label: 'LGPD', href: '/lgpd' },
      ],
    },
  ]

  const contactInfo = [
    { icon: MessageCircle, label: 'WhatsApp', value: '(11) 99999-9999', href: 'https://wa.me/5511999999999' },
    { icon: Mail, label: 'E-mail', value: 'contato@sixsaude.com.br', href: 'mailto:contato@sixsaude.com.br' },
    { icon: Phone, label: 'Telefone', value: '0800 000 0000', href: 'tel:08000000000' },
  ]

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/sixsaude' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/sixsaude' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/sixsaude' },
  ]

  const certifications = [
    { label: 'ANS', description: 'Registrada na ANS' },
    { label: 'SSL', description: 'Conexao Segura' },
    { label: 'LGPD', description: 'Em conformidade' },
  ]

  return (
    <footer className="relative bg-black-premium border-t border-gray-border">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-separator" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-gold-signature/50 to-transparent" />

      <Container>
        {/* Main Footer Content */}
        <div className="pt-16 md:pt-20 pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand Section */}
            <motion.div
              className="sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <Link href="/" className="inline-block mb-4">
                <h3 className="font-display font-bold text-2xl text-white">
                  SIX <span className="text-gradient">Saude</span>
                </h3>
              </Link>
              <p className="text-platinum text-sm leading-relaxed mb-6">
                Cuidando da sua saude com transparencia, dedicacao e a tecnologia que voce merece.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'w-10 h-10 rounded-full',
                        'flex items-center justify-center',
                        'bg-white/5 border border-gray-border',
                        'text-platinum hover:text-gold-signature',
                        'hover:bg-gold-signature/10 hover:border-gold-signature/40',
                        'hover:shadow-[0_0_15px_rgba(245,166,35,0.2)]',
                        'transition-all duration-300'
                      )}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Links Columns */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.05 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-platinum hover:text-gold-signature transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Contato
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <li key={info.label}>
                      <a
                        href={info.href}
                        className="flex items-start gap-3 group"
                      >
                        <Icon className="w-5 h-5 text-gold-signature flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="text-platinum/70 text-xs uppercase tracking-wide mb-0.5">
                            {info.label}
                          </p>
                          <p className="text-white font-medium group-hover:text-gold-signature transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Certificacoes
              </h4>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.label}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2',
                      'bg-gold-signature/5 border border-gold-signature/20 rounded-lg',
                      'transition-all duration-300 hover:border-gold-signature/40 hover:bg-gold-signature/10'
                    )}
                  >
                    <span className="w-8 h-8 rounded-md bg-gold-signature/15 border border-gold-signature/30 flex items-center justify-center">
                      <span className="text-gold-signature text-xs font-bold">
                        {cert.label}
                      </span>
                    </span>
                    <span className="text-platinum text-xs">
                      {cert.description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 py-6 md:py-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Copyright */}
            <p className="text-platinum/70 text-sm text-center md:text-left">
              {currentYear} SIX Saude Administradora de Beneficios. Todos os direitos reservados.
            </p>

            {/* ANS Registration */}
            <p className="text-platinum/50 text-xs text-center md:text-right">
              Registro ANS: 00.0000/00-0 | CNPJ: 00.000.000/0001-00
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}
