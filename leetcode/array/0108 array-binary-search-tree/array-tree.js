function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const arrayToTree = (nums) => {
  if (nums === null || nums.length === 0) return null;
  let mid = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[mid]);
  node.left = arrayToTree(nums.slice(0, mid));
  node.right = arrayToTree(nums.slice(mid + 1, nums.length));
  return node;
};
module.exports = arrayToTree;
