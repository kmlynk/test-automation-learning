/*
  * This file contains the id of each button in the calculator app.
*/

/*
  * The idPrefix is the prefix of each button id.
*/
var idPrefix = 'id:net.ludeke.calculator:id/';

/*
  * The buttons object contains the id of each button in the calculator app.
  * The idPrefix is the prefix of each button id.
  * @type {object}
*/
const buttons = {
  'zero' : idPrefix + 'digit0',
  'one' : idPrefix + 'digit1',
  'two' : idPrefix + 'digit2',
  'three' : idPrefix + 'digit3',
  'four' : idPrefix + 'digit4',
  'five' : idPrefix + 'digit5',
  'six' : idPrefix + 'digit6',
  'seven' : idPrefix + 'digit7',
  'eight' : idPrefix + 'digit8',
  'nine' : idPrefix + 'digit9',
  'add' : idPrefix + 'plus',
  'subtract' : idPrefix + 'minus',
  'multiply' : idPrefix + 'mul',
  'divide' : idPrefix + 'div',
  'equals' : idPrefix + 'equal',
  'delete' : idPrefix + 'del',
  'dot' : idPrefix + 'dot',
}

/*
  * This function returns the id of the button.
*/
function getButton(buttonName) {
  return buttons[buttonName];
}

/*
  * The display is the id of the display in the calculator app.
  * @type {string}
*/
var display = '//android.widget.EditText';

/*
  * This function returns the id of the display.
  * @return {string} The id of the display.
*/
function getDisplay() {
  return display;
}

module.exports = {
  getButton,
  getDisplay
};