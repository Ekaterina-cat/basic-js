const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objDomains = new Map();
   for (let i = 0; i < domains.length; i++){
    const elem = domains[i].split('.');
    let key = '';
    for (let j = elem.length - 1; j >= 0; j--) {
      if (elem[j]) {
        key = key + `.${elem[j]}`;
        objDomains.set(key, (objDomains.get(key) || 0) + 1);
      }
    }
   }
  return Object.fromEntries(objDomains);
}

module.exports = {
  getDNSStats
};
