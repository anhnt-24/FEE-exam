/**
 * Generates an n x n matrix filled with 1..n^2 in spiral order.
 *
 * Walks the matrix ring by ring: left-to-right across the top row, top-to-bottom
 * down the right column, right-to-left across the bottom row, bottom-to-top up
 * the left column — then shrinks the boundaries and repeats.
 *
 * @param {number} n size of the square matrix
 * @returns {number[][]} the spiral matrix
 */
function spiralMatrix(n) {
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  let value = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    // top row, left -> right
    for (let col = left; col <= right; col++) {
      matrix[top][col] = value++;
    }
    top++;

    // right column, top -> bottom
    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = value++;
    }
    right--;

    // bottom row, right -> left (only if a row is still left)
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = value++;
      }
      bottom--;
    }

    // left column, bottom -> top (only if a column is still left)
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = value++;
      }
      left++;
    }
  }

  return matrix;
}

// Allows the function to be required from Node for testing, while staying a
// plain global script when loaded in the browser.
if (typeof module !== "undefined" && module.exports) {
  module.exports = spiralMatrix;
}
