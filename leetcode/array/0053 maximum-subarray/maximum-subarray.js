// const maximumSubarray = (nums) => {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   let maxSum = Number.MIN_SAFE_INTEGER;
//   let res = 0;
//   let p = 0;
//   while (p < nums.length) {
//     res += nums[p];
//     if (res > maxSum) {
//       maxSum = res;
//     }
//     if (res < 0) {
//       res = 0;
//     }
//     p++;
//   }
//   return maxSum;
// };

const maximumSubarray = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp = new Array(nums.length).fill(0);
  let res = nums[0];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = nums[i] + dp[i - 1];
    } else {
      dp[i] = nums[i];
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

module.exports = maximumSubarray;
