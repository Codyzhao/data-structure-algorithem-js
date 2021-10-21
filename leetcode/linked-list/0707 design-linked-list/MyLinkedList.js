function Node(val, next, prev) {
  this.val = val;
  this.next = next || null;
  this.prev = prev || null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.size - 1) {
    return -1;
  } else {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) {
    this.addAtHead(val);
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    const node = new Node(val, null, current);
    current.next = node;
    this.size++;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
  } else if (index === 0) {
    this.addAtHead(val);
  } else {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    const node = new Node(val, current, current.prev);
    current.prev.next = node;
    current.prev = node;
    this.size++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.size - 1 || this.size === 0) {
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    if (current.next === null) {
      // last node
      current.prev.next = null;
      current.prev = null;
    } else {
      // middle
      let p = current.prev;
      let n = current.next;

      p.next = n;
      n.prev = p;
    }
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

MyLinkedList.prototype.print = function () {
  let output = '';

  let current = this.head;
  while (current) {
    output += `${current.val} -> `;
    current = current.next;
  }

  output += 'null';

  console.log(output);
};

MyLinkedList.prototype.getSize = function () {
  console.log(this.size);
};

module.exports = MyLinkedList;
