const { expect } = require('@jest/globals');
const intersection = require('./intersection');

test('intersection', () => {
  expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
});
