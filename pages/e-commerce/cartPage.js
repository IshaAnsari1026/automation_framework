export class CartPage {
 
    constructor(page) {
        this.page = page ;
        this.cartLink = page.getByRole('link', {name : 'Cart'});
        this.productName= page.locator(".card-title");
        this.removeButton = page.getByRole('button', {name : 'Remove'});

    }

    async openCart(){
        await this.cartLink.click();
    }

    async verifyProductInCart(){
        const productName = await this.productName.first().textContent();
        console.log(productName);
    }

    async removeProductFromCart(){
        await this.removeButton.click();
        
    }


}