import { BrowserContext, Page } from "playwright/test";


export const pageFixture = {

    page: undefined as Page | undefined,
    context: undefined as BrowserContext | undefined,

}