if (!process.env.DEMO_JWT_TOKEN) {
  throw new Error('Missing DEMO_JWT_TOKEN; Copy .env.example to .env');
}

export const demoToken = process.env.DEMO_JWT_TOKEN;
