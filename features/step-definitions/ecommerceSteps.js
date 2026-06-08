import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';

import { LoginPage } from '../../pages/loginPage.js';
import { ProductsPage } from '../../pages/e-commerce/productsPage.js';
import { ENV } from '../../config/envConfig.js';
import { CartPage } from '../../pages/e-commerce/cartPage.js';
import { CheckoutPage } from '../../pages/e-commerce/checkoutPage.js';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60000);





Given('user is logged in', async function () {

    await this.page.goto(ENV.BASE_URL);

    const loginPage = new LoginPage(this.page);
    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );

});

When('user opens products page', async function () {
    const productsPage = new ProductsPage(this.page);
    await productsPage.goto();

});

When('user adds a product to cart', async function () {

    const productsPage = new ProductsPage(this.page);

    await productsPage.addToCart();

});
Then('product should be added successfully', async function () {

    const productsPage = new ProductsPage(this.page);

    const count = await productsPage.getCartCount();

    console.log(count);

});


Given('user has added a product to cart', async function () {

    const loginPage = new LoginPage(this.page);
    const productsPage = new ProductsPage(this.page);

    await this.page.goto(ENV.BASE_URL);

    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );

    await productsPage.goto();

    await productsPage.addToCart();

});
When('user opens cart page', async function () {

    const cartPage = new CartPage(this.page);

    await cartPage.openCart();

});
Then('product should be visible in cart', async function () {

    const cartPage = new CartPage(this.page);

    await cartPage.verifyProductInCart();

});


Given('user has a product in cart', async function () {

    const loginPage = new LoginPage(this.page);
    const productsPage = new ProductsPage(this.page);
    const cartPage = new CartPage(this.page);

    await this.page.goto(ENV.BASE_URL);

    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );

    await productsPage.goto();

    await productsPage.addToCart();

    await cartPage.openCart();

});


When('user removes the product', async function () {

    const cartPage = new CartPage(this.page);

    await cartPage.removeProductFromCart();

});

Then('product should be removed successfully', async function () {

    const cartPage = new CartPage(this.page);

   await expect(cartPage.productName).toBeHidden();

});


Given('user is on products page', async function () {

    const loginPage = new LoginPage(this.page);
    const productsPage = new ProductsPage(this.page);

    await this.page.goto(ENV.BASE_URL);

    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );

    await productsPage.goto();

});

When('user tries to add an out of stock product', async function () {

    const productsPage = new ProductsPage(this.page);

    this.message = await productsPage.outOfProduct();

    console.log(this.message);

});

Then('an unavailable product message should be displayed', async function () {

    expect(this.message)
        .toContain('currently unavailable');

});

When('user proceeds to checkout', async function () {

    const cartPage = new CartPage(this.page);
    const checkoutPage = new CheckoutPage(this.page);

    await cartPage.openCart();

    console.log("After open cart:", this.page.url());

    await checkoutPage.checkout();

    console.log("After checkout:", this.page.url());

});

When('user enters valid checkout details', async function () {

    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.fillCheckoutForm(
        "Isha",
        "Ansari",
        "India",
        "Uttar Pradesh",
        "Sahāranpur",
        "Hazira Sarai",
        "1234567890"
    );
});
    Then('checkout should be completed successfully', async function () {

    await expect(this.page).toHaveURL(
        "https://automationpracticehub.com/review/"
    );

});

Given('user has completed checkout', async function () {

    const loginPage = new LoginPage(this.page);
    const productsPage = new ProductsPage(this.page);
    const cartPage = new CartPage(this.page);
    const checkoutPage = new CheckoutPage(this.page);

    await this.page.goto(ENV.BASE_URL);

    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );

    await productsPage.goto();

    await productsPage.addToCart();

    await cartPage.openCart();

    await checkoutPage.checkout();

    await checkoutPage.fillCheckoutForm(
        "Isha",
        "Ansari",
        "India",
        "Uttar Pradesh",
        "Sahāranpur",
        "Hazira Sarai",
        "1234567890"
    );
});

When('user places the order', async function () {

    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.placeOrder();

});

Then('order should be placed successfully', async function () {

    await expect(this.page).toHaveURL(
        "https://automationpracticehub.com/success/"
    );

});

Given('user has placed an order', async function () {

    const loginPage = new LoginPage(this.page);
    const productsPage = new ProductsPage(this.page);
    const cartPage = new CartPage(this.page);
    const checkoutPage = new CheckoutPage(this.page);

    await this.page.goto(ENV.BASE_URL);

    await loginPage.login(
        ENV.APP_USERNAME,
        ENV.APP_PASSWORD
    );

    await productsPage.goto();

    await productsPage.addToCart();

    await cartPage.openCart();

    await checkoutPage.checkout();

    await checkoutPage.fillCheckoutForm(
        "Isha",
        "Ansari",
        "India",
        "Uttar Pradesh",
        "Sahāranpur",
        "Hazira Sarai",
        "1234567890"
    );

    await checkoutPage.placeOrder();

});

When('user opens My Orders page', async function () {

    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.browse.click();

    await checkoutPage.myOrders.click();

});

Then('ordered product should be visible in order history', async function () {

    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.verifyOrderHistory();

});
