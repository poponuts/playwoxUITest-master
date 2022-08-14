import { expect } from '@playwright/test';

export class UserInfo {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('input[name="firstname"]');
    this.lastName = page.locator('input[name="lastname"]');
    this.email = page.locator('input[name="email"]');
    this.role = page.locator('input[name="jobtitle"]');
    this.org = page.locator('input[name="organisationname"]');
    this.clickSubmit = page.locator('button[type=submit]')
  }

  async fillUserInformation() {
    
    await this.firstName.fill("Yogi");
    await this.lastName.fill("Xyz");
    await this.email.fill("yogi@xyz.com");
    await this.role.fill("SDET");
    await this.org.fill("NA");
  
  }

  async submitButton() {
    await this.clickSubmit.click();
    // Expects the URL to contain viewer.
    await expect(this.page).toHaveURL(/.*viewer/);
  }


}