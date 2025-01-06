const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor () {
    this.count = 1;
  }
  calculateDepth(arr, deep = 1) {
    if (deep === 1){
      this.count = 1
    } else if (deep > this.count) {
      this.count = deep
    } 
    for (let e of arr) {
      if (Array.isArray(e)) {
        this.calculateDepth(e, deep + 1);
      }
    }        
    return this.count;
  }
}

module.exports = {
  DepthCalculator
};
