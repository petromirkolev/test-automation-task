import { Page, Locator, expect } from '@playwright/test';
import { DEMO_JWT_TOKEN } from '../test-data/token';
import { decodeJwtPayload } from '../utils/helpers';

export class AppPage {
  readonly page: Page;
  private readonly userAvatar: Locator;
  private readonly pageTitle: Locator;
  private readonly emailMenu: Locator;
  private readonly emailAccountsLink: Locator;
  private readonly emailForwardersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userAvatar = this.page.getByTestId('avatar');
    this.pageTitle = this.page.getByRole('heading', { level: 1 });
    this.emailMenu = this.page.getByTestId('navigation').getByText('Email');
    this.emailAccountsLink = this.page.getByTestId(
      'navigation-list-item-email',
    );
    this.emailForwardersLink = this.page.getByTestId(
      'navigation-list-item-email-forward',
    );
  }

  async open(): Promise<{ first_name: string; last_name: string }> {
    await this.page.goto(`/?demoToken=${DEMO_JWT_TOKEN}`);
    const payload = decodeJwtPayload(DEMO_JWT_TOKEN);
    return payload;
  }

  async openRaw(token: string): Promise<void> {
    await this.page.goto(`/?demoToken=${token}`);
  }

  async goToEmailAccounts(): Promise<void> {
    await this.emailMenu.click();
    await this.emailAccountsLink.click();
  }

  async goToEmailForwarders(): Promise<void> {
    await this.emailMenu.click();
    await this.emailForwardersLink.click();
  }

  async expectPageTitle(title: string): Promise<void> {
    await expect(this.pageTitle).toContainText(title);
  }

  async expectPageAvatar(avatar: string): Promise<void> {
    await expect(this.userAvatar).toContainText(avatar);
  }
}
