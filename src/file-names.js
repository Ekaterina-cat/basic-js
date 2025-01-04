const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const mapName = new Map();
  const newArr = [];
  let count = 0;
  let count2 = 0;
  names.forEach(name => {
    let newName = name;
    if (/[1]/.test(name)){
      count++;
      newName = `${name}(${count})`;
    }
    if (!mapName.has(name)) {
      mapName.set(name, 0);
    } else {
      count2++;
      newName = `${name}(${count2})`;
    }
    newArr.push(newName);
  });
  return newArr;
}

module.exports = {
  renameFiles
};
