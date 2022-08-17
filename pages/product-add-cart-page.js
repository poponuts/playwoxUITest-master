import { expect } from '@playwright/test';
export class AddToCart {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
     this.addToCart = page.locator('id=add-to-cart-sauce-labs-backpack');
     this.cart = page.locator('#shopping_cart_container');
     this.quantity = page.locator('#cart_quantity');
  }

  async addItemToCart() {
    await this.addToCart.click();
   
    await this.cart.click();

    expect(this.quantity).toBeVisible;
  }

}