/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length < k) return maxInArray(nums);
  const queue = [],
    res = [];

  for (let i = 0; i < nums.length; i++) {
    // 若队列不为空，且当前元素大于等于队尾所存下标的元素，则弹出队尾
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    // 入队当前元素下标
    queue.push(i);
    // 判断当前最大值（即队首元素）是否在窗口中，若不在便将其出队
    while (queue[0] <= i - k) {
      queue.shift();
    }
    // 当达到窗口大小时便开始向结果中添加数据
    if (i >= k - 1) res.push(nums[queue[0]]);
  }

  return res;
};

module.exports = maxSlidingWindow;
