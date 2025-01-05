const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arrNum = Array.from(n.toString());
  let sum = 0;
  let sum2 = 0;
  let result;
  for (let i = 0; i < arrNum.length; i++) {
    sum += Number(arrNum[i]);
    result = sum;
    if (sum >= 10) {
      const arrNum2 = Array.from(sum.toString())
      for (let j = 0; j < arrNum2.length; j++) {
        sum2 += Number(arrNum2[j]);
        result = sum2;
      }
    }
  }
  return result;
}

module.exports = {
  getSumOfDigits
};
