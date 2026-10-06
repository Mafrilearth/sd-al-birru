import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

// Users table for NextAuth
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  role: text('role').default('user'), // 'admin' or 'user'
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Accounts table for NextAuth (OAuth if needed)
export const accounts = pgTable('accounts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('userId').notNull().references(() => users.id, { onDelete: 'cascade' }),
  type: text('type').notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('providerAccountId').notNull(),
  refresh_token: text('refresh_token'),
  access_token: text('access_token'),
  expires_at: timestamp('expires_at', { mode: 'date' }),
  token_type: text('token_type'),
  scope: text('scope'),
  id_token: text('id_token'),
  session_state: text('session_state'),
});

// Sessions table for NextAuth
export const sessions = pgTable('sessions', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: uuid('userId').notNull().references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

// Verification tokens table for NextAuth
export const verificationTokens = pgTable('verificationToken', {
  identifier: text('identifier').notNull(),
  token: text('token').notNull(),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

// Example table for CMS (News / Articles)
export const news = pgTable('news', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  authorId: uuid('authorId').references(() => users.id, { onDelete: 'set null' }),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Pendaftaran PPDB Table (Admissions Form)
// Dirancang dengan filosofi Hick's Law: Hanya meminta data yang absolut krusial di tahap awal pendaftaran
export const ppdbRegistrations = pgTable('ppdb_registrations', {
  id: uuid('id').primaryKey().defaultRandom(),
  registrationNumber: text('registration_number').notNull().unique(), // Format: PPDB26-XXXX
  studentName: text('student_name').notNull(),
  parentName: text('parent_name').notNull(),
  whatsappNumber: text('whatsapp_number').notNull(), // Kontak krusial untuk follow-up
  previousSchool: text('previous_school'), // Asal sekolah TK/PAUD (opsional di awal)
  status: text('status').default('PENDING').notNull(), // PENDING, REVIEWED, ACCEPTED, REJECTED
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
