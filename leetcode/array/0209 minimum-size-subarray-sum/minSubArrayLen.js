/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function (target, nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  let j = 0;
  let total = 0;
  let counter = 0;
  let res = nums.length + 1;

  while (i < nums.length) {
    total += nums[i];
    counter++;
    if (total >= target) {
      res = Math.min(counter, res);
      counter = 0;
      total = 0;
      j++;
      i = j;
    }
    i++;
  }

  return res !== nums.length + 1 ? res : 0;
};

var minSubArrayLen1 = function (s, nums) {
  let distance = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  // left pointer and right pointer defines the window.
  // the goal is to find the smallest window that has a sum of s or larger.
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    console.log(sum);
    while (sum >= s) {
      distance = Math.min(distance, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }

  return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};

var minSubArrayLen = function (s, nums) {
  const sums = [0];
  for (let k of nums) {
    sums.push(sums[sums.length - 1] + k);
  }
  //[0,  2,  5, 6, 8, 12, 15]

  let min = Infinity;
  for (let i = 0, j = 1; j < sums.length; j++) {
    while (sums[j] - sums[i] >= s) {
      min = Math.min(min, j - i);
      i++;
    }
  }
  return min === Infinity ? 0 : min;
};

module.exports = minSubArrayLen;
