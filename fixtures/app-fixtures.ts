import { test as base, expect } from '@playwright/test';
import { AppPage } from '../pages/app-page';
import { EmailAccountsPage } from '../pages/email-accounts.page';

type AppFixtures = {
  appPage: AppPage;
  emailAccountsPage: EmailAccountsPage;
};

export const test = base.extend<AppFixtures>({
  appPage: async ({ page }, use) => {
    await use(new AppPage(page));
  },

  emailAccountsPage: async ({ page }, use) => {
    await use(new EmailAccountsPage(page));
  },
});

export { expect };
