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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  const res = [];

  function traversal(node, cnt, path) {
    if (!node.left && !node.right) {
      if (cnt === 0) {
        res.push([...path]);
      }
      return;
    }

    if (node.left) {
      path.push(node.left.val);
      traversal(node.left, cnt - node.left.val, path);
      path.pop();
    }

    if (node.right) {
      path.push(node.right.val);
      traversal(node.right, cnt - node.right.val, path);
      path.pop();
    }
    return;
  }

  traversal(root, targetSum - root.val, [root.val]);
  return res;
};

var pathSum = function (root, targetSum) {
  if (!root) return [];
  const res = [];
  let nodeArr = [root],
    tempArr = [[]],
    countArr = [0];
  while (nodeArr.length) {
    let curNode = nodeArr.shift();
    let curVal = countArr.shift();
    let curNodeArr = tempArr.shift();

    curVal += curNode.val;

    curNodeArr.push(curNode.val);

    if (!curNode.left && !curNode.right && curVal === targetSum) {
      res.push(curNodeArr);
    }

    if (curNode.left) {
      nodeArr.push(curNode.left);
      countArr.push(curVal);
      tempArr.push([...curNodeArr]);
    }

    if (curNode.right) {
      nodeArr.push(curNode.right);
      countArr.push(curVal);
      tempArr.push([...curNodeArr]);
    }
  }
  return res;
};
