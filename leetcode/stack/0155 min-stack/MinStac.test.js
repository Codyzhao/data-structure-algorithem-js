const MinStack = require('./MinStack');

test('MinStack', () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toBe(-3); // return -3
  minStack.pop();
  expect(minStack.top()).toBe(0); // return 0
  expect(minStack.getMin()).toBe(-2); // return -2
});
