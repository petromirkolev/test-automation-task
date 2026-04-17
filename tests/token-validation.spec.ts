import { test, expect } from '@playwright/test';
import {
  DEMO_JWT_TOKEN,
  VALID_TOKEN_PAYLOAD as token,
} from '../utils/constants';
import { decodeJwtPayload } from '../utils/helpers';

test.describe('Token validation', () => {
  test.only('Provided demo token payload matches expected values', async () => {
    const payload = decodeJwtPayload(DEMO_JWT_TOKEN);

    for (const [key, value] of Object.entries(token)) {
      expect(payload[key]).toBe(value);
    }
  });
});
