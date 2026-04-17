import { msg } from '../utils/constants';

export const invalidEmailpassword = {
  emptyPassword: {
    testDescription: 'Invalid empty password',
    value: '',
    errorMessage: msg.REQUIRED_FIELD_MESSAGE,
  },

  whiteSpacedPassword: {
    testDescription: 'Invalid white-spaced password',
    value: '      ',
    errorMessage: msg.INVALID_PASS_TOO_SHORT,
  },

  shortPassword: {
    testDescription: 'Invalid short password',
    value: 'T3$ting',
    errorMessage: msg.INVALID_PASS_TOO_SHORT,
  },

  repeatedPassword: {
    testDescription: 'Invalid repeated password',
    value: 'T3$tingT3$tingT3$ting',
    errorMessage: msg.INVALID_REPEAT_PASS,
  },

  commonPassword: {
    testDescription: 'Invalid common password',
    value: 'testingpass',
    errorMessage: msg.INVALID_COMMON_PASS,
  },

  nonASCIIpassword: {
    testDescription: 'Invalid non-ASCII password',
    value: 'парола123',
    errorMessage: msg.INVALID_UNSUPPORTED_PASS,
  },
};
