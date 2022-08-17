// @ts-check
import { test } from '@playwright/test';
import { DemoLandingPage } from '../pages/demo-landing-page.js';
import { AddToCart } from '../pages/product-add-cart-page.js';



test('user can add a item to cart', async ({ page }) => {
  const demoLanding = new DemoLandingPage(page);
  const addToCart = new AddToCart(page);

  // Opens the demo website.
  await demoLanding.goto();

  // Enter credentials to login. 
  await demoLanding.login('standard_user', 'secret_sauce');
 
  await demoLanding.clickButton();

  await addToCart.addItemToCart();

})
