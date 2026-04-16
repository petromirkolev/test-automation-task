import { test } from '../fixtures/email-accounts-fixtures';
import {
  ACCOUNT_NAME,
  EXPECTED_DOMAINS,
  SELECTED_DOMAIN,
} from '../utils/constants';

test.describe('Automation Test Suite - Email Accounts page', () => {
  test('Add an email account with valid input succeeds', async ({
    appPage,
    emailAccountsPage,
  }) => {
    await appPage.open();
    await appPage.goToEmailAccounts();

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

  test('Create duplicate email account', async () => {});

  test('Create email account with empty account name', async () => {});

  test('Create email account with empty password', async () => {});

  test('Create email account with invalid account name', async () => {});

  test('Create email account with invalid password', async () => {});
});
