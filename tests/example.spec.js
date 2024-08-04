const { test, expect } = require('@playwright/test');

test('Greyt HR ', async ({ page }) => {
  await page.goto('https://panorama.greythr.com//');
  await page.locator('[name="username"]').fill('PSS087')
  await page.locator('[placeholder="Password"]').fill('Sahil123@greythr')
  await page.locator('[type="submit"]').click();
  await page.getByRole('button', { name: /Sign/ }).click();
  await page.locator('[class="toggle"]').first().click();
  await page.locator('[class="dropdown-item"]').nth(1).click();
  // await page.locator('gt-button').getByRole('button', { name: 'Sign In' }).nth(1).click();
  // await page.locator('gt-button').getByRole('button', { name: /Sign/ }).nth(1).click();

      
});


