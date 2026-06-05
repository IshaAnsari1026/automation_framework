import { test, expect } from '@playwright/test';
import { ENV } from '../../config/envConfig.js';

test.use({
    storageState: './auth/auth.json'
});

test('User is already logged in', async ({ page }) => {

    await page.goto('https://automationpracticehub.com/home');

    console.log(await page.url());

    await expect(page).toHaveURL(/home/);
});
