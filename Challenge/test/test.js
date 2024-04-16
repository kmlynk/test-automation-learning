/*
  This file is the main test file. It imports the necessary functions from the specs folder and runs the tests.
*/

const { remote } = require('webdriverio');
const { wdOpts } = require('../configs/config');
(async () => {
  const chai = await import('chai');
  assert = chai.assert;
})();

// Importing the functions from the specs folder
const { skipQuestion } = require('./specs/skip-question');
const { testAllNumbers, testAllFunctionButtons } = require('./specs/buttons-check');

// The driver object
before(async () => {
  driver = await remote(wdOpts);
});

// Closing the app and deleting the session
after(async () => {
  console.log('*** Test Completed ***');
  driver.pause(3000);
  await driver.deleteSession();
});

describe('Calculator App Sanity Check', async () => {
  describe('Get Ready For Test', async () => {
    skipQuestion();
  });

  describe('Check Buttons', async () => {
    testAllNumbers();
    testAllFunctionButtons();
  });
});