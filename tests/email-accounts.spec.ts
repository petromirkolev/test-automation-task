import { test } from '../fixtures/app-fixtures';
import { invalidEmailname } from '../test-data/invalid-email';
import { invalidEmailpassword } from '../test-data/invalid-password';
import { createExistingAccount } from '../utils/helpers';
import {
  EMAIL_ACCOUNT_EXISTS_MESSAGE,
  ACCOUNT_NAME,
  EXPECTED_DOMAINS,
  SELECTED_DOMAIN,
} from '../utils/constants';

test.describe('Automation Test Suite - Email Accounts page', () => {
  test.beforeEach(async ({ appPage }) => {
    await appPage.open();

    await appPage.goToEmailAccounts();
  });

  test('Create email account with valid input succeeds', async ({
    emailAccountsPage,
  }) => {
    await emailAccountsPage.openDomainDropdown();
    await emailAccountsPage.expectSelectDomainOptions(EXPECTED_DOMAINS);
    await emailAccountsPage.selectDomain(SELECTED_DOMAIN);

    await emailAccountsPage.fillAccountName(ACCOUNT_NAME);
    await emailAccountsPage.generatePassword();
    await emailAccountsPage.expectPasswordPopulated();
    await emailAccountsPage.clickCreateAccountBtn();

    await emailAccountsPage.expectSuccessMessage(ACCOUNT_NAME);
    await emailAccountsPage.expectEmailAccountCreated(
      ACCOUNT_NAME,
      SELECTED_DOMAIN,
    );
  });

  test('Create duplicate email account is rejected', async ({
    emailAccountsPage,
  }) => {
    await createExistingAccount(emailAccountsPage);

    await emailAccountsPage.createAccount(SELECTED_DOMAIN, ACCOUNT_NAME);

    await emailAccountsPage.expectNameErrorMessage(
      EMAIL_ACCOUNT_EXISTS_MESSAGE,
    );
  });

  test.describe('Create email account with invalid name', () => {
    for (const key of Object.keys(invalidEmailname) as Array<
      keyof typeof invalidEmailname
    >) {
      const { value, testDescription, errorMessage } = invalidEmailname[key];
      test(testDescription, async ({ emailAccountsPage }) => {
        await emailAccountsPage.createAccount(SELECTED_DOMAIN, value);
        await emailAccountsPage.expectNameErrorMessage(errorMessage);
      });
    }
  });

  test.describe('Create email account with invalid password', () => {
    for (const key of Object.keys(invalidEmailpassword) as Array<
      keyof typeof invalidEmailpassword
    >) {
      const { value, testDescription, errorMessage } =
        invalidEmailpassword[key];
      test(testDescription, async ({ emailAccountsPage }) => {
        await emailAccountsPage.createAccount(
          SELECTED_DOMAIN,
          ACCOUNT_NAME,
          value,
        );
        await emailAccountsPage.expectPasswordErrorMessage(errorMessage);
      });
    }
  });
});
