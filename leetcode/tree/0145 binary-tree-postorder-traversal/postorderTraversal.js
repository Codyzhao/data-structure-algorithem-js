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
var postorderTraversal = function (root) {
  const stack = [];
  const res = [];

  if (root) stack.push(root);

  while (stack.length) {
    const node = stack.pop();

    if (!node) {
      res.push(stack.pop().val);
      continue;
    }

    stack.push(node);
    stack.push(null);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return res;
};

var postorderTraversal2 = function (root) {
  const res = [];

  traversal(root);

  function traversal(node) {
    if (!node) return;

    traversal(node.left);
    traversal(node.right);
    res.push(node.val);
  }

  return res;
};
