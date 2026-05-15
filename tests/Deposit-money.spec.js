import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.locator('#userSelect').selectOption('2');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Deposit' }).click();
  await page.getByPlaceholder('amount').click();
  await page.getByPlaceholder('amount').fill('350');
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
  await page.getByText('350').click();
});