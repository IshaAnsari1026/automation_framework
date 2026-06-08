import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';
import { ProductsPage } from '../../pages/e-commerce/productsPage.js';
import { CartPage } from '../../pages/e-commerce/cartPage.js';
import { CheckoutPage } from '../../pages/e-commerce/checkoutPage.js';
import { ENV } from '../../config/envConfig.js';
test("Checkout Out of Stock Product", async ({ page }) => {

    const login = new LoginPage(page);  
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await page.goto(ENV.BASE_URL);
    await login.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    ); 
    await productsPage.goto();
    await productsPage.outOfProduct();    
    await cartPage.openCart();
});
