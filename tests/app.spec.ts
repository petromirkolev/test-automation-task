import { test, expect } from '../fixtures/app-fixtures';
import { token } from '../test-data/token';

test.describe('Application page', () => {
  test('Access is allowed with valid demoToken', async ({ appPage }) => {
    await appPage.open();
    await appPage.expectPageTitle('Hello');
  });

  test('Access is forbidden with empty demoToken', async ({ appPage }) => {
    await appPage.openRaw(token.empty);
    await appPage.expectPageTitle('Invalid Link');
  });

  test('Redirects to main website with invalid demoToken', async ({
    appPage,
    page,
  }) => {
    await appPage.openRaw(token.invalid);
    await expect(page).toHaveTitle(/Site Tools by SiteGround/);
  });

  test('Redirects to main website with malformed demoToken', async ({
    appPage,
    page,
  }) => {
    await appPage.openRaw(token.malformed);
    await expect(page).toHaveTitle(/Site Tools by SiteGround/);
  });
});
