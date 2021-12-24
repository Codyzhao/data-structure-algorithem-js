/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildTree = (arr, left, right) => {
    if (left > right) return null;
    let mid = Math.floor(left + (right - left) / 2);
    let root = new TreeNode(arr[mid]);
    root.left = buildTree(arr, left, mid - 1);
    root.right = buildTree(arr, mid + 1, right);
    return root;
  };

  return buildTree(nums, 0, nums.length - 1);
};

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  //根节点初始化
  let root = new TreeNode(-1);
  const queue = [],
    leftQueue = [],
    rightQueue = [];

  // 根节点入队列
  queue.push(root);
  // 0为左区间下标初始位置
  leftQueue.push(0);
  // nums.size() - 1为右区间下标初始位置
  rightQueue.push(nums.length - 1);

  while (queue.length) {
    const cur = queue.shift();
    let left = leftQueue.shift();
    let right = rightQueue.shift();
    let mid = left + Math.floor((right - left) / 2);

    // 将mid对应的元素给中间节点
    cur.val = nums[mid];

    // 处理左区间
    if (left <= mid - 1) {
      cur.left = new TreeNode(-1);
      queue.push(cur.left);
      leftQueue.push(left);
      rightQueue.push(mid - 1);
    }

    // 处理右区间
    if (right >= mid + 1) {
      cur.right = new TreeNode(-1);
      queue.push(cur.right);
      leftQueue.push(mid + 1);
      rightQueue.push(right);
    }
  }

  return root;
};
