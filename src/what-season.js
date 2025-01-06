const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined){
    return 'Unable to determine the time of year!';
  } 
  if (!(date instanceof Date) || date[Symbol.toStringTag]){
    throw new Error ('Invalid date!');
  }
    let mount = date.getMonth();  
  if (mount <= 1){
    return 'winter';
  }
  if (mount == 11){
    return 'winter'
  }
  if (mount >= 2 && mount <= 4){
    return 'spring';
  }
  if (mount >= 5 && mount <= 7){
    return 'summer';
  }
  if (mount >= 8 && mount <= 10){
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
