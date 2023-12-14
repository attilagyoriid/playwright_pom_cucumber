import { expect } from '@playwright/test';
import { test } from '../test-options';

test('form fill', async ({ pageManager }) => {
  const expectedName = 'Attila Gyori';
  const expectedPassword = 'Password';
  const expectedOptionText = 'Option 2';
  await pageManager.formLayoutsPage.visitPage();
  await pageManager.sidebarComponent.expandFormLayoutsPage();
  await pageManager.formLayoutsPage.submitUsingTheGrigdFormWithCredentialsAndSelectOption(
    expectedName,
    expectedPassword,
    expectedOptionText
  );
  await expect(pageManager.formLayoutsPage.gridFormEmailInputLocator).toHaveValue(expectedName);
  await expect(pageManager.formLayoutsPage.girdFormPasswordInputLocator).toHaveValue(expectedPassword);
  await expect(
    pageManager.formLayoutsPage.girdFormRadioBtnLocator.locator(`:text-is("${expectedOptionText}")`)
  ).toBeChecked();
  expect(await pageManager.formLayoutsPage.gridFormLocator.screenshot()).toMatchSnapshot();
});
