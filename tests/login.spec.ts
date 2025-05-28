import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid login using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'Password123');
  await loginPage.validateSuccess();

  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});
