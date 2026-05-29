import{test , expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import dotenv from 'dotenv';
dotenv.config()
 test("Login Test" , async ({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto(process.env.BASE_URL);
    console.log(process.env.APP_USERNAME);
    console.log(process.env.APP_PASSWORD);
    await loginPage.Login();
 })