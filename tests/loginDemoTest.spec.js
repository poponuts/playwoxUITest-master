// @ts-check
import { test } from '@playwright/test';
import { DemoLandingPage } from '../pages/demo-landing-page.js';
//import { PreDefinedStudy } from '../pages/product-home-page.js';


test('user can login successfully', async ({ page }) => {

  const demoLanding = new DemoLandingPage(page);
  // Opens the demo website.
  await demoLanding.goto();

  // Enter credentials to login. 
  await demoLanding.login('standard_user', 'secret_sauce');
 
  await demoLanding.clickButton();
});

