import { test , expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { ENV } from '../../config/envConfig.js';
test('Authenticate User', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto(ENV.BASE_URL);

    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );

    console.log("URL after login:", await page.url());
    await expect(page).toHaveURL(ENV.BASE_URL1);

    await page.context().storageState({
        path: './auth/auth.json'
    });
});
console.log("Auth state saved");