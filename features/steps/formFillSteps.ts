import { Given, Then, When } from '@cucumber/cucumber';

import { expect } from '@playwright/test';
import { fixture } from '../../framework/hooks/pageFixture';

Given('User navigates to the application', async function () {
  await fixture.pageManager.formLayoutsPage.visitPage(process.env.BASEURL);
});

Given('User expand form layout on sidebar', async function () {
  await fixture.pageManager.sidebarComponent.expandFormLayoutsPage();
});

When(
  'User enter username: {string} and password: {string} and select option: {string} and press Submit button',
  async function (username, password, option) {
    await fixture.pageManager.formLayoutsPage.submitUsingTheGrigdFormWithCredentialsAndSelectOption(
      username,
      password,
      option
    );
  }
);

Then('Username input field has value: {string}', async function (username) {
  await expect(fixture.pageManager.formLayoutsPage.gridFormEmailInputLocator).toHaveValue(username);
});

Then('Password input field has value: {string}', async function (password) {
  await expect(fixture.pageManager.formLayoutsPage.girdFormPasswordInputLocator).toHaveValue(password);
});

Then('Option: {string} is selected', async function (option) {
  await expect(
    fixture.pageManager.formLayoutsPage.girdFormRadioBtnLocator.locator(`:text-is("${option}")`)
  ).toBeChecked();
});

When(
  'User enter username: {string} and email: {string} and remeber me is: {string}',
  async function (username, email, remember_checked) {
    fixture.pageManager.formLayoutsPage.sumbitInlineFormWithNameEmailAndCheckbox(
      username,
      email,
      Boolean(remember_checked)
    );
  }
);

Then('Fullname input field has value: {string}', async function (username) {
  await expect(fixture.pageManager.formLayoutsPage.inlineFormNameInputLocator).toHaveValue(username);
});

Then('Email input field has value: {string}', async function (email) {
  await expect(fixture.pageManager.formLayoutsPage.inlineFormEmailInputLocator).toHaveValue(email);
});

Then('Remember me is {string}', async function (remember_checked) {
  console.log(remember_checked);
  const isChecked = await fixture.pageManager.formLayoutsPage.inlineFormRememberLocator.isChecked();
  await expect(isChecked).toBe(Boolean(remember_checked));
});
