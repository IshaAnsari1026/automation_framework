# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e-commerce\outOfStock.spec.js >> Checkout Out of Stock Product
- Location: tests\e-commerce\outOfStock.spec.js:7:1

# Error details

```
TypeError: productsPage.addOutOfStockProductToCart is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Logo" [ref=e5] [cursor=pointer]:
        - /url: /home/
        - img "Logo" [ref=e6]
      - navigation [ref=e7]:
        - list [ref=e8]:
          - link "Home" [ref=e9] [cursor=pointer]:
            - /url: /home/
            - listitem [ref=e10]: Home
          - link "Products" [ref=e11] [cursor=pointer]:
            - /url: /products/
            - listitem [ref=e12]: Products
          - link "Cart" [ref=e13] [cursor=pointer]:
            - /url: /cart/
            - listitem [ref=e14]:
              - text: Cart
              - superscript
          - link "Contact" [ref=e15] [cursor=pointer]:
            - /url: /contact/
            - listitem [ref=e16]: Contact
          - link "My Orders" [ref=e17] [cursor=pointer]:
            - /url: /orders/
            - listitem [ref=e18]: My Orders
          - listitem [ref=e19]:
            - button "Logout" [ref=e20] [cursor=pointer]
  - generic [ref=e21]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - paragraph [ref=e25]: Item added successfully🤗 !
        - button "Close" [ref=e26]
      - figure [ref=e27]:
        - img "iPhone" [ref=e28]
      - generic [ref=e29]:
        - generic [ref=e30]:
          - heading "iPhone" [level=2] [ref=e31]
          - paragraph [ref=e32]: "iPhone 17 Pro Max 2 TB: 17.42 cm, Display with Promotion, A19 Pro Chip, Battery Life, Pro Fusion Camera System, Center Stage Front Camera; Silver"
        - generic [ref=e33]:
          - paragraph [ref=e34]: ₹229,900
          - paragraph [ref=e35]: Available
          - generic [ref=e36]:
            - button "Buy Now" [ref=e37] [cursor=pointer]
            - button "Add to cart" [ref=e38] [cursor=pointer]
          - generic [ref=e40]:
            - button "-" [disabled] [ref=e41]
            - generic [ref=e42]: "Qty: 1"
            - button "+" [ref=e43] [cursor=pointer]
    - generic [ref=e45]:
      - generic [ref=e46]:
        - paragraph [ref=e47]: Item added successfully🤗 !
        - button "Close" [ref=e48]
      - figure [ref=e49]:
        - img "Camera" [ref=e50]
      - generic [ref=e51]:
        - generic [ref=e52]:
          - heading "Camera" [level=2] [ref=e53]
          - paragraph [ref=e54]: Canon EOS R10 24.2MP RF-S18-150 F/3.5-6.3 IS STM Mirrorless Camera (APS-C Sendor, 4K UHD Video) for Wedding & Content Creators - Black
        - generic [ref=e55]:
          - paragraph [ref=e56]: ₹102,990
          - paragraph [ref=e57]: Available
          - generic [ref=e58]:
            - button "Buy Now" [ref=e59] [cursor=pointer]
            - button "Add to cart" [ref=e60] [cursor=pointer]
          - generic [ref=e62]:
            - button "-" [disabled] [ref=e63]
            - generic [ref=e64]: "Qty: 1"
            - button "+" [ref=e65] [cursor=pointer]
    - generic [ref=e67]:
      - generic [ref=e68]:
        - paragraph [ref=e69]: This item is currently unavailable☹️ !
        - button "Close" [ref=e70]
      - figure [ref=e71]:
        - img "Keyboard" [ref=e72]
      - generic [ref=e73]:
        - generic [ref=e74]:
          - heading "Keyboard" [level=2] [ref=e75]
          - paragraph [ref=e76]: Wireless Keyboard and Mouse, Vssoplor 2.4GHz Rechargeable Compact Quiet Full-Size Keyboard and Mouse Combo with Nano USB Receiver for Windows, Laptop, PC, Notebook-Black and Rose Gold
        - generic [ref=e77]:
          - paragraph [ref=e78]: ₹8,854
          - paragraph [ref=e79]: Out of Stock
          - generic [ref=e80]:
            - button "Buy Now" [ref=e81] [cursor=pointer]
            - button "Add to cart" [ref=e82] [cursor=pointer]
          - generic [ref=e84]:
            - button "-" [disabled] [ref=e85]
            - generic [ref=e86]: "Qty: 1"
            - button "+" [ref=e87] [cursor=pointer]
    - generic [ref=e89]:
      - generic [ref=e90]:
        - paragraph [ref=e91]: Item added successfully🤗 !
        - button "Close" [ref=e92]
      - figure [ref=e93]:
        - img "Purse" [ref=e94]
      - generic [ref=e95]:
        - generic [ref=e96]:
          - heading "Purse" [level=2] [ref=e97]
          - paragraph [ref=e98]: Carriall Dazzle Women’s Vegan Leather Tote bag | Stylish Handbag for office with Wallet purse, Secure Zip Pockets with Detachable shoulder strap
        - generic [ref=e99]:
          - paragraph [ref=e100]: ₹8,999
          - paragraph [ref=e101]: Available
          - generic [ref=e102]:
            - button "Buy Now" [ref=e103] [cursor=pointer]
            - button "Add to cart" [ref=e104] [cursor=pointer]
          - generic [ref=e106]:
            - button "-" [disabled] [ref=e107]
            - generic [ref=e108]: "Qty: 1"
            - button "+" [ref=e109] [cursor=pointer]
    - generic [ref=e111]:
      - generic [ref=e112]:
        - paragraph [ref=e113]: Item added successfully🤗 !
        - button "Close" [ref=e114]
      - figure [ref=e115]:
        - img "Watch" [ref=e116]
      - generic [ref=e117]:
        - generic [ref=e118]:
          - heading "Watch" [level=2] [ref=e119]
          - paragraph [ref=e120]: Titan Neo Splash Quartz Multifunction Midnight Blue Dial Metallic Blue Stainless Steel Strap Watch for Men - NT1805QM01
        - generic [ref=e121]:
          - paragraph [ref=e122]: ₹5,946
          - paragraph [ref=e123]: Available
          - generic [ref=e124]:
            - button "Buy Now" [ref=e125] [cursor=pointer]
            - button "Add to cart" [ref=e126] [cursor=pointer]
          - generic [ref=e128]:
            - button "-" [disabled] [ref=e129]
            - generic [ref=e130]: "Qty: 1"
            - button "+" [ref=e131] [cursor=pointer]
    - generic [ref=e133]:
      - generic [ref=e134]:
        - paragraph [ref=e135]: Item added successfully🤗 !
        - button "Close" [ref=e136]
      - figure [ref=e137]:
        - img "Mouse" [ref=e138]
      - generic [ref=e139]:
        - generic [ref=e140]:
          - heading "Mouse" [level=2] [ref=e141]
          - paragraph [ref=e142]: Usbkingdom Usbkingdom 2.4GHz Cool Sport Car Shape Wireless Mouse Optical Cordless Mice with USB Receiver for PC Laptop Computer 1600DPI 3 Buttons Purple
        - generic [ref=e143]:
          - paragraph [ref=e144]: ₹2,679
          - paragraph [ref=e145]: Available
          - generic [ref=e146]:
            - button "Buy Now" [ref=e147] [cursor=pointer]
            - button "Add to cart" [ref=e148] [cursor=pointer]
          - generic [ref=e150]:
            - button "-" [disabled] [ref=e151]
            - generic [ref=e152]: "Qty: 1"
            - button "+" [ref=e153] [cursor=pointer]
    - generic [ref=e155]:
      - generic [ref=e156]:
        - paragraph [ref=e157]: Item added successfully🤗 !
        - button "Close" [ref=e158]
      - figure [ref=e159]:
        - img "Shoes" [ref=e160]
      - generic [ref=e161]:
        - generic [ref=e162]:
          - heading "Shoes" [level=2] [ref=e163]
          - paragraph [ref=e164]: U.S. Polo Assn. Mens 2fd-Ruben 3.0 Sneaker U.S. Polo Assn. USPA | Ruben 3.0|Stylish Casual Sneaker Shoes for Man Black
        - generic [ref=e165]:
          - paragraph [ref=e166]: ₹2,393
          - paragraph [ref=e167]: Available
          - generic [ref=e168]:
            - button "Buy Now" [ref=e169] [cursor=pointer]
            - button "Add to cart" [ref=e170] [cursor=pointer]
          - generic [ref=e172]:
            - button "-" [disabled] [ref=e173]
            - generic [ref=e174]: "Qty: 1"
            - button "+" [ref=e175] [cursor=pointer]
    - generic [ref=e177]:
      - generic [ref=e178]:
        - paragraph [ref=e179]: This item is currently unavailable☹️ !
        - button "Close" [ref=e180]
      - figure [ref=e181]:
        - img "Samsung" [ref=e182]
      - generic [ref=e183]:
        - generic [ref=e184]:
          - heading "Samsung" [level=2] [ref=e185]
          - paragraph [ref=e186]: Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silverblue, 12GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life
        - generic [ref=e187]:
          - paragraph [ref=e188]: ₹141,999
          - paragraph [ref=e189]: Out of Stock
          - generic [ref=e190]:
            - button "Buy Now" [ref=e191] [cursor=pointer]
            - button "Add to cart" [ref=e192] [cursor=pointer]
          - generic [ref=e194]:
            - button "-" [disabled] [ref=e195]
            - generic [ref=e196]: "Qty: 1"
            - button "+" [ref=e197] [cursor=pointer]
    - generic [ref=e199]:
      - generic [ref=e200]:
        - paragraph [ref=e201]: Item added successfully🤗 !
        - button "Close" [ref=e202]
      - figure [ref=e203]:
        - img "Wallet" [ref=e204]
      - generic [ref=e205]:
        - generic [ref=e206]:
          - heading "Wallet" [level=2] [ref=e207]
          - paragraph [ref=e208]: BROWN BEAR Wallet for Man, Pure Nappa Wallet for Men Leather Original, Stylish, Certified RFID Protected Slim Purse for Gents with Eight Card Pockets
        - generic [ref=e209]:
          - paragraph [ref=e210]: ₹2,105
          - paragraph [ref=e211]: Available
          - generic [ref=e212]:
            - button "Buy Now" [ref=e213] [cursor=pointer]
            - button "Add to cart" [ref=e214] [cursor=pointer]
          - generic [ref=e216]:
            - button "-" [disabled] [ref=e217]
            - generic [ref=e218]: "Qty: 1"
            - button "+" [ref=e219] [cursor=pointer]
    - generic [ref=e221]:
      - generic [ref=e222]:
        - paragraph [ref=e223]: This item is currently unavailable☹️ !
        - button "Close" [ref=e224]
      - figure [ref=e225]:
        - img "Laptop" [ref=e226]
      - generic [ref=e227]:
        - generic [ref=e228]:
          - heading "Laptop" [level=2] [ref=e229]
          - paragraph [ref=e230]: Lenovo V14 Intel Core i3 13th Gen 14' FHD (1920x1080) Antiglare 250 Nits Thin and Light Laptop (16GB RAM/512GB SSD/Windows 11 Home/Office Home 2024/Iron Grey/1.43 kg), 83A0A0PCIN
        - generic [ref=e231]:
          - paragraph [ref=e232]: ₹48,990
          - paragraph [ref=e233]: Out of Stock
          - generic [ref=e234]:
            - button "Buy Now" [ref=e235] [cursor=pointer]
            - button "Add to cart" [ref=e236] [cursor=pointer]
          - generic [ref=e238]:
            - button "-" [disabled] [ref=e239]
            - generic [ref=e240]: "Qty: 1"
            - button "+" [ref=e241] [cursor=pointer]
  - contentinfo [ref=e243]:
    - generic [ref=e244]: Copyright © SageSyntaxAcademy 2026
  - alert [ref=e245]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage } from '../../pages/loginPage.js';
  3  | import { ProductsPage } from '../../pages/e-commerce/productsPage.js';
  4  | import { CartPage } from '../../pages/e-commerce/cartPage.js';
  5  | import { CheckoutPage } from '../../pages/e-commerce/checkoutPage.js';
  6  | import { ENV } from '../../config/envConfig.js';
  7  | test("Checkout Out of Stock Product", async ({ page }) => {
  8  | 
  9  |     const login = new LoginPage(page);  
  10 |     const productsPage = new ProductsPage(page);
  11 |     const cartPage = new CartPage(page);
  12 |     const checkoutPage = new CheckoutPage(page);
  13 |     await page.goto(ENV.BASE_URL);
  14 |     await login.login(
  15 |         ENV.APP_USERNAME,
  16 |         ENV.APP_PASSWORD
  17 |     ); 
  18 |     await productsPage.goto();
> 19 |     await productsPage.addOutOfStockProductToCart();    
     |                        ^ TypeError: productsPage.addOutOfStockProductToCart is not a function
  20 |     await cartPage.openCart();
  21 |     await cartPage.verifyOutOfStockProductInCart();
  22 |     await cartPage.removeProductFromCart();
  23 |     await expect(cartPage.productName).toBeHidden();
  24 | });
  25 | 
```