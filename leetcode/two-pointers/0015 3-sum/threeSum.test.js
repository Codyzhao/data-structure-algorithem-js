const threeSum = require('./threeSum');

test('threeSum', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
  expect(threeSum([])).toEqual([]);
  expect(threeSum([0])).toEqual([]);
});
