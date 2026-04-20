import { Page, Locator, expect } from '@playwright/test';
import { demoToken } from '../test-data';

export class AppPage {
  protected readonly page: Page;
  private readonly emailMenu: Locator;
  private readonly emailAccountsLink: Locator;
  private readonly emailForwardersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailMenu = this.page.getByTestId('navigation').getByText('Email');
    this.emailAccountsLink = this.page.getByTestId(
      'navigation-list-item-email',
    );
    this.emailForwardersLink = this.page.getByTestId(
      'navigation-list-item-email-forward',
    );
  }

  async open(): Promise<void> {
    await this.page.goto(`/?demoToken=${demoToken}`);
    await expect(this.page).toHaveTitle(/QA Automation Tools/);
  }

  async goToEmailAccounts(): Promise<void> {
    await this.emailMenu.click();
    await this.emailAccountsLink.click();
  }

  async goToEmailForwarders(): Promise<void> {
    await this.emailMenu.click();
    await this.emailForwardersLink.click();
  }
}
