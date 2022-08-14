// @ts-check
import { test } from '@playwright/test';
import { DemoHomePage } from '../pages/demo-home-page.js';
import { UploadStudy } from '../pages/upload-study-page.js';
import { UserInfo } from '../pages/user-information-page.js';


test('user can upload a study and see the result in the web viewer', async ({ page }) => {
  const demoHome = new DemoHomePage(page);
  const uploadStudy = new UploadStudy(page);
  const userInfo = new UserInfo(page);

 // Opens the demo website.
 await demoHome.goto();

 // Checks for 'select images to upload button'
 await uploadStudy.checkButtonExists(' Select images to upload');

 //Upload image
 await uploadStudy.uploadXray();

 await uploadStudy.termsAndCondition();

 await uploadStudy.uploadButton();

 //https://playwright.dev/docs/api/class-page#page-wait-for-load-state
 await page.waitForNavigation();

 await userInfo.fillUserInformation();

 await userInfo.submitButton();

 await uploadStudy.checkButtonExists(' Show Annalise CXR findings');

})
