import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class FormLayoutsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async visitPage(path = '/') {
    await this.page.goto(path);
  }
  async submitUsingTheGrigdFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
    const usingTheGridForm = this.page.locator('nb-card', { hasText: 'Using the Grid' });
    await usingTheGridForm.getByRole('textbox', { name: 'Email' }).fill(email);
    await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password);
    await usingTheGridForm.getByRole('radio', { name: optionText }).check({ force: true });
    await usingTheGridForm.getByRole('button').click();
  }

  /**
   * This method fill out the Inline form with user details
   * @param name - should be first and last name
   * @param email - valid email for the test user
   * @param rememberMe - true or false if user session to be safed
   */
  async sumbitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
    const inlineForm = this.page.locator('nb-card', { hasText: 'Inline form' });
    await inlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(name);
    await inlineForm.getByRole('textbox', { name: 'Email' }).fill(email);
    if (rememberMe) await inlineForm.getByRole('checkbox').check({ force: true });
    await inlineForm.getByRole('button').click();
  }
}
