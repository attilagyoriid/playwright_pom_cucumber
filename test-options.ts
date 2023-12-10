import { test as base } from '@playwright/test';
import { PageManager } from '@pages/pageManager';

export interface TestOptions {
  globalsQaURL: string;
  formLayoutsPage: string;
  pageManager: PageManager;
}

export const test = base.extend<TestOptions>({
  globalsQaURL: ['', { option: true }],

  formLayoutsPage: async ({ page }, use) => {
    await page.goto('/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
    await use('');
    console.log('Tear Down');
  },

  pageManager: async ({ page }, use) => {
    const pm = new PageManager(page);
    await use(pm);
  },
});
