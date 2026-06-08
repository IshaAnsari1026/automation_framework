import { test, expect } from '../../fixtures/pageFixtures';
import { ENV } from '../../config/envConfig.js';
import loginData from '../../test-data/loginData.json' with { type: 'json' };
import { LoginPage } from '../../pages/loginPage.js';


test.beforeEach(async ({ page }) => {
    console.log("Launching Application");
});

test.afterEach(async ({ page }) => {
    console.log("Test Execution Completed");
});
test.describe("Login Functionality Tests" , () => {   
 test('@smoke Login Test', async ({ page, loginPage }) => {

    await page.goto('/');

    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );
    await expect(page.locator('text=Login Successful')).toBeVisible();
    console.log("Login Sucessful");
    await expect(page).toHaveURL(ENV.BASE_URL1);
    console.log("Current URL after login:", await page.url());  
 });

 test("Invalid Login Test", async({page})=>{
      const loginPage = new LoginPage(page);    
      await page.goto(ENV.BASE_URL);
        await loginPage.login(
            loginData.data.invalid_username,
            loginData.data.invalid_password
        );
        await expect(page.locator('text=Login Failed')).toBeVisible();
        console.log("Login Failed");
 });
});