import {test, devices} from"@playwright/test"
test.use(devices['Pixel 5']);

test('mobile_test', async({page})=>{
    await page.goto("https://ctcorphyd.com/SureshIT/login.php");
    await page.locator("//input[@type='text']").fill("sureshit");
    await page.locator("//input[@type='password']").fill("sureshit");
    await page.locator("//input[@type='Submit']").tap();
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Logout']").tap();
    await page.touchscreen.tap(100, 200);
})

