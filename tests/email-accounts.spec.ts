import { test } from '../fixtures/app-fixtures';
import { invalidEmailname } from '../test-data/invalid-email';
import { invalidEmailpassword } from '../test-data/invalid-password';
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

  test('Create email account with valid name succeeds', async ({
    emailAccountsPage,
  }) => {
    await emailAccountsPage.openDomainDropdown();

    await emailAccountsPage.verifyAvailableDomains(EXPECTED_DOMAINS);
    await emailAccountsPage.selectDomain(SELECTED_DOMAIN);

    await emailAccountsPage.fillAccountName(ACCOUNT_NAME);
    await emailAccountsPage.generatePassword();
    await emailAccountsPage.createAccount();

    await emailAccountsPage.expectSuccessMessage(ACCOUNT_NAME);
    await emailAccountsPage.expectEmailAccountCreated(
      ACCOUNT_NAME,
      SELECTED_DOMAIN,
    );
  });

  test('Create duplicate email account is rejected', async ({
    emailAccountsPage,
  }) => {
    await emailAccountsPage.createAccountWithGeneratedPassword(
      SELECTED_DOMAIN,
      ACCOUNT_NAME,
    );
    await emailAccountsPage.expectSuccessMessage(ACCOUNT_NAME);

    await emailAccountsPage.successMessageGoBack();

    await emailAccountsPage.createAccountWithGeneratedPassword(
      SELECTED_DOMAIN,
      ACCOUNT_NAME,
    );
    await emailAccountsPage.expectNameErrorMessage(
      EMAIL_ACCOUNT_EXISTS_MESSAGE,
    );
  });

  test.describe('Create email account with invalid name', async () => {
    for (const key of Object.keys(invalidEmailname) as Array<
      keyof typeof invalidEmailname
    >) {
      const { value, testDescription, errorMessage } = invalidEmailname[key];
      test(testDescription, async ({ emailAccountsPage }) => {
        await emailAccountsPage.createAccountWithGeneratedPassword(
          SELECTED_DOMAIN,
          value,
        );
        await emailAccountsPage.expectNameErrorMessage(errorMessage);
      });
    }
  });

  test.describe('Create email account with invalid password', async () => {
    for (const key of Object.keys(invalidEmailpassword) as Array<
      keyof typeof invalidEmailpassword
    >) {
      const { value, testDescription, errorMessage } =
        invalidEmailpassword[key];
      test(testDescription, async ({ emailAccountsPage }) => {
        await emailAccountsPage.createAccountWithProvidedPassword(
          SELECTED_DOMAIN,
          ACCOUNT_NAME,
          value,
        );
        await emailAccountsPage.expectPasswordErrorMessage(errorMessage);
      });
    }
  });
});
