# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\loginTest.spec.js >> Login Functionality Tests >> Invalid Login Test
- Location: tests\smoke\loginTest.spec.js:28:2

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/pageFixtures';
  2  | import { ENV } from '../../config/envConfig.js';
  3  | import loginData from '../../test-data/loginData.json' with { type: 'json' };
  4  | 
  5  | 
  6  | test.beforeEach(async ({ page }) => {
  7  |     console.log("Launching Application");
  8  | });
  9  | 
  10 | test.afterEach(async ({ page }) => {
  11 |     console.log("Test Execution Completed");
  12 | });
  13 | test.describe("Login Functionality Tests" , () => {   
  14 |  test('@smoke Login Test', async ({ page, loginPage }) => {
  15 | 
  16 |     await page.goto('/');
  17 | 
  18 |     await loginPage.login(
  19 |         ENV.APP_USERNAME,
  20 |         ENV.APP_PASSWORD
  21 |     );
  22 |     await expect(page.locator('text=Login Successful')).toBeVisible();
  23 |     console.log("Login Sucessful");
  24 |     await expect(page).toHaveURL(ENV.BASE_URL1);
  25 |     console.log("Current URL after login:", await page.url());  
  26 |  });
  27 | 
  28 |  test("Invalid Login Test", async({page})=>{
> 29 |       const loginPage = new LoginPage(page);    
     |                         ^ ReferenceError: LoginPage is not defined
  30 |       await page.goto(ENV.BASE_URL);
  31 |         await loginPage.login(
  32 |             loginData.data.invalid_username,
  33 |             loginData.data.invalid_password
  34 |         );
  35 |         await expect(page.locator('text=Login Failed')).toBeVisible();
  36 |         console.log("Login Failed");
  37 |  });
  38 | });
```