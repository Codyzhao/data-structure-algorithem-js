const nextGreaterElement = require('./nextGreaterElement');

test('nextGreaterElement', () => {
  expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
  expect(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])).toEqual([
    7, 7, 7, 7, 7,
  ]);
});
