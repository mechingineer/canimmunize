import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'
import * as dotenv from 'dotenv';

dotenv.config();
let loginPage: LoginPage = new LoginPage();
export class utils {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //Method to open the test app
    async navigate() {
        await this.page.goto(process.env.APP_URL!,{ waitUntil: 'load' });
    }

    async login() {
        await this.page.fill(loginPage._usernameInput, process.env.USERNAME!);
        await this.page.fill(loginPage._passwordInput, process.env.PASSWORD!);
        await this.page.click(loginPage._continueButton);
    }
}