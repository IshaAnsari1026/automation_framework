import { expect } from "@playwright/test";
export class CheckoutPage{
    constructor (page){
        this.page = page ;
        this.checkoutButton = page.getByRole('button', {name : 'Checkout'});
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.countryInput = page.locator(".select-bordered").first();
        this.stateInput = page.locator(".select-bordered").nth(1);
        this.cityInput = page.locator(".select-bordered").nth(2);
        this.addressInput = page.getByPlaceholder("Address 1");
        this.phoneInput = page.getByPlaceholder('Phone');
        this.checkbox1 = page.locator("input[type = 'checkbox']").nth(0);
        this.checkbox2 = page.locator("input[type = 'checkbox']").nth(1);
        this.continueButton = page.getByText("Continue");
        this.orderItemVerify = page.locator(".font-semibold");
        this.placeOrderButton = page.getByRole('button', {name : 'Place Order'});
        this.message = page.locator(".mb-8");
        this.browse = page.getByRole('button', {name : 'Browse'});
        this.myOrders = page.getByRole('link', {name : 'My Orders'});
        this.continueShoppingButton = page.getByRole('button', {name : 'Continue Shopping'});

    }
    async checkout(){
        await this.checkoutButton.click();
    }

    async fillCheckoutForm(firstName, lastName, country, state, city, address, phone) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.countryInput.selectOption(country);
        await this.stateInput.selectOption(state);
        await this.cityInput.selectOption(city);
        await this.addressInput.fill(address);
        await this.phoneInput.fill(phone);
        await this.checkbox1.click();
        await this.checkbox2.click();
        console.log(
    "Continue Enabled:",
    await this.continueButton.isEnabled()
);
        await this.continueButton.click();
        await expect(this.page).toHaveURL("https://automationpracticehub.com/review/");;
        await expect(this.orderItemVerify).toBeVisible();  
        await this.placeOrderButton.click();
        await expect(this.page).toHaveURL("https://automationpracticehub.com/success/");
        await expect(this.message).toHaveText("Order Placed 🎉");
        await this.browse.click();
        await expect(this.page).toHaveURL("https://automationpracticehub.com/products/");
        await this.myOrders.click();
        await expect(this.page).toHaveURL("https://automationpracticehub.com/orders/");
        await expect(this.page.locator(".rounded-2xl")).toContainText("iPhone");
        await this.continueShoppingButton.click();
        await expect(this.page).toHaveURL("https://automationpracticehub.com/products/");


    }


}
    