/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildTree = (arr, left, right) => {
    if (left > right) return null;
    let mid = Math.floor(left + (right - left) / 2);
    let root = new TreeNode(arr[mid]);
    root.left = buildTree(arr, left, mid - 1);
    root.right = buildTree(arr, mid + 1, right);
    return root;
  };

  return buildTree(nums, 0, nums.length - 1);
};
