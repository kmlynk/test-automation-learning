const calculatorApp = '/Users/uyanik/Desktop/Automation Tutorial/Challenge/app/Calculator_2.0.apk';

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Pixel 7',
  'appium:appPackage': 'net.ludeke.calculator',
  'appium:appActivity': 'com.android.calculator2.Calculator',
  'appium:app': calculatorApp,
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  capabilities: capabilities,
  timeout: 15000,
};

module.exports = { wdOpts };