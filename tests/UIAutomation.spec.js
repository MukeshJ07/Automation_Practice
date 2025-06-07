const { POManager } = require('../Page_object/POManager');
const { test, expect } = require('@playwright/test');
const { customtest } = require('../testdata/LoginSignup_data');

test('Web Page Get Title and Logo Testing', async ({ page }) => {
  // Call function file from POManager
  const poManager = new POManager(page);
  // Getting the async Function from WebpageTitle and storing it in const variable as pagetitle
  const gettitle = poManager.getWebpageTitle();
  await gettitle.Urlgoto();
  // verify logo is visible
  const imglocator = page.locator('img[alt="Website for automation practice"]');
  await expect(imglocator).toBeVisible();
  // Get the alt Text in the log
  const imgtitle = await page.locator('img[alt="Website for automation practice"]').getAttribute('alt');
  expect(imgtitle).toBe('Website for automation practice');
  console.log("Heading:", imgtitle);
});


customtest.only(`Login user sign up`, async ({ page, Datacreation }) => {
  // Call function file from POManager
  const poManager = new POManager(page);
  // Getting the async Function from WebpageTitle and storing it in const variable as pagetitle
  await page.goto("https://automationexercise.com/");
  await page.waitForLoadState('load');
  const LoginSignup = poManager.getLoginSignup();
  LoginSignup.Signup(Datacreation);
  // Assertions account creation
  const accountvalid = page.locator('[data-qa="account-created"]');
  await expect(accountvalid).toContainText('Account Created!');
 console.log(
  "First:", await page.locator("div p").nth(0).textContent(),
  "\nSecond:", await page.locator("div p").nth(1).textContent());
  // after Account created click continue button
  await page.locator("a.btn.btn-primary").click();
  // Username: ttr@gmail.com ; password: Testautomation7@2000;
});
