/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  const path = [];

  function backtrack(k, n, startIndex) {
    if (path.length === k) {
      if (path.reduce((acc, curr) => acc + curr, 0) === n) {
        result.push([...path]);
      }
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      path.push(i);
      backtrack(k, n, i + 1);
      path.pop();
    }
  }

  backtrack(k, n, 1);
  return result;
};
