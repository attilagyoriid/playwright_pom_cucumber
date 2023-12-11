import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class FormLayoutsPage extends BasePage {
  readonly gridFormLocator: Locator;
  readonly gridFormEmailInputLocator: Locator;
  readonly girdFormPasswordInputLocator: Locator;
  readonly girdFormRadioBtnLocator: Locator;
  readonly girdFormSubmitBtnLocator: Locator;

  readonly inlineFormLocator: Locator;
  readonly inlineFormNameInputLocator: Locator;
  readonly inlineFormEmailInputLocator: Locator;
  readonly inlineFormRememberLocator: Locator;
  readonly inlineFormSubmitBtnLocator: Locator;

  readonly loginBtn: Locator;

  constructor(page: Page) {
    super(page);
    // grid form locators
    this.gridFormLocator = this.page.locator('nb-card', { hasText: 'Using the Grid' });
    this.gridFormEmailInputLocator = this.gridFormLocator.getByRole('textbox', { name: 'Email' });
    this.girdFormPasswordInputLocator = this.gridFormLocator.getByRole('textbox', { name: 'Password' });
    this.girdFormRadioBtnLocator = this.gridFormLocator.locator('nb-radio-group');
    this.girdFormSubmitBtnLocator = this.gridFormLocator.getByRole('button');

    // basic form locators
    this.inlineFormLocator = this.page.locator('nb-card', { hasText: 'Inline form' });
    this.inlineFormNameInputLocator = this.inlineFormLocator.getByRole('textbox', { name: 'Jane Doe' });
    this.inlineFormEmailInputLocator = this.gridFormLocator.getByRole('textbox', { name: 'Email' });
    this.inlineFormRememberLocator = this.gridFormLocator.getByRole('checkbox');
    this.inlineFormSubmitBtnLocator = this.gridFormLocator.getByRole('button');
  }

  async visitPage(path = '/') {
    await this.page.goto(path);
  }
  async submitUsingTheGrigdFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
    await this.gridFormEmailInputLocator.fill(email);
    await this.girdFormPasswordInputLocator.fill(password);
    await this.girdFormRadioBtnLocator.locator(`:text-is("${optionText}")`).click({ force: true });
    await this.girdFormSubmitBtnLocator.click();
  }

  /**
   * This method fill out the Inline form with user details
   * @param name - should be first and last name
   * @param email - valid email for the test user
   * @param rememberMe - true or false if user session to be safed
   */
  async sumbitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
    await this.inlineFormNameInputLocator.fill(name);
    await this.inlineFormEmailInputLocator.fill(email);
    if (rememberMe) await this.inlineFormRememberLocator.check({ force: true });
    await this.inlineFormSubmitBtnLocator.click();
  }
}
