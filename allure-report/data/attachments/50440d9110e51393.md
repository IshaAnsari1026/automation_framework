# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\loginTest.spec.js >> Login Functionality Tests >> Invalid Login Test
- Location: tests\smoke\loginTest.spec.js:28:2

# Error details

```
ReferenceError: loginPage is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - heading "Login" [level=1] [ref=e3]
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: Username
        - textbox "Username" [ref=e8]
        - paragraph [ref=e9]: Please enter username.
      - generic [ref=e10]:
        - generic [ref=e11]: Password
        - textbox "Password" [ref=e12]
        - paragraph [ref=e13]: Please enter password.
      - combobox [ref=e15]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e16]:
        - generic [ref=e17]:
          - radio "Admin" [checked] [ref=e18]
          - generic [ref=e19]: Admin
        - generic [ref=e20]:
          - radio "User" [ref=e21]
          - generic [ref=e22]: User
      - generic [ref=e23]:
        - checkbox "I Agree to the terms and conditions" [ref=e24]
        - generic [ref=e25]:
          - text: I Agree to the
          - link "terms and conditions" [ref=e27] [cursor=pointer]:
            - /url: "#"
      - button "Sign In" [ref=e29]
      - paragraph [ref=e30]:
        - text: The username is
        - mark [ref=e31]: sagesyntaxacademy
        - text: and the password is
        - mark [ref=e32]: BuildingExcellence@111
        - text: .
  - alert [ref=e33]
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
  29 |       await page.goto(ENV.BASE_URL);
> 30 |         await loginPage.login(
     |         ^ ReferenceError: loginPage is not defined
  31 |             loginData.data.invalid_username,
  32 |             loginData.data.invalid_password
  33 |         );
  34 |         await expect(page.locator('text=Login Failed')).toBeVisible();
  35 |         console.log("Login Failed");
  36 |  });
  37 | });
```