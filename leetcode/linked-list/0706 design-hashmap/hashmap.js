var LinkedNode = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
};

var MyHashMap = function () {
  this.bucket = [];
  this.bucketLength = 1000;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.getHashCode = function (key) {
  return key % this.bucketLength;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const code = this.getHashCode(key);

  if (!this.bucket[code]) {
    this.bucket[code] = new LinkedNode(-1);
    let head = this.bucket[code];
    head.next = new LinkedNode(key, value);
    return;
  }

  let head = this.bucket[code];
  let pointer = head;
  let cur = head.next;
  while (cur) {
    if (cur.key === key) {
      cur.value = value;
      return;
    }
    pointer = cur;
    cur = cur.next;
  }
  pointer.next = new LinkedNode(key, value);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const code = this.getHashCode(key);
  if (!this.bucket[code]) return -1;

  let head = this.bucket[code];
  let cur = head.next;

  while (cur) {
    if (cur.key === key) {
      return cur.value;
    }
    cur = cur.next;
  }

  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const code = this.getHashCode(key);
  if (!this.bucket[code]) return;

  let head = this.bucket[code];
  let pointer = head;
  let cur = head.next;

  while (cur) {
    if (cur.key === key) {
      pointer.next = cur.next;
      return;
    }
    pointer = cur;
    cur = cur.next;
  }

  return;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

module.exports = MyHashMap;
