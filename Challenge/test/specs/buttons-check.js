const { getButton, getDisplay } = require('../../utils/view-elements.js');

let assert;
(async () => {
  const chai = await import('chai');
  assert = chai.assert;
})();

function testAllNumbers() {
  describe('Check All Numbers and Delete', async () => {
    enterNumberZero();
    enterDelete();
    enterNumberOne();
    enterDelete();
    enterNumberTwo();
    enterDelete();
    enterNumberThree();
    enterDelete();
    enterNumberFour();
    enterDelete();
    enterNumberFive();
    enterDelete();
    enterNumberSix();
    enterDelete();
    enterNumberSeven();
    enterDelete();
    enterNumberEight();
    enterDelete();
    enterNumberNine();
    enterDelete();
  });
}

function testAllFunctionButtons() {
  describe('Check All Function Buttons', async () => {
    enterNumberOne();
    enterAdd();
    enterSubtract();
    enterMultiply();
    enterDivide();
    enterDot();
  });

}

let button;

function enterDelete() {
  it('should delete the number from the display', async () => {
    button = await driver.$(getButton('delete'));
    await button.click();

    assert.equal(await (await driver.$(getDisplay())).getText(), '', 'The display should be empty');
  });
}

function enterNumberZero() {
  it('should enter 0 to the display', async () => {
    button = await driver.$(getButton('zero'));
    await button.click();

    assert.equal(await (await driver.$(getDisplay())).getText(), '0', 'The display should show 0');
  });
}

function enterNumberOne() {
  it('should enter 1 to the display', async () => {
    button = await driver.$(getButton('one'));
    await button.click();

    assert.equal(await (await driver.$(getDisplay())).getText(), '1', 'The display should show 1');
  });
}

function enterNumberTwo() {
  it('should enter 2 to the display', async () => {
    button = await driver.$(getButton('two'));
    await button.click();

    assert.equal(await (await driver.$(getDisplay())).getText(), '2', 'The display should show 2');
  });
}

function enterNumberThree() {
  it('should enter 3 to the display', async () => {
    button = await driver.$(getButton('three'));
    await button.click();

    assert.equal(await (await driver.$(getDisplay())).getText(), '3', 'The display should show 3');
  });
}

function enterNumberFour() {
  it('should enter 4 to the display', async () => {
    button = await driver.$(getButton('four'));
    await button.click();

    assert.equal(await (await driver.$(getDisplay())).getText(), '4', 'The display should show 4');
  });
}

function enterNumberFive() {
  it('should enter 5 to the display', async () => {
    button = await driver.$(getButton('five'));
    await button.click();

  assert.equal(await (await driver.$(getDisplay())).getText(), '5', 'The display should show 5');
  });
}

function enterNumberSix() {
    it('should enter 6 to the display', async () => {
    button = await driver.$(getButton('six'));
    await button.click();

    assert.equal(await (await driver.$(getDisplay())).getText(), '6', 'The display should show 6');
  });
}

function enterNumberSeven() {
  it('should enter 7 to the display', async () => {
    button = await driver.$(getButton('seven'));
    await button.click();
  
    assert.equal(await (await driver.$(getDisplay())).getText(), '7', 'The display should show 7');
  });
}

function enterNumberEight() {
  it('should enter 8 to the display', async () => {
    button = await driver.$(getButton('eight'));
    await button.click();
  
    assert.equal(await (await driver.$(getDisplay())).getText(), '8', 'The display should show 8');
  });
}

function enterNumberNine() {
  it('should enter 9 to the display', async () => {
    button = await driver.$(getButton('nine'));
    await button.click();
  
    assert.equal(await (await driver.$(getDisplay())).getText(), '9', 'The display should show 9');
  });
}

function enterAdd() {
  it('should enter + to the display', async () => {
    button = await driver.$(getButton('add'));
    await button.click();
  
    assert.equal(await (await driver.$(getDisplay())).getText(), '1plus', 'The display should show +');
  });
}

function enterSubtract() {
  it('should enter - to the display', async () => {
    button = await driver.$(getButton('subtract'));
    await button.click();
  
    assert.equal(await (await driver.$(getDisplay())).getText(), '1minus', 'The display should show -');
  });
}

function enterMultiply() {
  it('should enter * to the display', async () => {
    button = await driver.$(getButton('multiply'));
    await button.click();
  
    assert.equal(await (await driver.$(getDisplay())).getText(), '1multiplied by', 'The display should show *');
  });
}

function enterDivide() {
  it('should enter / to the display', async () => {
    button = await driver.$(getButton('divide'));
    await button.click();
  
    assert.equal(await (await driver.$(getDisplay())).getText(), '1divided by', 'The display should show /');
  });
}

function enterDot() {
  it('should enter . to the display', async () => {
    button = await driver.$(getButton('dot'));
    await button.click();

    let result = await (await driver.$(getDisplay())).getText();

    // Normalize the result to replace the non-breaking space with a regular space
    let normalizedResult = result.replace(/\u00A0/gi, "\u0020");

    assert.equal(normalizedResult, '1divided by point ', 'The display should show 1/.');
  });
}

module.exports = { 
  testAllNumbers,
  testAllFunctionButtons 
};