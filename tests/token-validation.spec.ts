import { test, expect } from '@playwright/test';
import {
  DEMO_JWT_TOKEN,
  VALID_TOKEN_PAYLOAD as token,
} from '../utils/constants';
import { decodeJwtPayload } from '../utils/helpers';

test.describe('Token validation', () => {
  for (const [key, value] of Object.entries(token)) {
    test(`Token payload field ${key} matches expected value`, async () => {
      const payload = decodeJwtPayload(DEMO_JWT_TOKEN);
      expect(payload[key as keyof typeof token]).toBe(value);
    });
  }
});
