import {test, expect} from '@playwright/test';
import { LoginPage } from '../../../pages/loginPage.js';
import { ENV } from '../../../config/envConfig.js';
import { FileHandlePage } from '../../../pages/basic_elements/fileHandlePage.js';


test('File upload test ', async ({page}) => {

    await page.goto(ENV.BASE_URL);  
    const loginPage = new LoginPage(page);
    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );  
    const fileHandlePage = new FileHandlePage(page);
    await fileHandlePage.fileHandle();
});