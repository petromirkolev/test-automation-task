import { Page, Locator, expect } from '@playwright/test';

export class EmailAccountsPage {
  readonly page: Page;
  private readonly pageTitle: Locator;
  private readonly selectDomainDropdown: Locator;
  private readonly domainOptions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = this.page.locator('h1[data-e2e="title"]');
    this.selectDomainDropdown = this.page.locator('input[data-e2e="dropdown"]');
    this.domainOptions = this.page.locator(
      '[data-e2e="dropdown-options"] [role="option"]',
    );
  }

  async expectEmailAccountsPageLoaded(): Promise<void> {
    await expect(this.pageTitle).toContainText(/Email Accounts/);
    await expect(this.selectDomainDropdown).toBeVisible();
    await expect(this.selectDomainDropdown).toBeEnabled();
  }

  async openDomainDropdown(): Promise<void> {
    await this.selectDomainDropdown.click();
  }

  async verifyAvailableDomains(expectedDomains: string[]): Promise<void> {
    const actualDomains = (await this.domainOptions.allTextContents()).map(
      (text) => text.trim(),
    );
    expect(actualDomains).toEqual(expectedDomains);
  }
}
