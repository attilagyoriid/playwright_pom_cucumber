import { LaunchOptions, chromium, firefox, webkit } from '@playwright/test';

const options: LaunchOptions = {
  headless: !!process.env.npm_config_HEADLESS || false,
};
export const invokeBrowser = () => {
  console.log(!!process.env.npm_config_HEADLESS || true);
  const browserType = process.env.npm_config_BROWSER || 'chrome';
  switch (browserType) {
    case 'chrome':
      return chromium.launch(options);
    case 'firefox':
      return firefox.launch(options);
    case 'webkit':
      return webkit.launch(options);
    default:
      throw new Error('Please set the proper browser!');
  }
};
