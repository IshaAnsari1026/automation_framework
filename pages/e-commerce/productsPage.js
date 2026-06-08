export class ProductsPage{
    constructor(page){
        this.page = page ;
        this.productTitle = page.getByRole('heading', {name : 'iPhone'});
        this.addToCartButton =page.locator(".btn-primary");
        this.popUpMessage = page.locator(".text-gray-800");
        this.cartBadge = page.getByRole('link', { name: 'Cart' });
       this.quantityInputIncrease = page.getByRole('button', { name: '+' }).first();
        this.quantityInput = page.locator("span.text-gray-700");
        this.outOfStockProduct = page.getByRole('heading', { name: 'Keyboard' });

    }
    async goto(){
        await this.page.goto("https://automationpracticehub.com/products/")
    }

    async quantityOfProduct() {
    console.log("Clicking + button");
    await this.quantityInputIncrease.click();
    console.log("+ button clicked");
}

async getQuantity() {
    console.log(
        await this.quantityInput.allTextContents()
    );
}

    async addToCart(){
        await this.productTitle.click();
        await this.addToCartButton.nth(0).click();
        await this.page.waitForSelector(".text-gray-800");
        const message = await this.popUpMessage.first().textContent();
        console.log(message);
}
async getCartCount() {

    console.log(
        await this.cartBadge.count()
    );

    console.log(
        await this.cartBadge.allTextContents()
    );

    return await this.cartBadge.textContent();
       

    }
    

   async outOfProduct(){

    await this.outOfStockProduct.click();

    await this.addToCartButton.nth(2).click();

    await this.page.waitForSelector(".text-gray-800");

    return await this.popUpMessage.nth(2).textContent();

}

      
}

