import { test, expect } from '@playwright/test';
import {
  DEMO_JWT_TOKEN as demoToken,
  VALID_TOKEN_PAYLOAD as validToken,
} from '../test-data/valid-token';
import { decodeJwtPayload } from '../utils/helpers';

test.describe('Automation Test Suite - Token validation', () => {
  for (const [key, value] of Object.entries(validToken)) {
    test(`Token payload field ${key} matches expected value`, async () => {
      const payload = decodeJwtPayload(demoToken);

      expect(payload[key as keyof typeof validToken]).toBe(value);
    });
  }
});
