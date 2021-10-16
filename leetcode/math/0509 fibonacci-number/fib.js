/**
 * @param {number} n
 * @return {number}
 */

const cache = new Map();

var fib2 = function (n) {
  if (cache.has(n)) {
    return cache.get(n);
  }
  if (n < 2) return n;
  const result = fib(n - 1) + fib(n - 2);
  cache.set(n, result);
  return result;
};

var fib = function (n) {
  // 1 确定dp数组以及下标的含义

  // 3 dp数组如何初始化
  const dp = [0, 1];

  // 4 确定遍历顺序
  for (let i = 2; i <= n; i++) {
    // 2 确定递推公式
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // 举例推导dp数组 e.g. [0 1 1 2 3 5 8 13 21 34 55]

  return dp[n];
};

module.exports = fib;
