import { EmailAccountsPage } from '../pages/email-accounts.page';

export const help = {
  async createExistingAccount(
    selectedDomain: string,
    name: string,
    emailAccountsPage: EmailAccountsPage,
  ): Promise<void> {
    await emailAccountsPage.createAccount(selectedDomain, name);
    await emailAccountsPage.expectSuccessMessage(name);
    await emailAccountsPage.clickBackButton();
  },

  createUniqueName(prefix = 'test_account'): string {
    return prefix + Date.now() + Math.floor(Math.random() * 10000);
  },
};
