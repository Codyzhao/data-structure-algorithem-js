const { array } = require('yargs');

const Tree = function () {
  const Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  let root = null;

  const insertNode = function (node, newNode) {
    if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    } else if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    }
  };

  this.insert = function (value) {
    const newNode = new Node(value);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const traverse = function (node, cb) {
    if (node === null) {
      return;
    }

    traverse(node.left, cb);
    traverse(node.right, cb);
    cb(node.value);
  };

  this.traverse = function (cb) {
    traverse(root, cb);
  };

  this.getRoot = function () {
    return root;
  };

  const min = function (node) {
    if (node === null) return null;
    while (node.left) {
      node = node.left;
    }
    return node.value;
  };

  this.min = function () {
    return min(root);
  };

  const max = function (node) {
    if (node === null) return null;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  };

  this.max = function () {
    return max(root);
  };

  const findMinNode = function (node) {
    if (node === null) return null;
    while (node && node.left) {
      node = node.left;
    }
    return node;
  };

  const removeNode = function (node, value) {
    if (node === null) {
      return null;
    }

    if (value > node.value) {
      node.right = removeNode(node.right, value);
      return node;
    } else if (value < node.value) {
      node.left = removeNode(node.left, value);
      return node;
    } else {
      // leave nodes
      if (node.left === null && node.right === null) {
        return null;
      }

      // only on child
      if (node.left === null && node.right) {
        return node.right;
      } else if (node.right == null && node.left) {
        return node.left;
      }

      // two children - remove right child tree's min value
      const aux = findMinNode(node.right);
      node.value = aux.value;
      node.right = removeNode(node.right, aux.value);
      return node;
    }
  };

  this.remove = function (value) {
    root = removeNode(root, value);
  };
};

const tree = new Tree();

tree.insert(8);
tree.insert(2);
tree.insert(3);

console.log(tree.getRoot());

const print = (value) => console.log(value);

tree.traverse(print);

console.log('min: ', tree.min());
console.log('max: ', tree.max());

function preorderTraversal(root) {
  const result = [];
  function traversal(node, arr) {
    if (!node) return;
    arr.push(node.val);
    traversal(node.left, arr);
    traversal(node.right, arr);
  }
  traversal(root, arr);
  return result;
}

function inorderTraversal(root) {
  const result = [];
  function traversal(node, arr) {
    if (!node) return;
    traversal(node.left, arr);
    arr.push(node.val);
    traversal(node.right, arr);
  }
  traversal(root, arr);
  return result;
}

function postorderTraversal(root) {
  const result = [];
  function traversal(node, arr) {
    if (!node) return;
    traversal(node.left, arr);
    traversal(node.right, arr);
    arr.push(node.val);
  }
  traversal(root, arr);
  return result;
}
