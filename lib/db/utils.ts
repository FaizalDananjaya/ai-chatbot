// lib/db/utils.ts
import { generateId } from 'ai';
import { genSaltSync, hashSync } from 'bcrypt-ts';

/**
 * Generate hashed password
 */
export function generateHashedPassword(password: string) {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
}

/**
 * Generate dummy password for guest users
 */
export function generateDummyPassword() {
  const password = generateId();
  return generateHashedPassword(password);
}
