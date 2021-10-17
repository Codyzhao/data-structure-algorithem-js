/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) return nums;

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      nums[i] = j === i ? nums[i] : 0;
      j++;
    }
  }

  return nums;
};

module.exports = moveZeroes;
