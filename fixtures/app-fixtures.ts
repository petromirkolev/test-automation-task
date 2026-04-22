import { test as base, expect } from '@playwright/test';
import { AppPage } from '../pages/app-page';
import { EmailAccountsPage } from '../pages/email-accounts.page';
import { EmailForwardersPage } from '../pages/email-forwarders.page';

type AppFixtures = {
  appPage: AppPage;
  generatedAccountName: string;
  emailAccountsPage: EmailAccountsPage;
  emailForwardersPage: EmailForwardersPage;
};

export const test = base.extend<AppFixtures>({
  appPage: async ({ page }, use) => {
    await use(new AppPage(page));
  },

  generatedAccountName: async ({}, use, testInfo) => {
    await use(`acc_${testInfo.project.name}_${Date.now()}`);
  },

  emailAccountsPage: async ({ appPage, page }, use) => {
    await appPage.open();
    await appPage.goToEmailAccounts();
    await use(new EmailAccountsPage(page));
  },

  emailForwardersPage: async ({ appPage, page }, use) => {
    await appPage.open();
    await appPage.goToEmailForwarders();
    await use(new EmailForwardersPage(page));
  },
});

export { expect };
