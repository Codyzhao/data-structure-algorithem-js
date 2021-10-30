/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];

  nums = nums.sort((a, b) => a - b);

  const res = new Set();

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let l = j + 1,
        r = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum > target) {
          r--;
          continue;
        }

        if (sum < target) {
          l++;
          continue;
        }

        res.add(`${nums[i]},${nums[j]},${nums[l]},${nums[r]}`);
        l++;
        r--;
      }
    }
  }

  return [...res].map((item) => {
    const array = item.split(',');
    return array.map((item) => parseInt(item, 10));
  });
};

module.exports = fourSum;
