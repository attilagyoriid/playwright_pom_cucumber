import { test } from '../test-options';

test('form fill', async ({ pageManager }) => {
  await pageManager.formLayoutsPage.visitPage();
  await pageManager.sidebarComponent.expandFormLayoutsPage();
  await pageManager.formLayoutsPage.submitUsingTheGrigdFormWithCredentialsAndSelectOption(
    'Attila Gyori',
    'Password',
    'Option 2'
  );
});
