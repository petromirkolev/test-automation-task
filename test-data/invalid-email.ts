import {
  INVALID_EMAIL_NAME_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
} from '../utils/constants';

export const invalidEmailname = {
  emptyName: {
    value: '',
    testDescription: 'Invalid empty email name',
    errorMessage: REQUIRED_FIELD_MESSAGE,
  },

  nameWithSpecialCharacters: {
    value: 'test#account',
    testDescription: 'Invalid email name with special characters',
    errorMessage: INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceStart: {
    value: ' test_account',
    testDescription: 'Invalid email name with white space before',
    errorMessage: INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceMiddle: {
    value: 'test account',
    testDescription: 'Invalid email name with white space in the middle',
    errorMessage: INVALID_EMAIL_NAME_MESSAGE,
  },

  nameWithWhiteSpaceEnd: {
    value: 'test_account ',
    testDescription: 'Invalid email name with white space after',
    errorMessage: INVALID_EMAIL_NAME_MESSAGE,
  },
};
