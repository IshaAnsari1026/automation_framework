export class ContactPage {
    constructor(page) {
        this.page = page;
        this.contactLink =page.getByRole("link" , {name: "Contact"});
        this.nameInput = page.locator("#username");
        this.emailInput = page.locator("#email")
        this.messageInput = page.locator("#message");
        this.genderSelect = page.locator(".border-2").nth(3);
        this.checkbox =page.locator("#report");
        this.submitButton =page.getByRole("button", {name: "Submit"});
        this.successMessage = page.locator(".shadow-lg").nth(1);
    }
 async fillContactForm (name , email , message){
    await this.contactLink.click();
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
    await this.genderSelect.selectOption("Female");
    await this.checkbox.check();
    await this.submitButton.click();    
 }


}