import {
  INVALID_COMMON_PASS,
  INVALID_PASS_TOO_SHORT,
  INVALID_REPEAT_PASS,
  INVALID_UNSUPPORTED_PASS,
  REQUIRED_FIELD_MESSAGE,
} from '../utils/constants';

export const invalidEmailpassword = {
  emptyPassword: {
    testDescription: 'Invalid empty password',
    value: '',
    errorMessage: REQUIRED_FIELD_MESSAGE,
  },

  whiteSpacedPassword: {
    testDescription: 'Invalid white-spaced password',
    value: '      ',
    errorMessage: REQUIRED_FIELD_MESSAGE,
  },

  shortPassword: {
    testDescription: 'Invalid short password',
    value: 'T3$ting',
    errorMessage: INVALID_PASS_TOO_SHORT,
  },

  repeatedPassword: {
    testDescription: 'Invalid repeated password',
    value: 'T3$tingT3$tingT3$ting',
    errorMessage: INVALID_REPEAT_PASS,
  },

  commonPassword: {
    testDescription: 'Invalid common password',
    value: 'testingpass',
    errorMessage: INVALID_COMMON_PASS,
  },

  nonASCIIpassword: {
    testDescription: 'Invalid non-ASCII password',
    value: 'парола123',
    errorMessage: INVALID_UNSUPPORTED_PASS,
  },
};
