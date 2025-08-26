// lib/constants.ts
import { generateDummyPassword } from './db/utils.node';

// Environment flags
export const isProductionEnvironment = process.env.NODE_ENV === 'production';
export const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';
export const isTestEnvironment = Boolean(
  process.env.PLAYWRIGHT_TEST_BASE_URL ||
    process.env.PLAYWRIGHT ||
    process.env.CI_PLAYWRIGHT
);

// Regex untuk mendeteksi user guest
export const guestRegex = /^guest-\d+$/;

// Dummy password untuk user guest
export const DUMMY_PASSWORD = generateDummyPassword();
