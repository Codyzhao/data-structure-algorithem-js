/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let result = [];
let path = [];

const combineHelper = (n, k, startIndex) => {
  if (path.length === k) {
    result.push([...path]);
    return;
  }
  for (let i = startIndex; i <= n; i++) {
    path.push(i);
    combineHelper(n, k, i + 1);
    path.pop();
  }
};
var combine = function (n, k) {
  result = [];
  combineHelper(n, k, 1);
  return result;
};
