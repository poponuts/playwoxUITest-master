import { expect } from '@playwright/test';
export class DemoHomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    //Opens the demo website
    await this.page.goto('https://cxrdemo.annalise.ai/',{ waitUntil: 'networkidle' });
    
    //Expect a title "to contain" a substring.
    await expect(this.page).toHaveTitle(/demo/);
  }

 }