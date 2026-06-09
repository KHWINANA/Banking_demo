import { test, expect } from '@playwright/test';

test('Customer can view transaction history table with correct data', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.locator('#userSelect').selectOption('1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Transactions' }).click();

  //  Validate table is visible
  await expect(page.locator('table')).toBeVisible();

  //  Validate table headers
  const headers = ['Date-Time', 'Amount', 'Transaction Type'];

  for (const header of headers) {
    await expect(page.getByRole('columnheader', { name: header })).toBeVisible();
  }

  //  Validate table has at least one row (strong assertion)
  const rows = page.locator('table tbody tr');
  await expect(rows).not.toHaveCount(0);


//  NEW: Validate specific transaction date exists
const targetDate = 'Jan 2, 2015 12:00:00 AM';
await expect(page.locator('table')).toContainText(targetDate);



});