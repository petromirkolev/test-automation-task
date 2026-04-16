import { Page, Locator, expect } from '@playwright/test';
import { EmailBasePage } from './email-base.page';

export class EmailAccountsPage extends EmailBasePage {
  private readonly accountNameInput: Locator;
  private readonly generatePasswordButton: Locator;
  private readonly passwordInput: Locator;
  private readonly createButton: Locator;
  private readonly successMessage: Locator;
  private readonly accountRowsText: Locator;

  constructor(page: Page) {
    super(page);
    this.accountNameInput = this.page.getByTestId('text-input-name');
    this.generatePasswordButton = this.page
      .getByTestId('form-password-password-label')
      .getByTestId('password-generate');
    this.passwordInput = this.page.getByTestId('form-password-password');
    this.createButton = this.page
      .getByTestId('create-box-submit')
      .filter({ hasText: 'Create' });
    this.successMessage = this.page
      .getByTestId('box-notification')
      .getByTestId('title');
    this.accountRowsText = this.page
      .getByTestId('table')
      .getByTestId('table-row')
      .getByTestId('text');
  }

  async fillAccountName(name: string): Promise<void> {
    await this.accountNameInput.fill(name);
  }

  async generatePassword(): Promise<void> {
    await this.generatePasswordButton.click();
    expect(
      (await this.passwordInput.inputValue()).length,
    ).toBeGreaterThanOrEqual(8);
  }

  async createEmailAccount(): Promise<void> {
    await this.createButton.click();
  }

  async expectSuccessMessageContains(text: string): Promise<void> {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText(text);
  }

  async expectEmailAccountCreated(emailAccount: string): Promise<void> {
    const emailAccounts = await this.accountRowsText.allTextContents();
    expect(emailAccounts).toContain(emailAccount);
  }
}
