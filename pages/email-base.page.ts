import { Page, Locator, expect } from '@playwright/test';
import { AppPage } from './app-page';

export class EmailBasePage extends AppPage {
  protected readonly selectDomainDropdown: Locator;
  protected readonly domainOptions: Locator;
  private readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.selectDomainDropdown = this.page
      .getByTestId('dropdown-label')
      .getByTestId('dropdown');
    this.domainOptions = this.page
      .getByTestId('dropdown-options')
      .getByRole('option');
    this.successMessage = this.page
      .getByTestId('box-notification')
      .getByTestId('title');
  }

  async openDomainDropdown(): Promise<void> {
    await this.selectDomainDropdown.click();
  }

  async getAvailableDomains(): Promise<string[]> {
    return (await this.domainOptions.allTextContents()).map((domainOption) =>
      domainOption.trim(),
    );
  }

  async expectSelectDomainOptions(expectedDomains: string[]): Promise<void> {
    const availableDomains = await this.getAvailableDomains();

    expect(availableDomains).toHaveLength(expectedDomains.length);
    expect(availableDomains).toEqual(expect.arrayContaining(expectedDomains));
  }

  async selectDomain(selectedDomain: string): Promise<void> {
    await this.domainOptions.filter({ hasText: selectedDomain }).click();
  }

  async expectSuccessMessage(text: string): Promise<void> {
    await expect(this.successMessage).toContainText(text);
  }
}
