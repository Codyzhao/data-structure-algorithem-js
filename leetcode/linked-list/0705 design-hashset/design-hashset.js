var LinkedNode = function (val) {
  this.val = val;
  this.next = null;
};

var MyHashSet = function () {
  this.buckets = [];
  this.bucketsLen = 1000;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let hashCode = key % this.bucketsLen;
  if (!this.buckets[hashCode]) {
    this.buckets[hashCode] = new LinkedNode(-1);
    let head = this.buckets[hashCode];
    head.next = new LinkedNode(key);
    return;
  } else {
    let head = this.buckets[hashCode];
    let point = head;
    head = head.next;
    while (head !== null) {
      if (head.val === key) {
        return;
      } else {
        point = head;
        head = head.next;
      }
    }
    point.next = new LinkedNode(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let hashCode = key % this.bucketsLen;
  let head = this.buckets[hashCode];
  if (!head) {
    return;
  }
  let point = head;
  let cur = head.next;
  while (cur !== null) {
    if (cur.val === key) {
      point.next = cur.next;
      return;
    }
    point = cur;
    cur = cur.next;
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let hashCode = key % this.bucketsLen;
  let head = this.buckets[hashCode];

  if (!head) return false;

  let point = head;

  while (point) {
    if (point.val === key) return true;
    point = point.next;
  }

  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

module.exports = MyHashSet;
