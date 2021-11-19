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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let level = 0;
  while (queue.length) {
    let length = queue.length;
    level++;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      if (!node.left && !node.right) {
        return level;
      }
    }
  }
  return level;
};
