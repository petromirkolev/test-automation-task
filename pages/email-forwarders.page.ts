import { Page, Locator, expect } from '@playwright/test';
import { EmailBasePage } from './email-base.page';

export class EmailForwardersPage extends EmailBasePage {
  private readonly forwardFromInput: Locator;
  private readonly forwardFromInputErrorMessage: Locator;
  private readonly forwardToDropdown: Locator;
  private readonly forwardToInput: Locator;
  private readonly forwardToInputErrorMessage: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.forwardFromInput = this.page
      .getByTestId('forward-crate-name-label')
      .getByTestId('forward-crate-name');
    this.forwardFromInputErrorMessage = this.page
      .getByTestId('forward-crate-name-label')
      .getByTestId('validation');
    this.forwardToDropdown = this.page
      .getByTestId('forward-crate-email_select_visual-wrapper')
      .getByTestId('forward-crate-email_select_visual');
    this.forwardToInput = this.page
      .getByTestId('forward-crate-email_select_visual-wrapper')
      .getByTestId('form-field');
    this.forwardToInputErrorMessage = this.page
      .getByTestId('forward-crate-email_select_visual-wrapper')
      .getByTestId('validation');
    this.submitButton = this.page.getByTestId('create-box-submit');
  }

  async fillForwardFromName(input: string): Promise<void> {
    await this.forwardFromInput.fill(input);
  }

  async fillForwardToAccount(input: string): Promise<void> {
    /** The destination field is a dropdown so the inner input
     ** becomes usable only after clicking on it */
    await this.forwardToDropdown.click();
    await this.forwardToInput.fill(input);
  }

  async clickCreateEmailForwarderButton(): Promise<void> {
    await this.submitButton.click();
  }

  async expectForwardFromFieldError(message: string): Promise<void> {
    await expect(this.forwardFromInputErrorMessage).toContainText(message);
  }

  async expectForwardToFieldError(message: string): Promise<void> {
    await expect(this.forwardToInputErrorMessage).toContainText(message);
  }

  async createForwarder(
    selectedDomain?: string,
    fromEmail?: string,
    toEmail?: string,
  ): Promise<void> {
    if (selectedDomain !== undefined) {
      await this.openDomainDropdown();
      await this.selectDomain(selectedDomain);
    }
    if (fromEmail !== undefined) {
      await this.fillForwardFromName(fromEmail);
    }
    if (toEmail !== undefined) {
      await this.fillForwardToAccount(toEmail);
    }
    await this.clickCreateEmailForwarderButton();
  }
}
