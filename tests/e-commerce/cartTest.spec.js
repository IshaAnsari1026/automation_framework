import {ProductsPage} from '../../pages/e-commerce/productsPage.js';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';
import { ENV } from '../../config/envConfig.js';
import { CartPage } from '../../pages/e-commerce/cartPage.js';


test("Open Cart and Verify Product", async ({ page }) => {

    const login = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await page.goto(ENV.BASE_URL);
    await login.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );
    await productsPage.goto();
    await productsPage.addToCart();
    await cartPage.openCart();
    await cartPage.verifyProductInCart();
    await cartPage.removeProductFromCart();
    await expect(cartPage.productName).toBeHidden();
    
  
   
})
