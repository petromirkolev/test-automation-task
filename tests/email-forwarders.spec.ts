import { test } from '../fixtures/app-fixtures';
import { messages } from '../utils/messages';
import {
  invalidEmailName,
  invalidEmailAddress,
  validEmailForwarder,
} from '../test-data';

test.describe('Automation Test Suite - Email Forwarders page', () => {
  test.beforeEach(async ({ appPage }) => {
    await appPage.open();
    await appPage.goToEmailForwarders();
  });

  test('Add empty email forwarder and verify required field error @required', async ({
    emailForwardersPage,
  }) => {
    const { expectedDomains, selectedDomain } = validEmailForwarder;

    await test.step('Select and verify available domains', async () => {
      await emailForwardersPage.openDomainDropdown();
      await emailForwardersPage.expectSelectDomainOptions(expectedDomains);
      await emailForwardersPage.selectDomain(selectedDomain);
    });

    await test.step('Submit forwarder form with empty inputs', async () => {
      await emailForwardersPage.clickCreateEmailForwarderButton();
    });

    await test.step('Verify required field error message', async () => {
      await emailForwardersPage.expectForwardFromFieldError(
        messages.REQUIRED_FIELD,
      );
    });
  });

  test('Add email forwarder with valid data succeeds', async ({
    emailForwardersPage,
  }) => {
    const { selectedDomain, fromName, toEmailAddress, expectedSuccessMessage } =
      validEmailForwarder;

    await test.step('Fill and submit email forwarder form', async () => {
      await emailForwardersPage.createForwarder(
        selectedDomain,
        fromName,
        toEmailAddress,
      );
    });

    await test.step('Verify successful email forwarder creation', async () => {
      await emailForwardersPage.expectSuccessMessage(
        expectedSuccessMessage(fromName, selectedDomain),
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
