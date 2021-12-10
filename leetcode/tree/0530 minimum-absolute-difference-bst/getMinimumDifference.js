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
var getMinimumDifference = function (root) {
  let res = Infinity;
  let preNode = null;

  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    if (preNode) res = Math.min(res, node.val - preNode.val);
    preNode = node;
    inorder(node.right);
  };

  inorder(root);
  return res;
};
