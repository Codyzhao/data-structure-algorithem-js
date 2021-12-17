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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (root.val > val) root.left = insertIntoBST(root.left, val);
  if (root.val < val) root.right = insertIntoBST(root.right, val);

  return root;
};

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  let cur = root;
  let prev = null;
  while (cur) {
    prev = cur;
    if (cur.val > val) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }

  const newNode = new TreeNode(val);
  prev.val > val ? (prev.left = newNode) : (prev.right = newNode);

  return root;
};
