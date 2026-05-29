require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  use: {
    browserName: process.env.BROWSER,
    headless: false,
    launchOptions: {
      slowMo: 1000
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL
  },

  reporter: [
    ['html'],
    ['list']
  ]
});