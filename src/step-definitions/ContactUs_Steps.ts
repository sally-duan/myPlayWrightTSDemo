import { Given, When, Then } from "@cucumber/cucumber";
// import { Browser, chromium, Page } from "playwright";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "playwright/test";

import Chance from "chance";
const chance = new Chance();

// let browser: Browser;
// let context: any;
// let page: Page;
// const url = "https://www.webdriveruniversity.com/";



When('I type a first name', async () => {
    await pageFixture.page!.getByPlaceholder('First Name').fill("sally");

})
When('I type a specific first name {string}', async (firstname: string) => {
    await pageFixture.page!.getByPlaceholder('First Name').fill(firstname);

})

When('I type a specific firstname {word}', async (word) => {
    await pageFixture.page!.getByPlaceholder('First Name').fill(word);

})


When('I type a last name', async () => {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page!.getByPlaceholder('Last Name').fill("D");
});


When('I enter an email address', async () => {
    await pageFixture.page!.getByPlaceholder('Email Address').fill("sd@gmail.com");
});

When('I type a comment', async () => {
    await pageFixture.page!.getByPlaceholder('Comments').fill("no a comment here");
});
When('I click on the submit button', async () => {
    await pageFixture.page?.waitForSelector('input[value="SUBMIT"]');
    await pageFixture.page?.click('input[value="SUBMIT"]');
});
Then('I should be presented with a successful contact us submission message', async () => {
    await pageFixture.page?.waitForSelector('#contact_reply h1', { timeout: 60000 });
    const text = await pageFixture.page?.innerText("#contact_reply h1");
    expect(text).toBe("Thank You for your Message!")
});

Then('I should not be presented with a successful contact us submission message', async () => {
    await pageFixture.page?.waitForSelector('body');
    const text = await pageFixture.page?.innerText("body");
    expect(text).toMatch(/Error: (all fileds are required|Invalid email address)/)
});



//random data thru faker
When('I type a random last name', async () => {
    const randomLastName = chance.last();
    await pageFixture.page!.getByPlaceholder('Last Name').fill(randomLastName);
});


When('I enter a random email address', async () => {

    const randomEmail = chance.email();
    await pageFixture.page!.getByPlaceholder('Email Address').fill(randomEmail);
    await pageFixture.page?.pause();
});


When('I type a random comment', async () => {
    const randomComments = "blah blah blah";
    await pageFixture.page!.getByPlaceholder('Comments').fill(randomComments);
});
