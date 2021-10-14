var MyStack = function () {
  this.content = [];
  this.storage = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.content.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.content.length > 1) {
    this.storage.push(this.content.shift());
  }
  const ele = this.content.shift();
  this.content = this.storage;
  this.storage = [];
  return ele;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.content.length > 1) {
    this.storage.push(this.content.shift());
  }
  const ele = this.content.shift();
  this.storage.push(ele);
  this.content = this.storage;
  this.storage = [];
  return ele;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.content.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

module.exports = MyStack;
