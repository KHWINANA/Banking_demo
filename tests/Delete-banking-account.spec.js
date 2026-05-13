import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  await page.getByRole('button', { name: 'Customers' }).click();
  await page.getByRole('row', { name: 'Hermoine Granger E859AB 1001' }).getByRole('button').click();
});