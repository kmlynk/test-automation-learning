(async () => {
  const chai = await import('chai');
  assert = chai.assert;
})();

function skipQuestion() {
  describe('Skip Question', async () => {
    displayContinueButton();
    clickContinueButton();
    displayOKButton();
    clickOKButton();
  });
}

function displayContinueButton() {
  it('should display continue button', async () => {
    const continueItem = await driver.$('//*[@text="Continue"]');
    assert.equal(await continueItem.isDisplayed(), true, 'Continue button should exist');
  });
}

function clickContinueButton() {
  it('should click on continue button', async () => {
    const continueItem = await driver.$('//*[@text="Continue"]');
    await continueItem.click();
    assert.equal(await continueItem.isDisplayed(), false, 'Continue button should not be displayed');
  });
}

function displayOKButton() {
  it('should display OK button', async () => {
    const okItem = await driver.$('//*[@text="OK"]');
    assert.equal(await okItem.isDisplayed(), true, 'OK button should exist');
  });
}

function clickOKButton() {
  it('should click on OK button', async () => {
    const okItem = await driver.$('//*[@text="OK"]');
    await okItem.click();
    assert.equal(await okItem.isDisplayed(), false, 'OK button should not be displayed');
  });
}

module.exports = {
  skipQuestion
}