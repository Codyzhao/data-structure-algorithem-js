/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // define dp meaning index meaning
  // level i has dp[i] metholds
  const dp = [1, 1, 2];

  // function
  // dp[i] = dp[i - 1] + dp[i - 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

module.exports = climbStairs;
