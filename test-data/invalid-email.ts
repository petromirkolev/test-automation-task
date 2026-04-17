export const invalidEmailInput = {
  emptyName: {
    value: '',
    testDescription: 'Fill in invalid empty email name',
    errorMessage: 'Required field',
  },

  nameWithSpecialCharacters: {
    value: 'test#account',
    testDescription: 'Fill in invalid email name with special characters',
    errorMessage: 'Invalid email name',
  },

  nameWithWhiteSpaceStart: {
    value: ' test_account',
    testDescription: 'Fill in invalid email name with white space before',
    errorMessage: 'Invalid email name',
  },

  nameWithWhiteSpaceMiddle: {
    value: 'test account',
    testDescription:
      'Fill in invalid email name with white space in the middle',
    errorMessage: 'Invalid email name',
  },

  nameWithWhiteSpaceEnd: {
    value: 'test_account ',
    testDescription: 'Fill in invalid email name with white space after',
    errorMessage: 'Invalid email name',
  },
};
