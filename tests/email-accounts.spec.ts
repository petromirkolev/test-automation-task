import { test, expect } from '../fixtures/email-accounts-fixtures';
import { EXPECTED_DOMAINS } from '../utils/constants';

test.describe('Automation Test Suite - Email Accounts page', () => {
  test('Add an email account with valid input succeeds', async ({
    appPage,
    emailAccountsPage,
  }) => {
    await appPage.open();
    await appPage.goToEmailAccounts();

    await emailAccountsPage.expectEmailAccountsPageLoaded();
    await emailAccountsPage.openDomainDropdown();
    await emailAccountsPage.verifyAvailableDomains(EXPECTED_DOMAINS);

    await emailAccountsPage.selectDomain('site-tools-demo.net');

    await emailAccountsPage.fillEmailName('petromir');

    await expect(emailAccountsPage.generatePasswordButton).toBeVisible();
    await expect(emailAccountsPage.generatePasswordButton).toBeEnabled();

    await emailAccountsPage.generatePasswordButton.click();
    await emailAccountsPage.expectPasswordPopulated();

    await emailAccountsPage.emailAccountCreateButton.click();
    await expect(emailAccountsPage.emailCreateSuccessMessage).toBeVisible();
    await expect(emailAccountsPage.emailCreateSuccessMessage).toContainText(
      new RegExp('petromir'),
    );
    await emailAccountsPage.expectEmailAccountCreated(
      'petromir@site-tools-demo.net',
    );
  });
});

// 5. Verify Select Domain dropdown contains only the expected domain values
// 6. Verify password is populated after clicking Generate
// 7. Verify success message is shown after account creation
// 8. Verify created account appears in the Manage Email accounts list
// 9. Create email account without selecting domain
// 10. Create email account with empty account name
// 11. Create email account with invalid account name
// 12. Create duplicate email account
// 13. Verify Create button behavior when required fields are incomplete
