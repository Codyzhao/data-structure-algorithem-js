/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    if (map.get(nums[i]) > nums.length / 2) return nums[i];
  }
};

var majorityElement = function (nums) {
  if (nums.length < 3) return;

  nums = nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

module.exports = majorityElement;
