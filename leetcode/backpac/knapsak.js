function testWeightBagProblem(wight, value, bagSize) {
  // [1, 3, 4, 5], [15, 20, 30, 55], 6
  const itemWeightLength = wight.length,
    dp = Array.from({ length: itemWeightLength + 1 }).map(() =>
      Array(bagSize + 1).fill(0)
    );

  for (let i = 1; i <= itemWeightLength; i++) {
    for (let j = 0; j <= bagSize; j++) {
      if (wight[i - 1] <= j) {
        // if item is lighter tha bag size
        // get he max number between taking or not taking
        dp[i][j] = Math.max(
          dp[i - 1][j],
          value[i - 1] + dp[i - 1][j - wight[i - 1]]
        );
      } else {
        // no enough space, given up
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  //   console.table(dp);

  return dp[itemWeightLength][bagSize]; // the far right bottom corner is the max value
}

// [
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
// ]

function testWeightBagProblem2(wight, value, size) {
  const len = wight.length,
    dp = Array(size + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    for (let j = size; j >= wight[i - 1]; j--) {
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
    }
  }
  return dp[size];
}

// function test() {
//   console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
// }

// test();

module.exports = {
  testWeightBagProblem,
  testWeightBagProblem2,
};
