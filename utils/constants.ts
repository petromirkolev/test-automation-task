export const DEMO_JWT_TOKEN =
  process.env.DEMO_JWT_TOKEN ??
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoiUSIsImxhc3RfbmFtZSI6IkEiLCJlbWFpbCI6InEuYUBzaXRlZ3JvdW5kLmNvbSIsImRvbWFpbiI6IiIsImxhbmciOiJlbiIsImV4cCI6MTk3MDEyNTA3NzJ9.MXA6ZIdl85XojUPStcz3JqyEct0bpKeOk_EEfOh7z7o';

export const EXPECTED_DOMAINS = [
  'qa-automation-tools.com',
  'store.qa-automation-tools.com',
  'parked-qa-automation-tools.com',
  'site-tools-demo.net',
];

export const VALID_TOKEN_PAYLOAD = {
  first_name: 'Q',
  last_name: 'A',
  email: 'q.a@siteground.com',
  domain: '',
  lang: 'en',
  exp: 19701250772,
};

export const ACCOUNT_NAME = 'test_account';
export const EMAIL_ADDRESS = 'test_account@test.com';
export const SELECTED_DOMAIN = 'site-tools-demo.net';

export const REQUIRED_FIELD_MESSAGE = 'Required field';
export const EMAIL_ACCOUNT_EXISTS_MESSAGE = 'Email account already exists';
export const INVALID_EMAIL_NAME_MESSAGE = 'Invalid email name';
export const INVALID_PASS_TOO_SHORT = 'Password is too short';
export const INVALID_REPEAT_PASS = 'Avoid repeated words and characters';
export const INVALID_COMMON_PASS = 'Uncommon words are better';
export const INVALID_UNSUPPORTED_PASS =
  'Your password contains unsupported characters';
export const INVALID_EMAIL_IN_LIST = 'Invalid email in list';
