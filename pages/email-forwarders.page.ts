import { Page, Locator, expect } from '@playwright/test';
import { EmailBasePage } from './email-base.page';
import { REQUIRED_FIELD_MESSAGE } from '../utils/constants';

export class EmailForwardersPage extends EmailBasePage {
  private readonly forwardFromInput: Locator;
  private readonly submitButton: Locator;
  private readonly forwardFromInputErrorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.forwardFromInput = this.page.getByTestId('forward-crate-name');
    this.submitButton = this.page.getByTestId('create-box-submit');
    this.forwardFromInputErrorMessage = this.page
      .getByTestId('forward-crate-name-label')
      .getByTestId('validation');
  }

  async fillForwardFrom(input: string): Promise<void> {
    await this.forwardFromInput.fill(input);
  }

  async createEmailForwarder(): Promise<void> {
    await this.submitButton.click();
  }

  async expectForwardFromRequiredFieldError(): Promise<void> {
    await expect(this.forwardFromInputErrorMessage).toContainText(
      REQUIRED_FIELD_MESSAGE,
    );
  }

  async expectForwardToRequiredFieldError(): Promise<void> {
    await this.expectForwardFromRequiredFieldError();
  }
}
