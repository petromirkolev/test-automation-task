import { msg } from '../utils/constants';
import { domains } from './domains-list';
import { validEmailAccount } from './valid-email-account';

export const invalidEmailpassword = {
  emptyPassword: {
    testDescription: 'Invalid empty password',
    value: '',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: msg.REQUIRED_FIELD,
  },

  whiteSpacedPassword: {
    testDescription: 'Invalid white-spaced password',
    value: '      ',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: msg.PASSWORD_TOO_SHORT,
  },

  shortPassword: {
    testDescription: 'Invalid short password',
    value: 'T3$ting',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: msg.PASSWORD_TOO_SHORT,
  },

  repeatedPassword: {
    testDescription: 'Invalid repeated password',
    value: 'T3$tingT3$tingT3$ting',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: msg.PASSWORD_REPEATED,
  },

  commonPassword: {
    testDescription: 'Invalid common password',
    value: 'adminpass',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: msg.PASSWORD_COMMON,
  },

  nonASCIIpassword: {
    testDescription: 'Invalid non-ASCII password',
    value: 'парола123',
    selectedDomain: domains.selectedDomain,
    accountName: validEmailAccount.accountName,
    errorMessage: msg.PASSWORD_UNSUPPORTED,
  },
};
