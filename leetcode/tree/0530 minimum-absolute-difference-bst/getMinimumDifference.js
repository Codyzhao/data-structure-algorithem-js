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

var getMinimumDifference = function (root) {
  let arr = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  let diff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    const res = arr[i] - arr[i - 1];
    if (res < diff) {
      diff = res;
    }
  }
  return diff;
};

var getMinimumDifference = function (root) {
  if (!root) return;

  const stack = [];
  let cur = root;
  let res = Infinity;
  let pre = null;

  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      if (pre) res = Math.min(res, cur.val - pre.val);
      pre = cur;
      cur = cur.right;
    }
  }

  return res;
};
