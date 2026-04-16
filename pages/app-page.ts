import { Page, Locator, expect } from '@playwright/test';
import { DEMO_JWT_TOKEN } from '../utils/constants';

export class AppPage {
  readonly page: Page;
  private readonly pageTitle: Locator;
  private readonly emailMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = this.page.locator('h1[data-e2e="title"]');
    this.emailMenu = this.page.locator(
      '.sg-navigation-list[data-e2e="navigation-group-mail"]',
    );
  }

  async open() {
    await this.page.goto(`/?demoToken=${DEMO_JWT_TOKEN}`);
  }

  async openRaw(token: string) {
    await this.page.goto(`/?demoToken=${token}`);
  }

  async goToEmailAccounts() {
    await this.emailMenu.click();
  }

  async goToEmailForwarders(): Promise<void> {
    await this.emailMenu.click();
  }

  async expectTitle(title: string): Promise<void> {
    await expect(this.pageTitle).toContainText(new RegExp(title));
  }
}
