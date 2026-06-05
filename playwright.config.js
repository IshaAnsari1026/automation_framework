import dotenv from 'dotenv';
import { defineConfig } from '@playwright/test';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  retries: 1,

  use: {
    headless: false,
    launchOptions: {
      slowMo: 1000
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL,
     storageState: 'auth/auth.json',
  },

  projects: [
  {
    name: 'setup',
    testMatch: /.*auth\.setup\.spec\.js/
  },

  {
    name: 'chromium',
    dependencies: ['setup'],
    use: {
      browserName: 'chromium',
      storageState: './auth/auth.json'
    }
  }
],

  reporter: [
    ['html'],
    ['list']
  ]
});