export const DEMO_JWT_TOKEN =
  process.env.DEMO_JWT_TOKEN ??
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoiUSIsImxhc3RfbmFtZSI6IkEiLCJlbWFpbCI6InEuYUBzaXRlZ3JvdW5kLmNvbSIsImRvbWFpbiI6IiIsImxhbmciOiJlbiIsImV4cCI6MTk3MDEyNTA3NzJ9.MXA6ZIdl85XojUPStcz3JqyEct0bpKeOk_EEfOh7z7o';

export const VALID_TOKEN_PAYLOAD = {
  first_name: 'Q',
  last_name: 'A',
  email: 'q.a@siteground.com',
  domain: '',
  lang: 'en',
  exp: 19701250772,
};
