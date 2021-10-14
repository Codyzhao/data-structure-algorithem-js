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
var preorderTraversal = function (root) {
  const res = [];

  t(root);

  return res;

  function t(node) {
    if (!node) return;
    res.push(node.val);
    t(node.left);
    t(node.right);
  }
};

var preorderTraversal2 = function (root) {
  const stack = [];
  const res = [];

  if (root) stack.push(root);

  while (stack.length) {
    const node = stack.pop();

    if (!node) {
      res.push(stack.pop().val);
      continue;
    }

    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    stack.push(node);
    stack.push(null);
  }

  return res;
};
