import { Page, Locator, expect } from '@playwright/test';
import { EmailBasePage } from './email-base.page';

export class EmailAccountsPage extends EmailBasePage {
  private readonly accountNameInput: Locator;
  private readonly generatePasswordButton: Locator;
  private readonly passwordInput: Locator;
  private readonly createButton: Locator;
  private readonly successMessage: Locator;
  private readonly errorMessage: Locator;
  private readonly accountRowsText: Locator;
  private readonly backButton: Locator;

  constructor(page: Page) {
    super(page);
    this.accountNameInput = this.page.getByTestId('text-input-name');
    this.generatePasswordButton = this.page
      .getByTestId('form-password-password-label')
      .getByTestId('password-generate');
    this.passwordInput = this.page.getByTestId('form-password-password');
    this.createButton = this.page.getByTestId('create-box-submit');
    this.successMessage = this.page
      .getByTestId('box-notification')
      .getByTestId('title');
    this.errorMessage = this.page
      .getByTestId('text-input-name-label')
      .getByTestId('text');
    this.accountRowsText = this.page.getByTestId('text');
    this.backButton = this.page.getByTestId('box-notification-back-button');
  }

  async fillAccountName(name: string): Promise<void> {
    await this.accountNameInput.fill(name);
  }

  async generatePassword(): Promise<void> {
    await this.generatePasswordButton.click();
  }

  async expectPasswordLength(length: number): Promise<void> {
    expect(
      (await this.passwordInput.inputValue()).length,
    ).toBeGreaterThanOrEqual(length);
  }

  async createAccount(): Promise<void> {
    await this.createButton.click();
  }

  async expectSuccessMessageContains(text: string): Promise<void> {
    await expect(this.successMessage).toContainText(text);
  }

  async expectErrorMessageContains(text: string): Promise<void> {
    await expect(this.errorMessage).toContainText(text);
  }

  async expectEmailAccountCreated(
    emailAccount: string,
    selectedDomain: string,
  ): Promise<void> {
    const emailAccounts = await this.accountRowsText.allTextContents();
    expect(emailAccounts).toContain(`${emailAccount}@${selectedDomain}`);
  }

  async goBack(): Promise<void> {
    await this.backButton.click();
  }

  async createAccountWithGeneratedPassword(
    domain: string,
    accountName: string,
  ): Promise<void> {
    await this.openDomainDropdown();
    await this.selectDomain(domain);
    await this.fillAccountName(accountName);
    await this.generatePassword();
  }
}
