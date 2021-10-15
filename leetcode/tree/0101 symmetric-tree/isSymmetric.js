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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  function isMirror(t1, t2) {
    if (!t1 && !t2) {
      return true;
    }

    if (!t1 || !t2 || t1.val !== t2.val) {
      return false;
    }

    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }

  return isMirror(root.left, root.right);
};

var isSymmetric2 = function (root) {
  function isMirror(s, t) {
    let q1 = [s],
      q2 = [t];

    while (q1.length > 0 || q2.length > 0) {
      let n1 = q1.shift(),
        n2 = q2.shift();
      if (!n1 && !n2) continue;
      if (!n1 || !n2 || n1.val !== n2.val) return false;

      q1.push(n1.left);
      q1.push(n1.right);
      q2.push(n2.right);
      q2.push(n2.left);
    }

    return true;
  }

  return isMirror(root.left, root.right);
};
