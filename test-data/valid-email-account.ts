import { domains } from './domains';

export const validEmailAccount = {
  accountName: 'test_account',
  selectedDomain: domains.selectedDomain,
  expectedDomains: domains.expectedDomains,
  expectedSuccessMessage: (accountName: string, selectedDomain: string) =>
    `Email account ${accountName}@${selectedDomain} is created`,
};
