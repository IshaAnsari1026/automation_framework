import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';
import { ENV } from '../../config/envConfig.js';    
import {ContactPage} from '../../pages/contactPage.js';


test('Contact form should be submitted successfully', async ({page}) => {

    await page.goto(ENV.BASE_URL);  
    const loginPage = new LoginPage(page);
    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );  
    const contactPage = new ContactPage(page);
    await contactPage.fillContactForm("Isha", "ansariisha1026@gmail.com", "This is a test message.");   
    await expect(contactPage.successMessage).toBeVisible();
    await expect(contactPage.successMessage).toHaveText("Successfully submitted 🎉");
});