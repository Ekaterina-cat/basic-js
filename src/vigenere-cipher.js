const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (isDirect) {
    this.isDirect = isDirect
  }
  encrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cypher = '';
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      const letter = message[i].toUpperCase();
      if (alphabet.includes(letter)) {
        const charIndex = alphabet.indexOf(letter);
        const keyLetterIndex = alphabet.indexOf(key[index % key.length].toUpperCase());
        let newIndex = (charIndex + keyLetterIndex) % 26;
        cypher += alphabet[newIndex];
        index++;
      } else {
        cypher += letter;
      }
    }
    if (this.isDirect === false) {
      return cypher.split('').reverse().join('');
    } else {
      return cypher;
    }
  }
  decrypt(encryptedMessage, key) {
    if (arguments.length < 2 || encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cypher = '';
    let index = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      const letter = encryptedMessage[i].toUpperCase();
      if (alphabet.includes(letter)) {
        const letterIndex = alphabet.indexOf(letter);
        const keyLetterIndex = alphabet.indexOf(key[index % key.length].toUpperCase());
        let newIndex = (letterIndex - keyLetterIndex + 26) % 26;
        cypher += alphabet[newIndex];
        index++;
      } else {
        cypher += letter;
      }
    }
    if (this.isDirect === false) {
      return cypher.split('').reverse().join('');
    } else {
      return cypher;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
