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
var averageOfLevels = function (root) {
  let res = [],
    queue = [];
  queue.push(root);
  while (queue.length && root !== null) {
    let length = queue.length;
    let total = 0;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      total += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(total / length);
  }
  return res;
};
