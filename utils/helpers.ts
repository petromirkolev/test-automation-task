import { EmailAccountsPage } from '../pages/email-accounts.page';
import { validEmailAccount } from '../test-data/valid-email-account';

export function decodeJwtPayload(token: string) {
  const payload = token.split('.')[1];
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
}

export async function createExistingAccount(
  emailAccountsPage: EmailAccountsPage,
): Promise<void> {
  const data = validEmailAccount;

  await emailAccountsPage.createAccount(data.selectedDomain, data.accountName);
  await emailAccountsPage.expectSuccessMessage(data.accountName);
  await emailAccountsPage.clickBackButton();
}
