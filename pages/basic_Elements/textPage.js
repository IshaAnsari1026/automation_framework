export class TextPage {
    constructor(page) {
        this.page = page ; 
        this.mainHeading = page.locator(".text-3xl").first();
        this.subHeading = page.locator(".text-2xl").nth(1);
        this.paraLine = page.locator (".p-6").nth(2);
    }


async text(){
    await this.mainHeading.toHaveText("")
}
}