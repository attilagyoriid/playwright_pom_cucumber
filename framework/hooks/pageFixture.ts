import { PageManager } from '@pages/pageManager';
import { Page } from '@playwright/test';
import { Logger } from 'winston';

export const fixture = {
  page: undefined as Page,
  pageManager: undefined as PageManager,
  logger: undefined as Logger,
};
