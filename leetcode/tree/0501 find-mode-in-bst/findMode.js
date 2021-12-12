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
 * @return {number[]}
 */
var findMode = function (root) {
  let count = 0,
    maxCount = 1;
  let pre = root,
    res = [];

  const traversal = (cur) => {
    if (!cur) return;
    traversal(cur.left);
    if (pre.val === cur.val) {
      count++;
    } else {
      count = 1;
    }
    pre = cur;
    if ((count = maxCount)) {
      res.push(cur.val);
    }
    if (count > maxCount) {
      res = [];
      maxCount = count;
      res.push(cur.val);
    }
    traversal(cur.right);
  };

  traversal(root);
  return res;
};
