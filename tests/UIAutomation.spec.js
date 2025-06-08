const { POManager } = require('../Page_object/POManager');
const { test, expect } = require('@playwright/test');
const { customtest } = require('../testdata/Logindata');

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


customtest(`Login user sign up account creation`, async ({ page, Datacreation }) => {
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

customtest.only(`Login to Webpage and place order`, async ({ page, LoginData,PlaceOrder }) => {
  await page.goto("https://automationexercise.com/");
  await page.waitForLoadState('load');
  const poManager = new POManager(page);
  const logintoplaceorder = poManager.getLoginPage();
  await logintoplaceorder.gotologin(LoginData);
  const VerifyUser = await page.locator('a:has-text("Logged in as Mukesh J")').textContent();
  //verify mukesh user is logged in
  expect(VerifyUser).toBe(" Logged in as Mukesh J");
  console.log("UserLogin:",VerifyUser);
  await logintoplaceorder.getCartOrder();
   // assertion on the order review verify the placed as your Product
   const orderedItem= await page.locator("td h4").allTextContents();
   expect (orderedItem).toEqual(["Men Tshirt","Premium Polo T-Shirts"]);
   // Pay order
   logintoplaceorder.getordercreated(PlaceOrder);
  // After order paid assertion 
  const orderpaid = page.locator('[data-qa="order-placed"]');
  const orderconfirm=page.locator('[style="font-size: 20px; font-family: garamond;"]');
  await expect(orderpaid).toContainText('Order Placed!');
  console.log(
    "First:", await orderpaid.textContent(),
    "\nSecond:", await orderconfirm.textContent());
  // Click continue to go home page for further products
  await page.locator("a.btn.btn-primary").click();
}); 