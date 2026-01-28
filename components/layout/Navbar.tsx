'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils/cn'

interface NavItem {
  label: string
  href: string
  highlight?: boolean
}

const navItems: NavItem[] = [
  { label: 'Cliente', href: '/#client-section' },
  { label: 'Quero Contratar', href: '/#plans', highlight: true },
  { label: 'Canal de Atendimento', href: '/#faq' },
  { label: 'Sobre Nós', href: '/sobre' },
]

/**
 * Premium Navbar Component - SIX Saúde Design System
 *
 * Features:
 * - Sticky header with backdrop blur
 * - Scroll-aware shadow animation
 * - Mobile hamburger menu with smooth transitions
 * - Highlighted CTA button
 *
 * @example
 * <Navbar />
 */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300 ease-premium',
          isScrolled
            ? 'bg-black-premium/90 backdrop-blur-xl border-b border-gold-primary/10 shadow-premium'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Container>
          <nav
            className="flex items-center justify-between h-20 md:h-24"
            role="navigation"
            aria-label="Navegacao principal"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="SIX Saude - Pagina inicial"
            >
              <motion.div
                className="font-display font-bold text-2xl md:text-3xl text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                SIX{' '}
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Saude
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                item.highlight ? (
                  <Button
                    key={item.href}
                    variant="primary"
                    size="sm"
                    className="uppercase tracking-wider"
                    onClick={() => {
                      const element = document.querySelector(item.href)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-platinum hover:text-white',
                      'transition-colors duration-300',
                      'text-sm font-medium tracking-wider uppercase',
                      'relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5',
                      'after:bg-gold-signature after:transition-all after:duration-300',
                      'hover:after:w-full'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50 p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex items-center justify-center"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black-premium/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              className="relative h-full flex flex-col items-center justify-center gap-8 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  {item.highlight ? (
                    <Button
                      variant="primary"
                      size="lg"
                      className="uppercase tracking-wider"
                      onClick={() => {
                        handleNavClick()
                        setTimeout(() => {
                          const element = document.querySelector(item.href)
                          element?.scrollIntoView({ behavior: 'smooth' })
                        }, 300)
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-2xl font-display text-white hover:text-gold-signature transition-colors uppercase tracking-wider"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 md:h-24" />
    </>
  )
}
