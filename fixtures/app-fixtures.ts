import { test as base, expect } from '@playwright/test';
import { AppPage } from '../pages/app-page';

type AppFixtures = {
  appPage: AppPage;
};

export const test = base.extend<AppFixtures>({
  appPage: async ({ page }, use) => {
    await use(new AppPage(page));
  },
});

export { expect };
