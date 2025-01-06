const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let x = matrix.length;
  let y = matrix[0].length;
  let resultArr = Array(x).fill().map(() => Array(y).fill(0));
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      let count = 0;
      if (i > 0 && matrix[i - 1][j]) count++; //верхняя ячейка
      if (i < x - 1 && matrix[i + 1][j]) count++; //нижняя ячейка
      if (j > 0 && matrix[i][j - 1]) count++; // левая ячейка
      if (j < y - 1 && matrix[i][j + 1]) count++; // правая ячейка
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) count++; // верх-лево
      if (i > 0 && j < y - 1 && matrix[i - 1][j + 1]) count++; // верх-право
      if (i < x - 1 && j > 0 && matrix[i + 1][j - 1]) count++; // низ-лево
      if (i < x - 1 && j < y - 1 && matrix[i + 1][j + 1]) count++; // низ-право
      resultArr[i][j] = matrix[i][j] ? 1 : count;
    }
  }
  return resultArr;
}

module.exports = {
  minesweeper
};
