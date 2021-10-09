const searchInsertPosition = require('./search-insert-position');

test('search insert posistion', () => {
  expect(searchInsertPosition([1, 3, 5, 6], 5)).toEqual(2);
  expect(searchInsertPosition([1, 3, 5, 6], 2)).toEqual(1);
  expect(searchInsertPosition([1, 3, 5, 6], 7)).toEqual(4);
  expect(searchInsertPosition([1, 3, 5, 6], 0)).toEqual(0);
});
