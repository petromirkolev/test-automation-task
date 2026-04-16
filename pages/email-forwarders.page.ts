import { Page, Locator, expect } from '@playwright/test';
import { EmailBasePage } from './email-base.page';
import { REQUIRED_FIELD_MESSAGE } from '../utils/constants';

export class EmailForwardersPage extends EmailBasePage {
  private readonly nameInput: Locator;
  private readonly submitButton: Locator;
  private readonly nameInputErrorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.nameInput = this.page.getByTestId('forward-crate-name');
    this.submitButton = this.page.getByTestId('create-box-submit');
    this.nameInputErrorMessage = this.page
      .getByTestId('forward-crate-name-label')
      .getByTestId('validation');
  }

  async fillName(input: string): Promise<void> {
    await this.nameInput.fill(input);
  }

  async createEmailForwarder(): Promise<void> {
    await this.submitButton.click();
  }

  async expectNameRequiredFieldError(): Promise<void> {
    await expect(this.nameInputErrorMessage).toContainText(
      REQUIRED_FIELD_MESSAGE,
    );
  }

  async expectForwardToRequiredFieldError(): Promise<void> {}
}
