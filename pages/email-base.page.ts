import { Page, Locator, expect } from '@playwright/test';

export class EmailBasePage {
  readonly page: Page;
  protected readonly selectDomainDropdown: Locator;
  protected readonly domainOptions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectDomainDropdown = this.page
      .getByTestId('domain-select')
      .getByTestId('dropdown-label')
      .getByTestId('dropdown');
    this.domainOptions = this.page
      .getByTestId('dropdown-options')
      .getByRole('option');
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

  async selectDomain(domain: string): Promise<void> {
    await this.domainOptions.filter({ hasText: domain }).click();
  }
}
