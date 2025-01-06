const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    let elem;
    if (value === undefined) {
      elem = '()';
      this.chain.push(elem);
    } else {
      elem = `( ${value} )`;
      this.chain.push(elem);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isFinite(position) === false
        || position <= 0
        || this.chain.length < position
        || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1)
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
