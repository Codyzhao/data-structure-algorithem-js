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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root && !subRoot) return true;

  const isSame = (n1, n2) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    return isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
  };

  const dfs = (n) => {
    if (!n) return false;
    if (n.val == subRoot.val && isSame(n, subRoot)) {
      return true;
    }
    return dfs(n.left) || dfs(n.right);
  };

  return dfs(root);
};
