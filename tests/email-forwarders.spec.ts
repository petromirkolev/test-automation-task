import { test } from '../fixtures/app-fixtures';
import { msg } from '../utils/constants';
import {
  invalidEmailName,
  invalidEmailAddress,
  validEmailForwarder,
} from '../test-data';

test.describe('Automation Test Suite - Email Forwarders page', () => {
  test.beforeEach(async ({ appPage }) => {
    await appPage.clearStorage();
    await appPage.open();
    await appPage.goToEmailForwarders();
  });

  test('Add empty email forwarder and verify required field error @required', async ({
    emailForwardersPage,
  }) => {
    const data = validEmailForwarder;

    await test.step('Select and verify available domains', async () => {
      await emailForwardersPage.openDomainDropdown();
      await emailForwardersPage.expectSelectDomainOptions(data.expectedDomains);
      await emailForwardersPage.selectDomain(data.selectedDomain);
    });

    await test.step('Create email forwarder', async () => {
      await emailForwardersPage.createForwarder();
    });

    await test.step('Verify required field error message', async () => {
      await emailForwardersPage.expectForwardFromFieldError(msg.REQUIRED_FIELD);
    });
  });

  test('Add email forwarder with valid data succeeds', async ({
    emailForwardersPage,
  }) => {
    const data = validEmailForwarder;

    await test.step('Fill and submit email forwarder form', async () => {
      await emailForwardersPage.createForwarder(
        data.selectedDomain,
        data.fromName,
        data.toEmailAddress,
      );
    });

    await test.step('Verify successful email forwarder creation', async () => {
      await emailForwardersPage.expectSuccessMessage(
        data.expectedSuccessMessage(data.fromName, data.selectedDomain),
      );
    });
  });

  test.describe('Create email forwarder with invalid from name', () => {
    for (const key of Object.keys(invalidEmailName) as Array<
      keyof typeof invalidEmailName
    >) {
      const { value, selectedDomain, testDescription, errorMessage } =
        invalidEmailName[key];
      test(testDescription, async ({ emailForwardersPage }) => {
        await emailForwardersPage.createForwarder(selectedDomain, value);
        await emailForwardersPage.expectForwardFromFieldError(errorMessage);
      });
    }
  });

  test.describe('Create email forwarder with invalid to email address', () => {
    for (const key of Object.keys(invalidEmailAddress) as Array<
      keyof typeof invalidEmailAddress
    >) {
      const { value, selectedDomain, testDescription, errorMessage } =
        invalidEmailAddress[key];
      test(testDescription, async ({ emailForwardersPage }) => {
        await emailForwardersPage.createForwarder(
          selectedDomain,
          validEmailForwarder.fromName,
          value,
        );
        await emailForwardersPage.expectForwardToFieldError(errorMessage);
      });
    }
  });
});
