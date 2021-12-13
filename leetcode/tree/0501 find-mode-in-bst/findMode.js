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
    maxCount = 1,
    pre = root,
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
    if (count === maxCount) {
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

var findMode = function (root) {
  const map = new Map();
  let maxValue = -Infinity;
  const res = [];

  const traversal = (node) => {
    if (!node) return;
    traversal(node.left);

    if (!map.get(node.val)) {
      map.set(node.val, 1);
    } else {
      map.set(node.val, map.get(node.val) + 1);
    }

    traversal(node.right);
  };

  traversal(root);

  for (const value of map.values()) {
    if (value > maxValue) {
      maxValue = value;
    }
  }

  for (const [key, value] of map) {
    if (value === maxValue) {
      res.push(key);
    }
  }

  return res;
};
