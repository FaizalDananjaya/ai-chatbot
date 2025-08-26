// lib/db/db.ts
import 'server-only';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { ChatSDKError } from '../utils/errors';
import { user, chat, document, message, vote, stream } from './schema';

// Pastikan environment variable POSTGRES_URL sudah di-set
const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new ChatSDKError('bad_request:database', 'POSTGRES_URL is not defined');
}

// Membuat client Postgres
const client = postgres(connectionString);

// Inisialisasi Drizzle ORM
export const db = drizzle(client);

// Export schema agar bisa dipakai di file lain
export const schemas = {
  user,
  chat,
  document,
  message,
  vote,
  stream,
};
