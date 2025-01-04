const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strCode = '';
  let currentLetter = str[0];
  let countLetter = 1;
  for (let i = 1; i <= str.length; i++) {
    if (i === str.length || str[i] !== currentLetter) {
      strCode += countLetter + currentLetter;
      if (i < str.length) {
        currentLetter = str[i];
        countLetter = 1;
      }
    } else {
      countLetter++;
    }
  }
  return strCode.replace(/[1]/g, '');
}

module.exports = {
  encodeLine
};
