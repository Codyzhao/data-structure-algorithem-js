/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n <= 0) return;
  let matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1,
    num = 1;

  while (left <= right && top <= bottom) {
    // left -> right 1 2 3
    for (let j = left; j <= right; j++) {
      matrix[top][j] = num;
      num++;
    }
    top++;
    // r top -> r bottom 4 5
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;
    // r bottom -> left bottom
    for (let k = right; k >= left; k--) {
      matrix[bottom][k] = num;
      num++;
    }
    bottom--;
    // l bottom -> l top
    for (let u = bottom; u >= top; u--) {
      matrix[u][left] = num;
      num++;
    }
    left++;
  }

  return matrix;
};

module.exports = generateMatrix;
