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

var isValidBST = function (root) {
  const arr = [];
  function traversal(node) {
    if (!node) return;
    traversal(node.left);
    arr.push(node.val);
    traversal(node.right);
  }
  traversal(root);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
};

var isValidBST = function (root) {
  let pre = null;
  const inOrder = (root) => {
    if (root === null) return true;
    let left = inOrder(root.left);

    if (pre !== null && pre.val >= root.val) return false;
    pre = root;

    let right = inOrder(root.right);
    return left && right;
  };
  return inOrder(root);
};
