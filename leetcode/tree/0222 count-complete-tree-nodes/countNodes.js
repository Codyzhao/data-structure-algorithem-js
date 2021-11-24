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
var countNodes = function (root) {
  function getNodesNum(node) {
    if (!node) return 0;
    let leftNum = getNodesNum(node.left);
    let rightNum = getNodesNum(node.right);
    let treeNum = leftNum + rightNum + 1;
    return treeNum;
  }
  return getNodesNum(root);
};

var countNodes = function (root) {
  let queue = [],
    result = 0;
  if (!root) return result;
  queue.push(root);
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      result++;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return result;
};
