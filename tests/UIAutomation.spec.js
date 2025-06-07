const {POManager} = require('../Page_object/POManager');
//const {WebpageTitle} = require('../Page_object/WebpageTitle');
const {test,expect} = require ('@playwright/test');

test('Web Page Get Title and Logo Testing',async({page})=>{
  // Call function file from POManager
const poManager = new POManager(page);
// Getting the async Function from WebpageTitle and storing it in const variable as pagetitle
const gettitle =  poManager.getWebpageTitle();
await gettitle.Urlgoto();
// verify logo is visible
const imglocator= page.locator('img[alt="Website for automation practice"]');
await expect(imglocator).toBeVisible();
// Get the alt Text in the log
 const imgtitle= await page.locator('img[alt="Website for automation practice"]').getAttribute('alt');
 expect(imgtitle).toBe('Website for automation practice');
 console.log("Heading:",imgtitle);
});
