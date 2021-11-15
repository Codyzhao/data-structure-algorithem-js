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
 * @return {number[]}
 */
var largestValues = function (root) {
  let res = [],
    queue = [root];
  while (queue.length !== 0 && root !== null) {
    let length = queue.length;
    let max = -Infinity;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (node.val > max) {
        max = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(max);
  }
  return res;
};
