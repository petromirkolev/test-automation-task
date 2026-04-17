import { test } from '../fixtures/app-fixtures';
import { invalidToken } from '../test-data/invalid-token';

test.describe('Automation Test Suite - Application page', () => {
  test('Access is allowed with valid demoToken', async ({ appPage }) => {
    const payload = await appPage.open();

    await appPage.expectPageAvatar(payload.first_name + payload.last_name);
    await appPage.expectPageTitle(`Hello, ${payload.first_name}!`);
  });

  test.describe('Invalid token', () => {
    for (const key of Object.keys(invalidToken) as Array<
      keyof typeof invalidToken
    >) {
      const { testDescription, value, title } = invalidToken[key];
      test(testDescription, async ({ appPage }) => {
        await appPage.openRaw(value);
        await appPage.expectPageTitle(title);
      });
    }
  });
});
