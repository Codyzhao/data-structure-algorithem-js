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
var findBottomLeftValue = function (root) {
  let maxPath = 0,
    res = null;

  function getLeftValue(node, depth) {
    if (!node) return;

    depth += 1;
    if (!node.left && !node.right) {
      if (depth > maxPath) {
        maxPath = depth;
        res = node.val;
      }
    }

    getLeftValue(node.left, depth);
    getLeftValue(node.right, depth);
  }

  getLeftValue(root, 0);

  return res;
};

var findBottomLeftValue = function (root) {
  let maxPath = 0,
    resNode = null;

  const dfsTree = function (node, curPath) {
    if (!node.left && !node.right) {
      if (curPath > maxPath) {
        maxPath = curPath;
        resNode = node.val;
      }
    }
    node.left && dfsTree(node.left, curPath + 1);
    node.right && dfsTree(node.right, curPath + 1);
  };

  dfsTree(root, 1);
  return resNode;
};

var findBottomLeftValue = function (root) {
  let queue = [],
    res = null;

  if (!root) return null;

  queue.push(root);

  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (i === 0) {
        res = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return res;
};
