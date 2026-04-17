import { test } from '../fixtures/app-fixtures';
import {
  invalidEmailAddress,
  invalidEmailname,
} from '../test-data/invalid-email';
import {
  ACCOUNT_NAME,
  EMAIL_ADDRESS,
  EXPECTED_DOMAINS,
  REQUIRED_FIELD_MESSAGE,
  SELECTED_DOMAIN,
} from '../utils/constants';

test.describe('Automation Test Suite - Email Forwarders page', () => {
  test.beforeEach(async ({ appPage }) => {
    await appPage.open();
    await appPage.goToEmailForwarders();
  });

  test('Add empty email forwarder and verify required field error', async ({
    emailForwardersPage,
  }) => {
    await test.step('Select and verify available domains', async () => {
      await emailForwardersPage.openDomainDropdown();
      await emailForwardersPage.expectSelectDomainOptions(EXPECTED_DOMAINS);
      await emailForwardersPage.selectDomain(SELECTED_DOMAIN);
    });

    await test.step('Create email forwarder', async () => {
      await emailForwardersPage.createForwarder();
    });

    await test.step('Verify required field error message', async () => {
      await emailForwardersPage.expectForwardFromFieldError(
        REQUIRED_FIELD_MESSAGE,
      );
    });
  });

  test('Add email forwarder with valid data succeeds', async ({
    emailForwardersPage,
  }) => {
    await test.step('Fill and submit email forwarder form', async () => {
      await emailForwardersPage.createForwarder(
        SELECTED_DOMAIN,
        ACCOUNT_NAME,
        EMAIL_ADDRESS,
      );
    });

    await test.step('Verify successful email forwarder creation', async () => {
      await emailForwardersPage.expectSuccessMessage(ACCOUNT_NAME);
    });
  });

  test.describe('Create email forwarder with invalid from name', () => {
    for (const key of Object.keys(invalidEmailname) as Array<
      keyof typeof invalidEmailname
    >) {
      const { value, testDescription, errorMessage } = invalidEmailname[key];
      test(testDescription, async ({ emailForwardersPage }) => {
        await emailForwardersPage.createForwarder(SELECTED_DOMAIN, value);

        await emailForwardersPage.expectForwardFromFieldError(errorMessage);
      });
    }
  });

  test.describe('Create email forwarder with invalid to email address', () => {
    for (const key of Object.keys(invalidEmailAddress) as Array<
      keyof typeof invalidEmailAddress
    >) {
      const { value, testDescription, errorMessage } = invalidEmailAddress[key];
      test(testDescription, async ({ emailForwardersPage }) => {
        await emailForwardersPage.createForwarder(
          SELECTED_DOMAIN,
          ACCOUNT_NAME,
          value,
        );

        await emailForwardersPage.expectForwardToFieldError(errorMessage);
      });
    }
  });
});
