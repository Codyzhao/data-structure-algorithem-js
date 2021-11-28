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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  const stack = [root],
    paths = [''],
    res = [];
  while (stack.length) {
    const node = stack.pop();
    let path = paths.pop();
    if (!node.left && !node.right) {
      res.push(path + node.val);
      continue;
    }
    path += node.val + '->';
    if (node.right) {
      stack.push(node.right);
      paths.push(path);
    }
    if (node.left) {
      stack.push(node.left);
      paths.push(path);
    }
  }
  return res;
};

var binaryTreePaths = function (root) {
  let res = [];
  const getPath = function (node, curPath) {
    // 确定终止条件，到叶子节点就终止
    if (!node.left && !node.right) {
      curPath += node.val;
      res.push(curPath);
      return;
    }
    // 确定单层递归逻辑
    curPath += node.val + '->';
    node.left && getPath(node.left, curPath);
    node.right && getPath(node.right, curPath);
  };
  getPath(root, '');
  return res;
};
