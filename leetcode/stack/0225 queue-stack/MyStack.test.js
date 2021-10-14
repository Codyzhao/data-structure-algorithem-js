const MyStack = require('./MyStack');

test('MinStack', () => {
  myStack = new MyStack();
  expect(myStack.empty()).toBe(true);
  myStack.push(1);
  myStack.push(2);
  expect(myStack.top()).toBe(2); // return 2
  expect(myStack.pop()).toBe(2); // return 2
  expect(myStack.empty()).toBe(false); // return False
});
