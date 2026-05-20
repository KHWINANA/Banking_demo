import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.locator('#userSelect').selectOption('1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Withdrawl' }).click();
  await page.getByPlaceholder('amount').click();
  await page.getByPlaceholder('amount').fill('390');
  await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
  await page.getByText('Account Number : 1001 ,').click();
});