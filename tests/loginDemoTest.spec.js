// @ts-check
import { test } from '@playwright/test';
import { DemoLandingPage } from '../pages/demo-landing-login-page.js';
import { expect } from '@playwright/test';


test('user can login successfully', async ({ page }) => {

  const demoLanding = new DemoLandingPage(page);
  // Opens the demo website.
  await demoLanding.goto();

  // Enter credentials to login. 
  await demoLanding.login('standard_user', 'secret_sauce');
 
  await demoLanding.clickButton();
  await expect(page).toHaveURL(/.*inventory/);
});


test('locked user cannot login', async ({ page }) => {

  const demoLanding = new DemoLandingPage(page);
  // Opens the demo website.
  await demoLanding.goto(); 

  // Enter credentials to login. 
  await demoLanding.login('locked_out_user', 'secret_sauce');
 
  await demoLanding.clickButton();

  await expect(page.locator('text=Epic sadface: Sorry, this user has been locked out.')).toBeVisible;
});
