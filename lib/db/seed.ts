/**
 * Seed Script - Initialize database with default data
 * Run with: npx tsx lib/db/seed.ts
 */

import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { hashPassword } from '../auth'
import * as schema from './schema'

async function seed() {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not set')
    }

    const sql = neon(process.env.DATABASE_URL)
    const db = drizzle(sql, { schema })

    console.log('🌱 Seeding database...')

    // Create categories
    console.log('Creating categories...')
    const categoriesData = [
        { name: 'Saúde', slug: 'saude', color: '#10D86F' },
        { name: 'Planos', slug: 'planos', color: '#F5A623' },
        { name: 'Bem-estar', slug: 'bem-estar', color: '#6366F1' },
        { name: 'Institucional', slug: 'institucional', color: '#FFB800' },
        { name: 'Dicas', slug: 'dicas', color: '#EC4899' },
    ]

    for (const cat of categoriesData) {
        await db.insert(schema.categories).values(cat).onConflictDoNothing()
    }
    console.log('✅ Categories created')

    // Create default author
    console.log('Creating default author...')
    await db.insert(schema.authors).values({
        name: 'Equipe SIX Saúde',
        email: 'blog@sixsaude.com.br',
        role: 'Comunicação',
    }).onConflictDoNothing()
    console.log('✅ Default author created')

    // Create admin user
    console.log('Creating admin user...')
    const adminPassword = await hashPassword('admin123') // Change this!
    await db.insert(schema.users).values({
        email: 'admin@sixsaude.com.br',
        passwordHash: adminPassword,
        name: 'Administrador',
        role: 'admin',
    }).onConflictDoNothing()
    console.log('✅ Admin user created (email: admin@sixsaude.com.br, password: admin123)')

    console.log('')
    console.log('🎉 Database seeded successfully!')
    console.log('')
    console.log('⚠️  IMPORTANT: Change the admin password after first login!')
}

seed().catch(console.error)
