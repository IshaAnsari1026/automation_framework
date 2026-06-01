import{test , expect} from '@playwright/test'
import {LoginPage} from '../../pages/LoginPage'
import loginData from '../../test-data/loginData.json';
import dotenv from 'dotenv';
dotenv.config()
test.describe("Login Functionality Tests" , () => {   
 test("Valid Login Test" , async ({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto(process.env.BASE_URL);
   await loginPage.login(
    process.env.APP_USERNAME,
    process.env.APP_PASSWORD
    );
    await expect(page.locator('text=Login Successful')).toBeVisible();
    console.log("Login Sucessful");
    await expect(page).toHaveURL(process.env.BASE_URL1);
 });

 test("Invalid Login Test", async({page})=>{
       const loginPage = new LoginPage(page);
        await page.goto(process.env.BASE_URL);
        await loginPage.login(
            loginData.data.invalid_username,
            loginData.data.invalid_password
        );
        await expect(page.locator('text=Login Failed')).toBeVisible();
        console.log("Login Failed");
 });
});