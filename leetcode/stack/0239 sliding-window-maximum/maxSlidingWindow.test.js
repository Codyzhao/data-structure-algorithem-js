const maxSlidingWindow = require('./maxSlidingWindow');

test('maxSlidingWindow', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
    3, 3, 5, 5, 6, 7,
  ]);
  expect(maxSlidingWindow([1], 1)).toEqual([1]);
  expect(maxSlidingWindow([1, -1], 1)).toEqual([1, -1]);
  expect(maxSlidingWindow([9, 11], 2)).toEqual([11]);
  expect(maxSlidingWindow([4, -2], 2)).toEqual([4]);
});
