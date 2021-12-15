/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q || !root) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }
  if (!left) return right;
  return left;
};

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;

  if (root.val > p.val && root.val > q.val) {
    let left = lowestCommonAncestor(root.left, p, q);
    return left !== null && left;
  }

  if (root.val < p.val && root.val < q.val) {
    let right = lowestCommonAncestor(root.right, p, q);
    return right !== null && right;
  }

  return root;
};

var lowestCommonAncestor = function (root, p, q) {
  // 使用迭代的方法
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root;
    }
  }
  return null;
};
