import { EmailAccountsPage } from '../pages/email-accounts.page';
import { ACCOUNT_NAME, SELECTED_DOMAIN } from './constants';

export function decodeJwtPayload(token: string) {
  const payload = token.split('.')[1];
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
}

export async function createExistingAccount(
  emailAccountsPage: EmailAccountsPage,
): Promise<void> {
  await emailAccountsPage.createAccount(SELECTED_DOMAIN, ACCOUNT_NAME);
  await emailAccountsPage.expectSuccessMessage(ACCOUNT_NAME);
  await emailAccountsPage.clickBackButton();
}
