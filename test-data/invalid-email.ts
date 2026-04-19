import { msg } from '../utils/constants';
import { domains } from './domains-list';

export const invalidEmailname = {
  emptyName: {
    value: '',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid empty email name',
    errorMessage: msg.REQUIRED_FIELD,
  },

  whiteSpacedName: {
    value: '     ',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid white-space email name',
    errorMessage: msg.INVALID_EMAIL_NAME,
  },

  nameWithSpecialCharacters: {
    value: 'test#account',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with special characters',
    errorMessage: msg.INVALID_EMAIL_NAME,
  },

  nameWithWhiteSpaceStart: {
    value: ' test_account',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space before',
    errorMessage: msg.INVALID_EMAIL_NAME,
  },

  nameWithWhiteSpaceMiddle: {
    value: 'test account',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space in the middle',
    errorMessage: msg.INVALID_EMAIL_NAME,
  },

  nameWithWhiteSpaceEnd: {
    value: 'test_account ',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email name with white space after',
    errorMessage: msg.INVALID_EMAIL_NAME,
  },
};

export const invalidEmailAddress = {
  emptyAddress: {
    value: '',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid empty email address',
    errorMessage: msg.REQUIRED_FIELD,
  },

  emptyWhiteSpacedAddress: {
    value: '     ',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid white-spaced email address',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressWithSpecialCharacters: {
    value: 'test_account#test.com',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email address with special characters',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressWhiteSpace: {
    value: 'test account@test.com',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email address with white space',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressDoubleAtSign: {
    value: 'test_account@@test.com ',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email address with double at sign',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressWithComma: {
    value: 'test_account@test,com ',
    selectedDomain: domains.selectedDomain,
    testDescription: 'Invalid email address with comma',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },
};
