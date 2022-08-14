import { expect } from '@playwright/test';

export class UploadStudy {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.dropBox = page.locator('data-testid=dropzone__input');
    this.checkBox = page.locator('text = I agree to the Terms and Conditions');
    this.uploadStudyButton = page.locator('text =  Upload study for analysis')
  }

  async checkButtonExists(buttonName) {
    
    if ((await this.page.$(`text=${buttonName}` ) !== null)) {
      await this.page.click(`text=${buttonName}`);    
    }

  }

  async uploadXray() {
    await this.dropBox.first().setInputFiles('files/testXray.jpeg');

    //Expect uploaded image is visible in the box.
    await this.page.locator('data-testid=trash').isVisible();    
  }

  async termsAndCondition() {  
    await this.checkBox.click();
  }

  async uploadButton() {
    await this.uploadStudyButton.isEnabled();
    await this.uploadStudyButton.click();
  }
}