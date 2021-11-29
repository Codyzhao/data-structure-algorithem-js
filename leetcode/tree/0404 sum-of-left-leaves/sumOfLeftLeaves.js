/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root === null) {
    return 0;
  }
  let leftValue = sumOfLeftLeaves(root.left);
  let rightValue = sumOfLeftLeaves(root.right);
  // 3. 单层递归逻辑
  let midValue = 0;
  if (root.left && root.left.left === null && root.left.right === null) {
    midValue = root.left.val;
  }
  let sum = midValue + leftValue + rightValue;
  return sum;
};

var sumOfLeftLeaves = function (root) {
  if (root === null) {
    return null;
  }
  let queue = [];
  let sum = 0;
  queue.push(root);
  while (queue.length) {
    let node = queue.shift();
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return sum;
};
