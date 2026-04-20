import { messages } from '../utils/messages';
import { domains } from './domains';
import { validEmailAccount } from './valid-email-account-input';

export const invalidEmailPassword = {
  emptyPassword: {
    testDescription: 'Invalid empty password',
    value: '',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: messages.REQUIRED_FIELD,
  },

  whiteSpacedPassword: {
    testDescription: 'Invalid password with white spaces',
    value: '      ',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: messages.PASSWORD_TOO_SHORT,
  },

  shortPassword: {
    testDescription: 'Invalid short password',
    value: 'T3$ting',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: messages.PASSWORD_TOO_SHORT,
  },

  nonASCIIpassword: {
    testDescription: 'Invalid non-ASCII password',
    value: 'парола123',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: messages.PASSWORD_UNSUPPORTED,
  },
};
