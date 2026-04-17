import { test } from '../fixtures/app-fixtures';
import { invalidEmailname } from '../test-data/invalid-email-account';
import { invalidEmailpassword } from '../test-data/invalid-password';
import { createExistingAccount } from '../utils/helpers';
import { msg } from '../utils/constants';
import { validEmailAccount } from '../test-data/valid-email-account';

test.describe('Automation Test Suite - Email Accounts page', () => {
  test.beforeEach(async ({ appPage }) => {
    await appPage.open();
    await appPage.goToEmailAccounts();
  });

  test('Create email account with valid input succeeds @required', async ({
    emailAccountsPage,
  }) => {
    const data = validEmailAccount;

    await test.step('Select and verify available domains', async () => {
      await emailAccountsPage.openDomainDropdown();
      await emailAccountsPage.expectSelectDomainOptions(data.expectedDomains);
      await emailAccountsPage.selectDomain(data.selectedDomain);
    });

    await test.step('Create email account', async () => {
      await emailAccountsPage.fillAccountName(data.accountName);
      await emailAccountsPage.generatePassword();
      await emailAccountsPage.expectPasswordPopulated();
      await emailAccountsPage.clickCreateAccountBtn();
    });

    await test.step('Verify successful account creation', async () => {
      await emailAccountsPage.expectSuccessMessage(
        data.expectedSuccessMessage(data.accountName, data.selectedDomain),
      );
      await emailAccountsPage.expectEmailAccountCreated(
        data.accountName,
        data.selectedDomain,
      );
    });
  });

  test('Create duplicate email account is rejected', async ({
    emailAccountsPage,
  }) => {
    const data = validEmailAccount;

    await test.step('Prepare existing account', async () => {
      await createExistingAccount(emailAccountsPage);
    });

    await test.step('Try to create the same account again', async () => {
      await emailAccountsPage.createAccount(
        data.selectedDomain,
        data.accountName,
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
      const { value, selectedDomain, testDescription, errorMessage } =
        invalidEmailname[key];
      test(testDescription, async ({ emailAccountsPage }) => {
        await emailAccountsPage.createAccount(selectedDomain, value);
        await emailAccountsPage.expectNameErrorMessage(errorMessage);
      });
    }
  });

  test.describe('Create email account with invalid password', () => {
    for (const key of Object.keys(invalidEmailpassword) as Array<
      keyof typeof invalidEmailpassword
    >) {
      const {
        accountName,
        selectedDomain,
        value,
        testDescription,
        errorMessage,
      } = invalidEmailpassword[key];
      test(testDescription, async ({ emailAccountsPage }) => {
        await emailAccountsPage.createAccount(
          selectedDomain,
          accountName,
          value,
        );
        await emailAccountsPage.expectPasswordErrorMessage(errorMessage);
      });
    }
  });
});
