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
 * @return {TreeNode}
 */
var invertTreeWithLevel = function (root) {
  const queue = [];
  if (!root) {
    return root;
  }
  queue.push(root);
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      [node.left, node.right] = [node.right, node.left];
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};

var invertTreeRecusively = function (root) {
  function r(node) {
    if (!node) return node;
    [node.left, node.right] = [node.right, node.left];
    r(node.left);
    r(node.right);
  }

  r(root);

  return root;
};

var invertTreeDepth = function (root) {
  if (!root) return root;
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    [node.left, node.right] = [node.right, node.left];
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return root;
};
