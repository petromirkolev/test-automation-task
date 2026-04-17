import { EmailAccountsPage } from '../pages/email-accounts.page';
import { VALID_EMAIL_ACCOUNT } from '../test-data/email-account';

export function decodeJwtPayload(token: string) {
  const payload = token.split('.')[1];
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
}

export async function createExistingAccount(
  emailAccountsPage: EmailAccountsPage,
): Promise<void> {
  await emailAccountsPage.createAccount(
    VALID_EMAIL_ACCOUNT.selectedDomain,
    VALID_EMAIL_ACCOUNT.accountName,
  );
  await emailAccountsPage.expectSuccessMessage(VALID_EMAIL_ACCOUNT.accountName);
  await emailAccountsPage.clickBackButton();
}
