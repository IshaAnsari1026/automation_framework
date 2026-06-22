import { BasePage } from './basePage.js';
export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.usernameInput = page.locator ("#username");
        this.passwordInput = page.locator ("#password");
        this.dropdown = page.locator("select.border-2");
    this.radioButton = page.locator("#user");
    this.checkBox = page.locator("#terms");
    this.signInButton = page.getByRole("button" , { name : "Sign In "});
}
async login(username,password){
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.dropdown.click();
     await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.dropdown.selectOption("Consultant");
    this.page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
});
    await this.radioButton.click();
   
    await this.checkBox.check();
    await this.signInButton.click();
    
        }
}
