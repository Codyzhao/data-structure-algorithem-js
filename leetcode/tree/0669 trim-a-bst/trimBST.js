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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return root;

  if (root.val < low) {
    let right = trimBST(root.right, low, high);
    return right;
  }
  if (root.val > high) {
    let left = trimBST(root.left, low, high);
    return left;
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};

var trimBST = function (root, low, high) {
  if (!root) return null;

  // 处理头结点，让root移动到[L, R] 范围内，注意是左闭右闭
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) {
      root = root.right;
    } else {
      root = root.left;
    }
  }

  // 此时root已经在[L, R] 范围内
  let cur = root;

  // 处理左孩子元素小于L的情况
  while (cur) {
    while (cur.left && cur.left.val < low) {
      cur.left = cur.left.right;
    }
    cur = cur.left;
  }

  //重置下角标
  cur = root;
  // 此时root已经在[L, R] 范围内，处理右孩子大于R的情况
  while (cur) {
    while (cur.right && cur.right.val > high) {
      cur.right = cur.right.left;
    }
    cur = cur.right;
  }

  return root;
};
