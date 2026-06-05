import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';
import { ProductsPage } from '../../pages/e-commerce/productsPage.js';
import { ENV } from '../../config/envConfig.js';


test.describe('E-commerce Application', () => {
  
let loginPage;
let productsPage;
test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
   productsPage = new ProductsPage(page);

    await page.goto(ENV.BASE_URL);

});

test('Add to Cart', async ({ page }) => {

    console.log("Opening Login Page");

    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );

    console.log("Login Done");

    console.log("Opening Products Page");

    await productsPage.goto();
  

    await productsPage.quantityOfProduct();
     console.log("Increase quantity");

    await productsPage.addToCart();

    console.log("Test Completed");

    const count = await productsPage.getCartCount();

    console.log("Cart Text:", count);

    await productsPage.outOfProduct();

    // await productsPage.verifyProductInCart();
 

});



});

