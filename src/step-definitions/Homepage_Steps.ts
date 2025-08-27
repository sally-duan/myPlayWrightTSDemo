import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
// import { Browser, chromium, Page } from "playwright";
// let browser: Browser;
// let context: any;
// let page: Page;
const url = "https://www.webdriveruniversity.com/";


Given('I navigate to the webdriveruniversity homepage', async () => {

    // browser = await chromium.launch({ headless: false });
    // context = await browser.newContext({
    //     viewport: { width: 1920, height: 1080 }
    // });
    // page = await context.newPage();
    await pageFixture.page!.goto(url);
});


When('I click on the contact us button', { timeout: 60 * 1000 }, async () => {
    const contactUs_button = await pageFixture.page!.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUs_button.click();
});

When('I switch to the new browser tab', async () => {
    await pageFixture.context!.waitForEvent("page");
    const allPages = await pageFixture.context!.pages();

    //assign the most recent tab to pageFixture.page
    pageFixture.page = allPages[allPages.length - 1];
    await pageFixture.page.bringToFront();
    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });


});






