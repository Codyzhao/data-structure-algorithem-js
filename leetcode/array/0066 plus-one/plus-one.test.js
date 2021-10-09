const plusOne = require('./plus-one');

test('plusOne', () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  expect(plusOne([0])).toEqual([1]);
  expect(plusOne([9])).toEqual([1, 0]);
  expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  expect(plusOne([1, 8, 9])).toEqual([1, 9, 0]);
  expect(plusOne([2, 9, 9])).toEqual([3, 0, 0]);
});
