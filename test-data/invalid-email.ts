import { msg } from '../utils/constants';

export const invalidEmailname = {
  emptyName: {
    value: '',
    testDescription: 'Invalid empty email name',
    errorMessage: msg.REQUIRED_FIELD_MESSAGE,
  },

  nameWithSpecialCharacters: {
    value: 'test#account',
    testDescription: 'Invalid email name with special characters',
    errorMessage: msg.INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceStart: {
    value: ' test_account',
    testDescription: 'Invalid email name with white space before',
    errorMessage: msg.INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceMiddle: {
    value: 'test account',
    testDescription: 'Invalid email name with white space in the middle',
    errorMessage: msg.INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceEnd: {
    value: 'test_account ',
    testDescription: 'Invalid email name with white space after',
    errorMessage: msg.INVALID_EMAIL_NAME_MESSAGE,
  },
};

export const invalidEmailAddress = {
  emptyAddress: {
    value: '',
    testDescription: 'Invalid empty to email address',
    errorMessage: msg.REQUIRED_FIELD_MESSAGE,
  },

  addressNoName: {
    value: '@test.com',
    testDescription: 'Invalid email name with special characters',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressNoExt: {
    value: ' test_account@test',
    testDescription: 'Invalid email name with white space before',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressWhiteSpace: {
    value: 'test account@test.com',
    testDescription: 'Invalid email name with white space in the middle',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },

  addressNoAtSign: {
    value: 'test_accounttest.com ',
    testDescription: 'Invalid email name with white space after',
    errorMessage: msg.INVALID_EMAIL_IN_LIST,
  },
};
