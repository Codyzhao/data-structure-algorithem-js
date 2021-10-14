var MyQueue = function () {
  this.stack = [];
  this.cache = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack.length > 1) {
    this.cache.push(this.stack.pop());
  }
  const el = this.stack.pop();
  while (this.cache.length) {
    this.stack.push(this.cache.pop());
  }
  this.cache = [];
  return el;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack.length > 1) {
    this.cache.push(this.stack.pop());
  }
  const el = this.stack.pop();
  this.cache.push(el);
  while (this.cache.length) {
    this.stack.push(this.cache.pop());
  }
  this.cache = [];
  return el;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

module.exports = MyQueue;
