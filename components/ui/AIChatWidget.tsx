'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Send, MessageCircle } from 'lucide-react'
import { useChat, type UIMessage } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'

/**
 * AI Chat Widget - SIX Saúde Design System
 *
 * Premium floating chat widget with:
 * - Yellow theme matching brand colors
 * - AI icon with pulse animation
 * - Expandable chat panel
 * - Streaming AI responses
 * - WhatsApp handoff option
 */
export const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({ api: '/api/chat/support' }),
    })

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() && status !== 'streaming') {
            sendMessage({ role: 'user', parts: [{ type: 'text', text: input }] })
            setInput('')
        }
    }

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
            'Olá! Vim pelo chat do site da SIX Saúde e gostaria de falar com um especialista.'
        )
        window.open(`https://wa.me/5511999999999?text=${message}`, '_blank', 'noopener,noreferrer')
    }

    const getMessageText = (msg: UIMessage): string => {
        return msg.parts
            .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
            .map((p) => p.text)
            .join('')
    }

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-40 group"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 1,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Abrir chat de IA"
                title="Assistente Virtual SIX Saúde"
            >
                {/* Pulse ring effect */}
                <motion.span
                    className="absolute inset-0 rounded-full bg-[#F6C200]"
                    animate={{
                        scale: [1, 1.4, 1.4],
                        opacity: [0.4, 0, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeOut',
                    }}
                />

                {/* Secondary pulse */}
                <motion.span
                    className="absolute inset-0 rounded-full bg-[#F6C200]"
                    animate={{
                        scale: [1, 1.2, 1.2],
                        opacity: [0.3, 0, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeOut',
                        delay: 0.3,
                    }}
                />

                {/* Main button */}
                <span
                    className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#F6C200] text-black shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    style={{
                        boxShadow: '0 4px 20px rgba(246, 194, 0, 0.4)',
                    }}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.span
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} strokeWidth={2} />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="sparkles"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Sparkles size={28} strokeWidth={2} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </span>
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed bottom-24 right-6 z-40 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-150px)] bg-[#0A0A0A] border border-[#F6C200]/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        style={{
                            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(246, 194, 0, 0.1)',
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#F6C200] to-[#E5B400] text-black">
                            <div className="flex items-center gap-2">
                                <Sparkles size={20} />
                                <div>
                                    <h3 className="font-semibold text-sm">Assistente SIX Saúde</h3>
                                    <p className="text-xs opacity-75">Online • Responde em segundos</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-black/10 rounded-full transition-colors"
                                aria-label="Fechar chat"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {/* Welcome message */}
                            {messages.length === 0 && (
                                <div className="bg-[#1A1A1A] rounded-lg p-3 text-sm text-gray-300">
                                    <p className="mb-2">
                                        👋 Olá! Sou o assistente virtual da <strong className="text-[#F6C200]">SIX Saúde</strong>.
                                    </p>
                                    <p>Como posso ajudar você hoje?</p>
                                </div>
                            )}

                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${msg.role === 'user'
                                            ? 'bg-[#F6C200] text-black'
                                            : 'bg-[#1A1A1A] text-gray-200'
                                            }`}
                                    >
                                        {getMessageText(msg)}
                                    </div>
                                </div>
                            ))}

                            {status === 'streaming' && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1A1A1A] rounded-lg px-3 py-2">
                                        <motion.div
                                            className="flex gap-1"
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {[0, 1, 2].map((i) => (
                                                <motion.span
                                                    key={i}
                                                    className="w-2 h-2 bg-[#F6C200] rounded-full"
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        delay: i * 0.2,
                                                    }}
                                                />
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* WhatsApp Button */}
                        <div className="px-4 pb-2">
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-gray-400 hover:text-[#25D366] transition-colors"
                            >
                                <MessageCircle size={14} />
                                Prefere falar com um humano? Clique aqui
                            </button>
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-3 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Digite sua mensagem..."
                                    className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F6C200]/50 transition-colors"
                                    disabled={status === 'streaming'}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || status === 'streaming'}
                                    className="px-3 py-2 bg-[#F6C200] text-black rounded-lg hover:bg-[#E5B400] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Enviar mensagem"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
