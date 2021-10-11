const twoSum2 = require('./two-sum-2');

test('twoSum2', () => {
  expect(twoSum2([2, 7, 11, 15], 9)).toEqual([1, 2]);
  expect(twoSum2([2, 3, 4], 6)).toEqual([1, 3]);
  expect(twoSum2([-1, 0], -1)).toEqual([1, 2]);
});
