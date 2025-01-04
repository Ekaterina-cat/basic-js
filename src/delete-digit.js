const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strN = Array.from(String(n), Number);
    let arrNum = [];
    for (let i = 0; i < strN.length; i++) {
        let newArr = [...strN];
        newArr.splice(i, 1);
        arrNum.push(newArr.join(''));
    }
    let maxNumber = arrNum[0];
    arrNum.forEach(num => {
        if (num > maxNumber) {
            maxNumber = num;
        }
    });
    return Number(maxNumber);
}

module.exports = {
  deleteDigit
};
