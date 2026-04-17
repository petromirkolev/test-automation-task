import { test } from '../fixtures/app-fixtures';
import { DOMAINS } from '../test-data/domains-list';
import { VALID_EMAIL_FORWARDER } from '../test-data/email-forwarder';
import {
  invalidEmailAddress,
  invalidEmailname,
} from '../test-data/invalid-email';
import { msg } from '../utils/constants';

test.describe('Automation Test Suite - Email Forwarders page', () => {
  test.beforeEach(async ({ appPage }) => {
    await appPage.open();
    await appPage.goToEmailForwarders();
  });

  test('Add empty email forwarder and verify required field error @required', async ({
    emailForwardersPage,
  }) => {
    await test.step('Select and verify available domains', async () => {
      await emailForwardersPage.openDomainDropdown();
      await emailForwardersPage.expectSelectDomainOptions(
        DOMAINS.expectedDomains,
      );
      await emailForwardersPage.selectDomain(DOMAINS.selectedDomain);
    });

    await test.step('Create email forwarder', async () => {
      await emailForwardersPage.createForwarder();
    });

    await test.step('Verify required field error message', async () => {
      await emailForwardersPage.expectForwardFromFieldError(
        msg.REQUIRED_FIELD_MESSAGE,
      );
    });
  });

  test('Add email forwarder with valid data succeeds', async ({
    emailForwardersPage,
  }) => {
    await test.step('Fill and submit email forwarder form', async () => {
      await emailForwardersPage.createForwarder(
        DOMAINS.selectedDomain,
        VALID_EMAIL_FORWARDER.fromName,
        VALID_EMAIL_FORWARDER.toEmailAddress,
      );
    });

    await test.step('Verify successful email forwarder creation', async () => {
      await emailForwardersPage.expectSuccessMessage(
        VALID_EMAIL_FORWARDER.fromName,
      );
    });
  });

  test.describe('Create email forwarder with invalid from name', () => {
    for (const key of Object.keys(invalidEmailname) as Array<
      keyof typeof invalidEmailname
    >) {
      const { value, testDescription, errorMessage } = invalidEmailname[key];
      test(testDescription, async ({ emailForwardersPage }) => {
        await emailForwardersPage.createForwarder(
          DOMAINS.selectedDomain,
          value,
        );

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
          DOMAINS.selectedDomain,
          VALID_EMAIL_FORWARDER.fromName,
          value,
        );

        await emailForwardersPage.expectForwardToFieldError(errorMessage);
      });
    }
  });
});
