import { Page, Locator, expect } from '@playwright/test';

export class EmailAccountsPage {
  readonly page: Page;
  private readonly pageTitle: Locator;
  private readonly selectDomainDropdown: Locator;
  private readonly domainOptions: Locator;
  private readonly emailNameInput: Locator;
  readonly generatePasswordButton: Locator;
  private readonly emailPasswordInput: Locator;
  readonly emailAccountCreateButton: Locator;
  readonly emailCreateSuccessMessage: Locator;
  readonly emailAccountsTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByRole('heading', { level: 1 });
    this.selectDomainDropdown = this.page
      .getByTestId('dropdown-label')
      .getByTestId('dropdown');
    this.domainOptions = this.page
      .getByTestId('dropdown-options')
      .getByRole('option');
    this.emailNameInput = this.page.getByTestId('text-input-name');
    this.generatePasswordButton = this.page
      .getByTestId('form-password-password-label')
      .getByTestId('password-generate');
    this.emailPasswordInput = this.page.getByTestId('form-password-password');
    this.emailAccountCreateButton = this.page
      .getByTestId('create-box-submit')
      .filter({ hasText: 'Create' });
    this.emailCreateSuccessMessage = this.page
      .getByTestId('box-notification')
      .getByTestId('title');
    this.emailAccountsTable = this.page
      .getByTestId('table')
      .getByTestId('table-row')
      .getByTestId('text');
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

  async selectDomain(domain: string): Promise<void> {
    await this.page.getByRole('option').filter({ hasText: domain }).click();
  }

  async fillEmailName(name: string): Promise<void> {
    await this.emailNameInput.fill(name);
  }

  async expectPasswordPopulated(): Promise<void> {
    expect((await this.emailPasswordInput.inputValue()).length).toBeGreaterThan(
      0,
    );
  }

  async expectEmailAccountCreated(emailAccount: string): Promise<void> {
    console.log(await this.emailAccountsTable.allTextContents());

    const emailAccounts = (
      await this.emailAccountsTable.allTextContents()
    ).some((account) => account === emailAccount);

    console.log(emailAccounts);

    expect(emailAccounts).toBeTruthy();
  }
}
