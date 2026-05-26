import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.locator('#userSelect').selectOption('1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Transactions' }).click();
});