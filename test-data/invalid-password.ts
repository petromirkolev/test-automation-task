import {
  INVALID_COMMON_PASS,
  INVALID_PASS_TOO_SHORT,
  INVALID_REPEAT_PASS,
  INVALID_UNSUPPORTED_PASS,
  REQUIRED_FIELD_MESSAGE,
} from '../utils/constants';

export const invalidEmailpassword = {
  emptyPassword: {
    value: '',
    testDescription: 'Invalid empty password',
    errorMessage: REQUIRED_FIELD_MESSAGE,
  },

  shortPassword: {
    value: 'T3$ting',
    testDescription: 'Invalid short password',
    errorMessage: INVALID_PASS_TOO_SHORT,
  },

  repeatedPassword: {
    value: 'T3$tingT3$tingT3$ting',
    testDescription: 'Invalid repeated password',
    errorMessage: INVALID_REPEAT_PASS,
  },

  commonPassword: {
    value: 'testingpass',
    testDescription: 'Invalid common password',
    errorMessage: INVALID_COMMON_PASS,
  },

  nonASCIIpassword: {
    value: 'парола123',
    testDescription: 'Invalid non-ASCII password',
    errorMessage: INVALID_UNSUPPORTED_PASS,
  },
};
