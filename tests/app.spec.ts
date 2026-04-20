import { test } from '../fixtures/app-fixtures';
import { tokenPayload } from '../test-data';

test.describe('Automation Test Suite - Application page', () => {
  test('Application access is allowed with valid demoToken', async ({
    appPage,
  }) => {
    await appPage.open();

    await appPage.expectPageAvatar(
      tokenPayload.first_name + tokenPayload.last_name,
    );
    await appPage.expectPageTitle(`Hello, ${tokenPayload.first_name}!`);
  });
});
