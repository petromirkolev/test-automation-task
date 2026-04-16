import { test as base, expect } from '@playwright/test';
import { AppPage } from '../pages/app-page';
import { EmailAccountsPage } from '../pages/email-accounts.page';
import { EmailForwardersPage } from '../pages/email-forwarders.page';
import { EmailBasePage } from '../pages/email-base.page';

type AppFixtures = {
  appPage: AppPage;
  emailBasePage: EmailBasePage;
  emailAccountsPage: EmailAccountsPage;
  emailForwardersPage: EmailForwardersPage;
};

export const test = base.extend<AppFixtures>({
  appPage: async ({ page }, use) => {
    await use(new AppPage(page));
  },

  emailBasePage: async ({ page }, use) => {
    await use(new EmailBasePage(page));
  },

  emailAccountsPage: async ({ page }, use) => {
    await use(new EmailAccountsPage(page));
  },

  emailForwardersPage: async ({ page }, use) => {
    await use(new EmailForwardersPage(page));
  },
});

export { expect };
