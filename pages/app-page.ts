import { Page, Locator, expect } from '@playwright/test';
import { DEMO_JWT_TOKEN } from '../utils/constants';

export class AppPage {
  readonly page: Page;
  private readonly pageTitle: Locator;
  private readonly emailMenu: Locator;
  private readonly emailAccountsMenu: Locator;
  private readonly emailForwardersMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = this.page.locator('h1[data-e2e="title"]');
    this.emailMenu = this.page.locator(
      'span[data-e2e="navigation-group-mail"]',
    );
    this.emailAccountsMenu = this.page.locator(
      'a[data-e2e="navigation-list-item-email"]',
    );
    this.emailForwardersMenu = this.page.locator(
      'a[data-e2e="navigation-list-item-email-forward"]',
    );
  }

  async open(): Promise<void> {
    await this.page.goto(`/?demoToken=${DEMO_JWT_TOKEN}`);
  }

  async openRaw(token: string): Promise<void> {
    await this.page.goto(`/?demoToken=${token}`);
  }

  async goToEmailMenu(): Promise<void> {
    await this.emailMenu.click();
  }

  async goToEmailAccounts(): Promise<void> {
    await this.goToEmailMenu();

    await expect(this.emailAccountsMenu).toBeVisible();
    await expect(this.emailAccountsMenu).toBeEnabled();

    await this.emailAccountsMenu.click();
  }

  async goToEmailForwarders(): Promise<void> {
    await this.goToEmailMenu();

    await expect(this.emailForwardersMenu).toBeVisible();
    await expect(this.emailForwardersMenu).toBeEnabled();

    await this.emailForwardersMenu.click();
  }

  async expectPageTitle(title: string): Promise<void> {
    await expect(this.pageTitle).toContainText(title);
  }
}
