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

const combine = function (n, k) {
  let res = [];
  let path = [];

  function backTrack(n, k, startIndex) {
    // 终止条件
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    // 横向遍历
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      // 单层处理
      path.push(i);
      // 纵向遍历
      backTrack(n, k, i + 1);
      // 回溯
      path.pop();
    }
  }

  backTrack(n, k, 1);
  return res;
};
