import { test, expect } from '@playwright/test';
import { validTokenPayload, demoToken } from '../test-data/valid-token';
import { help } from '../utils/helpers';

test.describe('Automation Test Suite - Token validation', () => {
  for (const [key, value] of Object.entries(validTokenPayload)) {
    test(`Token payload field ${key} matches expected value`, async () => {
      const payload = help.decodeJwtPayload(demoToken);

      expect(payload[key as keyof typeof validTokenPayload]).toBe(value);
    });
  }
});
