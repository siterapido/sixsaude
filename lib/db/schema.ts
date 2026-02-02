/**
 * Database Schema - SIX Saúde CMS
 * Using Drizzle ORM with Neon PostgreSQL
 */

import { pgTable, uuid, text, timestamp, boolean, integer, varchar } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// ==================== USERS ====================
export const users = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    passwordHash: text('password_hash').notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    role: varchar('role', { length: 50 }).default('editor').notNull(),
    avatarUrl: text('avatar_url'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// ==================== CATEGORIES ====================
export const categories = pgTable('categories', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 100 }).notNull(),
    slug: varchar('slug', { length: 100 }).unique().notNull(),
    color: varchar('color', { length: 7 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

// ==================== AUTHORS ====================
export const authors = pgTable('authors', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).unique(),
    role: varchar('role', { length: 100 }),
    avatarUrl: text('avatar_url'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

// ==================== POSTS ====================
export const posts = pgTable('posts', {
    id: uuid('id').primaryKey().defaultRandom(),
    slug: varchar('slug', { length: 255 }).unique().notNull(),
    title: varchar('title', { length: 500 }).notNull(),
    excerpt: text('excerpt'),
    content: text('content'),
    coverImage: text('cover_image'),
    categoryId: uuid('category_id').references(() => categories.id),
    authorId: uuid('author_id').references(() => authors.id),
    publishedAt: timestamp('published_at'),
    readingTime: integer('reading_time').default(5),
    featured: boolean('featured').default(false),
    status: varchar('status', { length: 20 }).default('draft').notNull(), // draft, published, archived
    aiGenerated: boolean('ai_generated').default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// ==================== POST TAGS ====================
export const postTags = pgTable('post_tags', {
    id: uuid('id').primaryKey().defaultRandom(),
    postId: uuid('post_id').references(() => posts.id, { onDelete: 'cascade' }).notNull(),
    tag: varchar('tag', { length: 100 }).notNull(),
})

// ==================== RELATIONS ====================
export const postsRelations = relations(posts, ({ one, many }) => ({
    category: one(categories, {
        fields: [posts.categoryId],
        references: [categories.id],
    }),
    author: one(authors, {
        fields: [posts.authorId],
        references: [authors.id],
    }),
    tags: many(postTags),
}))

export const categoriesRelations = relations(categories, ({ many }) => ({
    posts: many(posts),
}))

export const authorsRelations = relations(authors, ({ many }) => ({
    posts: many(posts),
}))

export const postTagsRelations = relations(postTags, ({ one }) => ({
    post: one(posts, {
        fields: [postTags.postId],
        references: [posts.id],
    }),
}))

// ==================== TYPES ====================
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert
export type Author = typeof authors.$inferSelect
export type NewAuthor = typeof authors.$inferInsert
export type Post = typeof posts.$inferSelect
export type NewPost = typeof posts.$inferInsert
export type PostTag = typeof postTags.$inferSelect
export type NewPostTag = typeof postTags.$inferInsert
