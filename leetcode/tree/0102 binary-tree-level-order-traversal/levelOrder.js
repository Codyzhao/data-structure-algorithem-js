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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  //二叉树的层序遍历
  const queue = [];
  const res = [];
  queue.push(root);

  while (queue.length !== 0) {
    // 记录当前层级节点数
    let length = queue.length;
    //存放每一层的节点
    let curLevel = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      // 存放当前层下一层的节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    //把每一层的结果放到结果数组
    res.push(curLevel);
  }

  return res;
};
