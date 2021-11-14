/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [],
    queue = [root];
  while (queue.length !== 0 && root !== null) {
    let length = queue.length;
    let curLevel = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      for (let item of node.children) {
        item && queue.push(item);
      }
    }
    res.push(curLevel);
  }
  return res;
};
