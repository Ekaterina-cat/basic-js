const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  const num = Number(sampleActivity);
  const age = (Math.log(MODERN_ACTIVITY / num) / k);
  const result = Math.ceil(age);
  if (typeof(sampleActivity) == 'string'
      && typeof(num) == 'number'
      && result != Infinity
      && result > 0) {
    return result;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
