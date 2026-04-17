import { Page, Locator, test, expect } from '@playwright/test';
import { EmailBasePage } from './email-base.page';

export class EmailAccountsPage extends EmailBasePage {
  private readonly accountNameInput: Locator;
  private readonly generatePasswordButton: Locator;
  private readonly emailPasswordInput: Locator;
  private readonly createAccountButton: Locator;
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
    this.emailPasswordInput = this.page.getByTestId('form-password-password');
    this.createAccountButton = this.page.getByTestId('create-box-submit');
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
    await this.emailPasswordInput.fill(password);
  }

  async generatePassword(): Promise<void> {
    await this.generatePasswordButton.click();
  }

  async expectPasswordPopulated(length: number = 1): Promise<void> {
    expect(
      (await this.emailPasswordInput.inputValue()).length,
    ).toBeGreaterThanOrEqual(length);
  }

  async clickCreateAccountBtn(): Promise<void> {
    await this.createAccountButton.click();
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

  async clickBackButton(): Promise<void> {
    await this.backButton.click();
  }

  async createAccount(
    domain: string,
    name: string,
    password?: string,
  ): Promise<void> {
    await test.step('Select and verify available domains', async () => {
      await this.openDomainDropdown();
      await this.selectDomain(domain);
    });

    await test.step('Fill account creation form', async () => {
      await this.fillAccountName(name);

      if (password !== undefined) {
        await this.fillAccountPassword(password);
      } else {
        await this.generatePassword();
      }
    });

    await test.step('Submit account creation form', async () => {
      await this.clickCreateAccountBtn();
    });
  }
}
