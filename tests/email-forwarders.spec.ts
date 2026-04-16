import { test } from '../fixtures/email-forwarders-fixtures';
import { EXPECTED_DOMAINS, SELECTED_DOMAIN } from '../utils/constants';

test.describe('Automation Test Suite - Email Forwarders page', () => {
  test('Add empty email forwarder and verify required field error', async ({
    appPage,
    emailForwardersPage,
  }) => {
    await appPage.open();
    await appPage.goToEmailForwarders();

    await emailForwardersPage.openDomainDropdown();
    await emailForwardersPage.verifyAvailableDomains(EXPECTED_DOMAINS);

    await emailForwardersPage.selectDomain(SELECTED_DOMAIN);

    await emailForwardersPage.createEmailForwarder();

    await emailForwardersPage.expectForwardToRequiredFieldError();
  });
});
