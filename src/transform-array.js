const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const resultArr = [...arr];
  let index;
  for (let i = 0; i < arr.length; i++) {
    index = resultArr.indexOf(arr[i]);
    if (arr[i] == '--discard-next') {
      if (arr.length - 1 != index) {
        resultArr.splice(index, 2);
      } else {
        resultArr.splice(index, 1);
      }
    } else if (arr[i] == '--double-next') {
      if (arr.length - 1 != index) {
        let nextElem = resultArr[i + 1];
        resultArr.splice(index, 1, nextElem);
      } else {
        resultArr.splice(index, 1)
      }
    } else if (arr[i] == '--discard-prev') {
      if (index == 0 || arr[i - 2] == '--discard-next') {
        resultArr.splice(index, 1);
      } else {
        let prevIndex = index - 1;
        resultArr.splice(prevIndex, 2);
      }
    } else if (arr[i] == '--double-prev') {
      if (index == 0 || arr[i - 2] == '--discard-next') {
        resultArr.splice(index, 1)
      } else {
        let prevElem = resultArr[i - 1];
        resultArr.splice(index, 1, prevElem)
      }
    }
  }
  return resultArr;
}

module.exports = {
  transform
};
