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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // base condition
  if (!root) return true;

  // recursive relationship
  function validate(node, low = -Infinity, high = Infinity) {
    if (!node) return true;

    if (node.val <= low || node.val >= high) {
      return false;
    }

    return (
      validate(node.right, node.val, high) && validate(node.left, low, node.val)
    );
  }

  return validate(root);
};
