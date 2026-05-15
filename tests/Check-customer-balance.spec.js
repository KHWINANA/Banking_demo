import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.locator('#userSelect').selectOption('2');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Account Number : 1004 ,').click();
  await page.getByText('0', { exact: true }).click();
}); 