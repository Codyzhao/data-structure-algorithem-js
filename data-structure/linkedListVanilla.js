function Node(value) {
  this.value = value;
  this.next = null;
}

const LinkedList = function () {
  this.head = null;
  this.length = 0;
};

LinkedList.prototype.toString = function () {
  let pointer = this.head;
  let s = '';
  while (pointer) {
    s += `${pointer.value} => `;
    pointer = pointer.next;
  }

  s += 'null';
  console.log(s);
};

LinkedList.prototype.size = function () {
  return this.length;
};

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

LinkedList.prototype.getHead = function () {
  return this.head;
};

LinkedList.prototype.append = function (node) {
  if (this.head === null) {
    this.head = node;
  } else {
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = node;
  }
  this.length++;
};

LinkedList.prototype.indexOf = function (value) {
  if (this.length === 0) return -1;
  let pointer = this.head;
  let output = 0;
  while (pointer) {
    if (value === pointer.value) {
      return output;
    }
    output++;
    pointer = pointer.next;
  }
  return -1;
};

LinkedList.prototype.insertAt = function (index, node) {
  if (index < 0 || index > this.length - 1) return;

  if (index === 0) {
    let temp = this.head;
    this.head = node;
    node.next = temp;
  } else {
    let pointer = this.head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    node.next = pointer.next;
    pointer.next = node;
  }
  this.length++;
};

LinkedList.prototype.removeAt = function (index) {
  let removeEl = null;
  if (index < 0 || index > this.length - 1) return null;

  if (index === 0) {
    const currentHead = this.head;
    removeEl = currentHead;
    this.head = currentHead.next;
    this.length--;
  } else {
    let pointer = this.head;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.next;
    }
    const current = pointer;
    removeEl = current.next;
    pointer.next = current.next.next;
    this.length--;
  }

  return removeEl;
};

module.exports = { LinkedList, Node };
