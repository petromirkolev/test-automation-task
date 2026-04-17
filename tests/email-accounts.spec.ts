import { test } from '../fixtures/app-fixtures';
import {
  ACCOUNT_EXISTS_MESSAGE,
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

    await emailAccountsPage.verifyAvailableDomains(EXPECTED_DOMAINS);
    await emailAccountsPage.selectDomain(SELECTED_DOMAIN);

    await emailAccountsPage.fillAccountName(ACCOUNT_NAME);
    await emailAccountsPage.generatePassword();
    await emailAccountsPage.createAccount();

    await emailAccountsPage.expectSuccessMessageContains(ACCOUNT_NAME);
    await emailAccountsPage.expectEmailAccountCreated(
      ACCOUNT_NAME,
      SELECTED_DOMAIN,
    );
  });

  test('Create duplicate email account', async ({ emailAccountsPage }) => {
    await emailAccountsPage.createAccountWithGeneratedPassword(
      SELECTED_DOMAIN,
      ACCOUNT_NAME,
    );
    await emailAccountsPage.createAccount();
    await emailAccountsPage.expectEmailAccountCreated(
      ACCOUNT_NAME,
      SELECTED_DOMAIN,
    );

    await emailAccountsPage.goBack();
    await emailAccountsPage.createAccountWithGeneratedPassword(
      SELECTED_DOMAIN,
      ACCOUNT_NAME,
    );
    await emailAccountsPage.expectErrorMessageContains(ACCOUNT_EXISTS_MESSAGE);
  });

  test('Create email account with invalid account name', async () => {});

  test('Create email account with invalid password', async () => {});
});
