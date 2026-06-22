import {test, expect} from '@playwright/test';
test.setTimeout(60000);
import { LoginPage } from '../../pages/loginPage.js';
import { ProductsPage } from '../../pages/e-commerce/productsPage.js';
import { CartPage } from '../../pages/e-commerce/cartPage.js';
import { CheckoutPage } from '../../pages/e-commerce/checkoutPage.js';
import { ENV } from '../../config/envConfig.js';

test("Checkout Product", async ({ page }) => {

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
    await productsPage.addToCart();
    await cartPage.openCart();
    await cartPage.verifyProductInCart();
    await checkoutPage.checkout();
    await checkoutPage.fillCheckoutForm("Isha", "Ansari", "India" , "Uttar Pradesh" , "Sahāranpur" , " Hazira Sarai ", "1234567890");
    await checkoutPage.placeOrder();
    
    await checkoutPage.placeOrder();
    const confirmationMessage = await checkoutPage.getConfirmationMessage();
    console.log("Confirmation Message:", confirmationMessage);
    expect(confirmationMessage).toContain("Thank you for your order!");
    await checkoutPage.verifyOrderHistory();

   
});