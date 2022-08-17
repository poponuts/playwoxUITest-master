import { expect } from '@playwright/test';
export class DemoLandingPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userName = page.locator('id=user-name');
    this.password = page.locator('id=password');
    this.loginButton = page.locator('id=login-button');
  }

  async goto() {
    //Opens the demo website
    await this.page.goto('https://www.saucedemo.com/',{ waitUntil: 'networkidle' });
    
    //Expect a title "to contain" a substring.
    await expect(this.page).toHaveTitle(/Swag Labs/);
  }


  async login(username, password) {

    await this.userName.fill(`${username}`);

    await this.password.fill(`${password}`);

  }

  async clickButton() {

    await this.loginButton.click();
    await expect(this.page).toHaveURL(/.*inventory/);

  }
 }