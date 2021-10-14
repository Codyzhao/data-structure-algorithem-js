const MyQueue = require('./MyQueue');

test('MyQueue', () => {
  myQueue = new MyQueue();
  myQueue.push(1); // queue is: [1]
  myQueue.push(2);
  const a = myQueue.peek(); // queue is: [1, 2] (leftmost is front of the queue)
  expect(a).toBe(1);
  const b = myQueue.pop();
  expect(b).toBe(1); // return 1, queue is [2]
  expect(myQueue.empty()).toBe(false);
});
