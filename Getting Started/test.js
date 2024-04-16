const { remote } = require('webdriverio');

const capabilities = {
    platformName: 'Android', /// Android or iOS
    'appium:automationName': 'UiAutomator2', /// UiAutomator2 for Android and XCUITest for iOS
    'appium:deviceName': 'Pixel 7', /// Your devices or emulators name 
    'appium:appPackage': 'com.android.settings', /// Package name of desired Application
    'appium:appActivity': '.Settings', /// AppActivity name of desired Application
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
};

async function runTest() {
    const driver = await remote(wdOpts);
    try {
        const batteryItem = await driver.$('//*[@text="Battery"]');
        await batteryItem.click();
        console.log('***************** Clicked!!! *****************');
        await driver.pause(5000);
    } finally {
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

runTest().catch(console.error);