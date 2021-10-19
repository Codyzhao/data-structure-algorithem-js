/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let i = 0,
    j = nums.length - 1,
    res = [];

  while (i <= j) {
    if (Math.abs(nums[i]) < Math.abs(nums[j])) {
      res.unshift(Math.pow(nums[j], 2));
      j--;
    } else {
      res.unshift(Math.pow(nums[i], 2));
      i++;
    }
  }

  return res;
};

module.exports = sortedSquares;
