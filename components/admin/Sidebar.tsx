'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth/context'
import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'
import {
    LayoutDashboard,
    FileText,
    FolderOpen,
    Sparkles,
    Settings,
    LogOut,
    PenSquare,
} from 'lucide-react'

const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/posts', label: 'Posts', icon: FileText },
    { href: '/admin/posts/new', label: 'Novo Post', icon: PenSquare },
    { href: '/admin/categories', label: 'Categorias', icon: FolderOpen },
    { href: '/admin/ai-generator', label: 'Gerador IA', icon: Sparkles },
]

export function Sidebar() {
    const pathname = usePathname()
    const { user, logout } = useAuth()

    const handleLogout = async () => {
        await logout()
        window.location.href = '/admin/login'
    }

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-charcoal border-r border-white/10 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
                <Link href="/admin" className="flex items-center gap-3">
                    <div className="relative w-28 h-9">
                        <Image
                            src="/Logos/SIX SAÚDE LOGO FINAL - Branca.png"
                            alt="SIX Saúde"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-platinum text-xs">CMS Admin</p>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-4">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== '/admin' && pathname.startsWith(item.href))

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                                        'hover:bg-white/5',
                                        isActive
                                            ? 'bg-gold/10 text-gold border border-gold/20'
                                            : 'text-platinum'
                                    )}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="ml-auto w-1.5 h-1.5 rounded-full bg-gold"
                                        />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* User Section */}
            <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 mb-3">
                    <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="text-gold font-medium">
                            {user?.name?.charAt(0).toUpperCase() || 'U'}
                        </span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{user?.name}</p>
                        <p className="text-platinum text-xs truncate">{user?.email}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Link
                        href="/admin/settings"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-platinum hover:bg-white/10 hover:text-white transition-colors"
                    >
                        <Settings className="w-4 h-4" />
                        <span className="text-sm">Config</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm">Sair</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}
