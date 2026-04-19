import { domains } from './domains-list';
import { validEmailAccount } from './valid-email-account';

export const validEmailForwarder = {
  fromName: validEmailAccount.accountName,
  toEmailAddress: 'test_account@test.com',
  selectedDomain: domains.selectedDomain,
  expectedDomains: domains.expectedDomains,
  expectedSuccessMessage: (fromName: string, selectedDomain: string) =>
    `Forward rule for ${fromName}@${selectedDomain} is created`,
};
