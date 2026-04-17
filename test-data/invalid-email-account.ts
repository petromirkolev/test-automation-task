import { msg } from '../utils/constants';
import { domains } from './domains-list';

export const invalidEmailname = {
  emptyName: {
    value: '',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid empty email name',
    errorMessage: msg.REQUIRED_FIELD_MESSAGE,
  },

  nameWithSpecialCharacters: {
    value: 'test#account',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with special characters',
    errorMessage: msg.INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceStart: {
    value: ' test_account',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space before',
    errorMessage: msg.INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceMiddle: {
    value: 'test account',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space in the middle',
    errorMessage: msg.INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceEnd: {
    value: 'test_account ',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space after',
    errorMessage: msg.INVALID_EMAIL_NAME_MESSAGE,
  },
};

export const invalidEmailAddress = {
  emptyAddress: {
    value: '',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid empty to email address',
    errorMessage: msg.REQUIRED_FIELD_MESSAGE,
  },

  addressNoName: {
    value: '@test.com',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with special characters',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressNoExt: {
    value: ' test_account@test',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space before',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressWhiteSpace: {
    value: 'test account@test.com',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space in the middle',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressNoAtSign: {
    value: 'test_accounttest.com ',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space after',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },
};
