import { Page, Locator, expect } from '@playwright/test';
import { AppPage } from './app-page';

export class EmailBasePage extends AppPage {
  protected readonly selectDomainDropdown: Locator;
  protected readonly domainOptions: Locator;

  constructor(page: Page) {
    super(page);
    this.selectDomainDropdown = this.page
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
