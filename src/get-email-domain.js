const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arrEmail = email.split("");
  const indexAt = arrEmail.findLastIndex((elem) => elem === "@");
  const numChar = arrEmail.length - indexAt;
  return arrEmail.splice(indexAt + 1, numChar).join('');
}

module.exports = {
  getEmailDomain
};
