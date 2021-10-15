/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = [];
  let res = [];

  for (var i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      let lastEl = stack.pop();
      map[lastEl] = nums2[i];
    }
    stack.push(nums2[i]);
  }

  while (stack.length > 0) {
    const remaining = stack.pop();
    map[remaining] = -1;
  }

  for (var i = 0; i < nums1.length; i++) {
    var nums = map[nums1[i]];
    res.push(nums);
  }

  return res;
};

module.exports = nextGreaterElement;
