import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameField;
  readonly passwordField;
  readonly loginButton;
  readonly successMessage;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#submit');
    this.successMessage = page.locator('h1');
  }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async validateSuccess() {
    await this.page.waitForURL(/logged-in-successfully/);
    await this.successMessage.waitFor({ state: 'visible' });
  }
}
