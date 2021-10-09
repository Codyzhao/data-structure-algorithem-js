const mergeSortedArray = require('./merge-sorted-array');

test('removeDuplicates', () => {
  expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
    1, 2, 2, 3, 5, 6,
  ]);
  expect(mergeSortedArray([1], 1, [], 0)).toEqual([1]);
  expect(mergeSortedArray([0], 0, [1], 1)).toEqual([1]);
});
