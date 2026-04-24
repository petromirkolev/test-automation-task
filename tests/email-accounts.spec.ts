import { test } from '../fixtures/app-fixtures';
import { messages } from '../utils/messages';
import {
  invalidEmailName,
  invalidEmailPassword,
  validEmailAccount,
} from '../test-data';

test.describe('Automation Test Suite - Email Accounts page', () => {
  test('Create email account with valid input succeeds @required', async ({
    emailAccountsPage,
  }) => {
    const {
      accountName,
      expectedDomains,
      selectedDomain,
      expectedSuccessMessage,
    } = validEmailAccount;

    await test.step('Select and verify available domains', async () => {
      await emailAccountsPage.openDomainDropdown();
      await emailAccountsPage.expectSelectDomainOptions(expectedDomains);
      await emailAccountsPage.selectDomain(selectedDomain);
    });

    await test.step('Fill account name, generate password and submit', async () => {
      await emailAccountsPage.fillAccountName(accountName);
      await emailAccountsPage.clickGeneratePasswordButton();
      await emailAccountsPage.expectPasswordPopulated();
      await emailAccountsPage.clickCreateAccountButton();
    });

    await test.step('Verify successful account creation', async () => {
      await emailAccountsPage.expectSuccessMessage(
        expectedSuccessMessage(accountName, selectedDomain),
      );
      await emailAccountsPage.expectEmailAccountVisible(
        accountName,
        selectedDomain,
      );
    });
  });

  test('Create duplicate email account is rejected', async ({
    generatedAccountName,
    emailAccountsPage,
  }) => {
    const { selectedDomain, expectedSuccessMessage } = validEmailAccount;

    await test.step('Prepare existing account', async () => {
      await emailAccountsPage.createAccount(
        selectedDomain,
        generatedAccountName,
      );
      await emailAccountsPage.expectSuccessMessage(
        expectedSuccessMessage(generatedAccountName, selectedDomain),
      );
      await emailAccountsPage.clickBackButton();
    });

    await test.step('Try to create the same account again', async () => {
      await emailAccountsPage.createAccount(
        selectedDomain,
        generatedAccountName,
      );
      await emailAccountsPage.expectNameErrorMessage(
        messages.EMAIL_ACCOUNT_EXISTS,
      );
    });
  });

  test.describe('Create email account with invalid name', () => {
    for (const key of Object.keys(invalidEmailName) as Array<
      keyof typeof invalidEmailName
    >) {
      const { value, selectedDomain, testDescription, errorMessage } =
        invalidEmailName[key];

      test(testDescription, async ({ emailAccountsPage }) => {
        await emailAccountsPage.createAccount(selectedDomain, value);
        await emailAccountsPage.expectNameErrorMessage(errorMessage);
      });
    }
  });

  test.describe('Create email account with invalid password', () => {
    for (const key of Object.keys(invalidEmailPassword) as Array<
      keyof typeof invalidEmailPassword
    >) {
      const {
        accountName,
        selectedDomain,
        value,
        testDescription,
        errorMessage,
      } = invalidEmailPassword[key];

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
