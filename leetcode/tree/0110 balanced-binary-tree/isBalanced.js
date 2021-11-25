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

var isBalanced = function (root) {
  //还是用递归三部曲  + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
  // 1. 确定递归函数参数以及返回值
  const getDepth = function (node) {
    // 2. 确定递归函数终止条件
    if (node === null) {
      return 0;
    }
    // 3. 确定单层递归逻辑
    let leftDepth = getDepth(node.left); //左子树高度
    if (leftDepth === -1) {
      return -1;
    }
    let rightDepth = getDepth(node.right); //右子树高度
    if (rightDepth === -1) {
      return -1;
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftDepth, rightDepth);
    }
  };
  return getDepth(root) === -1 ? false : true;
};
