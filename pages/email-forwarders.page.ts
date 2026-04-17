import { Page, Locator, expect } from '@playwright/test';
import { EmailAccountsPage } from './email-accounts.page';

export class EmailForwardersPage extends EmailAccountsPage {
  private readonly forwardFrom: Locator;
  private readonly forwardFromInput: Locator;
  private readonly forwardFromInputErrorMessage: Locator;
  private readonly forwardTo: Locator;
  private readonly forwardToDropdown: Locator;
  private readonly forwardToInput: Locator;
  private readonly forwardToInputErrorMessage: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);

    this.forwardFrom = this.page.getByTestId('forward-crate-name-label');
    this.forwardFromInput = this.forwardFrom.getByTestId('forward-crate-name');
    this.forwardFromInputErrorMessage =
      this.forwardFrom.getByTestId('validation');

    this.forwardTo = this.page.getByTestId(
      'forward-crate-email_select_visual-wrapper',
    );
    this.forwardToDropdown = this.forwardTo.getByTestId(
      'forward-crate-email_select_visual',
    );
    this.forwardToInput = this.forwardTo.getByTestId('form-field');
    this.forwardToInputErrorMessage = this.forwardTo.getByTestId('validation');

    this.submitButton = this.page.getByTestId('create-box-submit');
  }

  async fillForwardFromName(input: string): Promise<void> {
    await this.forwardFromInput.fill(input);
  }

  async fillForwardToAccount(input: string): Promise<void> {
    await this.forwardToDropdown.click();
    await this.forwardToInput.fill(input);
  }

  async createEmailForwarder(): Promise<void> {
    await this.submitButton.click();
  }

  async expectForwardFromFieldError(message: string): Promise<void> {
    await expect(this.forwardFromInputErrorMessage).toContainText(message);
  }

  async expectForwardToFieldError(message: string): Promise<void> {
    await expect(this.forwardToInputErrorMessage).toContainText(message);
  }

  async createForwarderWithoutName(
    domain: string,
    fromInput: string,
  ): Promise<void> {
    await this.openDomainDropdown();
    await this.selectDomain(domain);
    await this.fillForwardFromName(fromInput);
    await this.createEmailForwarder();
  }

  async createForwarderWithName(
    domain: string,
    fromInput: string,
    toInput: string,
  ): Promise<void> {
    await this.openDomainDropdown();
    await this.selectDomain(domain);
    await this.fillForwardFromName(fromInput);
    await this.fillForwardToAccount(toInput);
    await this.createEmailForwarder();
  }
}
