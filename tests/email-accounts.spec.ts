import { test } from '../fixtures/app-fixtures';
import { invalidEmailname } from '../test-data/invalid-email';
import { invalidEmailpassword } from '../test-data/invalid-password';
import { createExistingAccount } from '../utils/helpers';
import { msg } from '../utils/constants';
import { DOMAINS } from '../test-data/domains-list';
import { VALID_EMAIL_ACCOUNT } from '../test-data/email-account';

test.describe('Automation Test Suite - Email Accounts page', () => {
  test.beforeEach(async ({ appPage }) => {
    await appPage.open();
    await appPage.goToEmailAccounts();
  });

  test('Create email account with valid input succeeds @required', async ({
    emailAccountsPage,
  }) => {
    await test.step('Select and verify available domains', async () => {
      await emailAccountsPage.openDomainDropdown();
      await emailAccountsPage.expectSelectDomainOptions(
        DOMAINS.expectedDomains,
      );
      await emailAccountsPage.selectDomain(DOMAINS.selectedDomain);
    });

    await test.step('Create email account', async () => {
      await emailAccountsPage.fillAccountName(VALID_EMAIL_ACCOUNT.accountName);
      await emailAccountsPage.generatePassword();
      await emailAccountsPage.expectPasswordPopulated();
      await emailAccountsPage.clickCreateAccountBtn();
    });

    await test.step('Verify successful account creation', async () => {
      await emailAccountsPage.expectSuccessMessage(
        VALID_EMAIL_ACCOUNT.accountName,
      );
      await emailAccountsPage.expectEmailAccountCreated(
        VALID_EMAIL_ACCOUNT.accountName,
        DOMAINS.selectedDomain,
      );
    });
  });

  test('Create duplicate email account is rejected', async ({
    emailAccountsPage,
  }) => {
    await test.step('Prepare existing account', async () => {
      await createExistingAccount(emailAccountsPage);
    });

    await test.step('Try to create the same account again', async () => {
      await emailAccountsPage.createAccount(
        DOMAINS.selectedDomain,
        VALID_EMAIL_ACCOUNT.accountName,
      );
      await emailAccountsPage.expectNameErrorMessage(
        msg.EMAIL_ACCOUNT_EXISTS_MESSAGE,
      );
    });
  });

  test.describe('Create email account with invalid name', () => {
    for (const key of Object.keys(invalidEmailname) as Array<
      keyof typeof invalidEmailname
    >) {
      const { value, testDescription, errorMessage } = invalidEmailname[key];
      test(testDescription, async ({ emailAccountsPage }) => {
        await emailAccountsPage.createAccount(DOMAINS.selectedDomain, value);
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
          DOMAINS.selectedDomain,
          VALID_EMAIL_ACCOUNT.accountName,
          value,
        );
        await emailAccountsPage.expectPasswordErrorMessage(errorMessage);
      });
    }
  });
});
