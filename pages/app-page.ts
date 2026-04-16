import { Page, Locator, expect } from '@playwright/test';
import { DEMO_JWT_TOKEN } from '../utils/constants';

export class AppPage {
  readonly page: Page;
  private readonly pageTitle: Locator;
  private readonly emailMenu: Locator;
  private readonly emailAccountsLink: Locator;
  private readonly emailForwardersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = this.page.locator('h1[data-e2e="title"]');
    this.emailMenu = this.page
      .getByRole('listitem')
      .filter({ hasText: 'Email' });
    this.emailAccountsLink = this.emailMenu.getByTestId(
      'navigation-list-item-email',
    );
    this.emailForwardersLink = this.emailMenu.getByTestId(
      'navigation-list-item-email-forward',
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

    await expect(this.emailAccountsLink).toBeVisible();
    await expect(this.emailAccountsLink).toBeEnabled();

    await this.emailAccountsLink.click();
  }

  async goToEmailForwarders(): Promise<void> {
    await this.goToEmailMenu();

    await expect(this.emailForwardersLink).toBeVisible();
    await expect(this.emailForwardersLink).toBeEnabled();

    await this.emailForwardersLink.click();
  }

  async expectPageTitle(title: string): Promise<void> {
    await expect(this.pageTitle).toContainText(title);
  }
}
