import { Before, After, World, Status } from "@cucumber/cucumber";
import { Browser, Page, chromium, firefox, webkit } from "@playwright/test";
import * as dotenv from 'dotenv';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';

dotenv.config();

let browser: Browser;
let page: Page;
Before(async function () {
    if(process.env.BROWSER_NAME=='chrome')
    {
        browser = await chromium.launch({ headless: process.env.HEADLESS=="true" });    
    }
    else if(process.env.BROWSER_NAME=='firefox')
    {
        browser = await firefox.launch({ headless: process.env.HEADLESS=="true" });    
    }
    else if(process.env.BROWSER_NAME=='safari')
    {
        browser = await webkit.launch({ headless: process.env.HEADLESS=="true" });    
    }
    else
    {
        throw new Error("Please set the proper browser!");
    }
    
    page = await browser.newPage();
    this.page = page;
});

After(async function (this: World & ITestCaseHookParameter, scenario: ITestCaseHookParameter) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshotPath = `reports/screenshots/${scenario.pickle.name}.png`;
        await page.screenshot({ path: screenshotPath });
        this.attach(await page.screenshot({ path: screenshotPath }), 'image/png');
      }
      await browser.close();
})