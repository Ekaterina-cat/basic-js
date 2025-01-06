const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let countRepeatStr = options.repeatTimes - 1;
  let extraStrRepeat = options.addition;
  if (typeof extraStrRepeat == 'boolean' && extraStrRepeat === false) {
    extraStrRepeat = String(options.addition);
  }
  if (typeof extraStrRepeat == 'object' && extraStrRepeat === null) {
    extraStrRepeat = String(options.addition);
  }
  let countRepeatExtraStr = options.additionRepeatTimes - 1;
  let defaltAdditionSeparator = options.additionSeparator || '|';
  let defaltSeparater = options.separator || '+';
  let resultExtraStrRepeat = '';
  let strAndExtraStr;
  for (let i = 0; i < countRepeatExtraStr; i++) {
    resultExtraStrRepeat += extraStrRepeat;
  }
  let strSeparator = resultExtraStrRepeat.split(extraStrRepeat).join('' + extraStrRepeat + defaltAdditionSeparator) + extraStrRepeat;
  
  if (extraStrRepeat) {
    strAndExtraStr = str + strSeparator;
    } else {
    strAndExtraStr = str
    }
  let resultRepet = '';
  for (let j = 0; j < countRepeatStr; j++) {
    resultRepet += strAndExtraStr;
  }
  let finishStr = resultRepet.split(strAndExtraStr).join('' + strAndExtraStr + defaltSeparater) + strAndExtraStr;
    return String(finishStr);
}

module.exports = {
  repeater
};
