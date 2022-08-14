import { expect } from '@playwright/test';
export class PreDefinedStudy {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.controlPanel = page.locator('data-testid=image-controls__window');
    this.xRay = page.locator('data-testid=image');
    this.sideBar = page.locator('data-testid=sidebar');
    this.studies = page.locator('text=Studies');
    this.samples = page.locator('data-testid=sample');
  }

  async openPreDefinedStudy(name) {
    await this.page.locator(`text=${name}`).click();

    //Expect a page "to have" left the control panel.
    await this.controlPanel.isVisible();   
  
    // Expects the URL to contain viewer.
    await expect(this.page).toHaveURL(/.*viewer/);

    //Expect the image to be visible
    await this.xRay.isVisible();
    
  }

  async checkButtonExists(buttonName) {
    if ((await this.page.$(`text=${buttonName}` ) !== null)) {
      await this.page.click(`text=${buttonName}`);    
    }
      //Check if the sidebar is visible
      await this.sideBar.isVisible();

  }

  async goBackToDemoHomePage() {
    await this.studies.click();
    await this.samples.count(3);
  }

}