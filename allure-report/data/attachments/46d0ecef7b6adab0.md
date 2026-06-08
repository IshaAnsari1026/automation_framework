# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e-commerce\outOfStock.spec.js >> Checkout Out of Stock Product
- Location: tests\e-commerce\outOfStock.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.card-title')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e5]:
        - link "Logo" [ref=e7] [cursor=pointer]:
          - /url: /home/
          - img "Logo" [ref=e8]
        - navigation [ref=e9]:
          - list [ref=e10]:
            - link "Home" [ref=e11] [cursor=pointer]:
              - /url: /home/
              - listitem [ref=e12]: Home
            - link "Products" [ref=e13] [cursor=pointer]:
              - /url: /products/
              - listitem [ref=e14]: Products
            - link "Cart" [ref=e15] [cursor=pointer]:
              - /url: /cart/
              - listitem [ref=e16]:
                - text: Cart
                - superscript
            - link "Contact" [ref=e17] [cursor=pointer]:
              - /url: /contact/
              - listitem [ref=e18]: Contact
            - link "My Orders" [ref=e19] [cursor=pointer]:
              - /url: /orders/
              - listitem [ref=e20]: My Orders
            - listitem [ref=e21]:
              - button "Logout" [ref=e22] [cursor=pointer]
    - generic [ref=e24]:
      - img [ref=e26]
      - paragraph [ref=e28]:
        - text: Your cart is Empty🙄,
        - text: Let's add something😊
      - button "Browse" [ref=e29] [cursor=pointer]
    - contentinfo [ref=e31]:
      - generic [ref=e32]: Copyright © SageSyntaxAcademy 2026
```

# Test source

```ts
  1  | export class CartPage {
  2  |  
  3  |     constructor(page) {
  4  |         this.page = page ;
  5  |         this.cartLink = page.getByRole('link', {name : 'Cart'});
  6  |         this.productName= page.locator(".card-title");
  7  |         this.removeButton = page.getByRole('button', {name : 'Remove'});
  8  | 
  9  |     }
  10 | 
  11 |     async openCart(){
  12 |         await this.cartLink.click();
  13 |     }
  14 | 
  15 |     async verifyProductInCart(){
> 16 |         const productName = await this.productName.textContent();
     |                                                    ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  17 |         console.log(productName);
  18 |     }
  19 | 
  20 |     async removeProductFromCart(){
  21 |         await this.removeButton.click();
  22 |         
  23 |     }
  24 | 
  25 | 
  26 | }
```