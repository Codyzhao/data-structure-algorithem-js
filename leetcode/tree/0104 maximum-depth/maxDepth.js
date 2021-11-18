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
var maxDepth1 = function (root) {
  if (root === undefined || root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let counter = 0;

  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (i === length - 1) {
        counter += 1;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return counter;
};
