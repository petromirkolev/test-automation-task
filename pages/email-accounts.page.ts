import { Page, Locator, expect } from '@playwright/test';
import { EmailBasePage } from './email-base.page';

export class EmailAccountsPage extends EmailBasePage {
  private readonly accountNameInput: Locator;
  private readonly generatePasswordButton: Locator;
  private readonly passwordInput: Locator;
  private readonly createButton: Locator;
  private readonly successMessage: Locator;
  private readonly accountNameErrorMessage: Locator;
  private readonly accountPasswordErrorMessage: Locator;
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
    this.accountNameErrorMessage = this.page
      .getByTestId('text-input-name-label')
      .getByTestId('validation');
    this.accountPasswordErrorMessage = this.page
      .getByTestId('form-password-password-label')
      .getByTestId('validation');
    this.accountRowsText = this.page.getByTestId('text');
    this.backButton = this.page.getByTestId('box-notification-back-button');
  }

  async fillAccountName(name: string): Promise<void> {
    await this.accountNameInput.fill(name);
  }

  async fillAccountPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
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

  async expectSuccessMessage(text: string): Promise<void> {
    await expect(this.successMessage).toContainText(text);
  }

  async expectNameErrorMessage(text: string): Promise<void> {
    await expect(this.accountNameErrorMessage).toContainText(text);
  }

  async expectPasswordErrorMessage(text: string): Promise<void> {
    await expect(this.accountPasswordErrorMessage).toContainText(text);
  }

  async expectEmailAccountCreated(
    emailAccount: string,
    selectedDomain: string,
  ): Promise<void> {
    const emailAccounts = await this.accountRowsText.allTextContents();
    expect(emailAccounts).toContain(`${emailAccount}@${selectedDomain}`);
  }

  async successMessageGoBack(): Promise<void> {
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
    await this.createAccount();
  }

  async createAccountWithProvidedPassword(
    domain: string,
    accountName: string,
    password: string,
  ): Promise<void> {
    await this.openDomainDropdown();
    await this.selectDomain(domain);
    await this.fillAccountName(accountName);
    await this.fillAccountPassword(password);
    await this.createAccount();
  }
}
