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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  const deleteOneNode = (target) => {
    if (!target) return target;
    if (!target.right) return target.left;
    let cur = target.right;
    while (cur.left) {
      cur = cur.left;
    }
    cur.left = target.left;
    return target.right;
  };

  if (!root) return root;
  let cur = root;
  let pre = null;
  while (cur) {
    if (cur.val === key) {
      break;
    }
    pre = cur;
    cur.val > key ? (cur = cur.left) : (cur = cur.right);
  }
  if (!pre) {
    return deleteOneNode(cur);
  }
  if (pre.left && pre.left.val === key) {
    pre.left = deleteOneNode(cur);
  }
  if (pre.right && pre.right.val === key) {
    pre.right = deleteOneNode(cur);
  }
  return root;
};

var deleteNode = function (root, key) {
  if (!root) return root;
  if (root.val === key) {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      let cur = root.right;
      while (cur.left) {
        cur = cur.left;
      }
      cur.left = root.left;
      return root.right;
    }
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};
