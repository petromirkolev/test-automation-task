if (!process.env.DEMO_JWT_TOKEN) {
  throw new Error('Missing DEMO_JWT_TOKEN; Copy .env.example to .env');
}

export const demoToken = process.env.DEMO_JWT_TOKEN;

export const tokenPayload = {
  first_name: 'Q',
  last_name: 'A',
  email: 'q.a@siteground.com',
  domain: '',
  lang: 'en',
  exp: 19701250772,
};
