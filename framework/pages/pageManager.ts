import { Page } from '@playwright/test';
import { FormLayoutsPage } from '@pages/formLayoutsPage';
import { SidebarComponent } from '@pages/components/sidebarComponent';
import { BasePage } from './basePage';

export class PageManager extends BasePage {
  private readonly _formLayoutsPage: FormLayoutsPage;
  private readonly _sidebarComponent: SidebarComponent;

  constructor(page: Page) {
    super(page);
    this._formLayoutsPage = new FormLayoutsPage(this.page);
    this._sidebarComponent = new SidebarComponent(this.page);
  }

  get formLayoutsPage() {
    return this._formLayoutsPage;
  }
  get sidebarComponent() {
    return this._sidebarComponent;
  }
}
