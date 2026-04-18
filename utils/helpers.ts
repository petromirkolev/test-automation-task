import { EmailAccountsPage } from '../pages/email-accounts.page';

export function decodeJwtPayload(token: string) {
  const payload = token.split('.')[1];
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
}

export async function createExistingAccount(
  selectedDomain: string,
  name: string,
  emailAccountsPage: EmailAccountsPage,
): Promise<void> {
  await emailAccountsPage.createAccount(selectedDomain, name);
  await emailAccountsPage.expectSuccessMessage(name);
  await emailAccountsPage.clickBackButton();
}

export function uniqueName(prefix = 'test_account'): string {
  return prefix + Date.now() + Math.floor(Math.random() * 10000);
}
