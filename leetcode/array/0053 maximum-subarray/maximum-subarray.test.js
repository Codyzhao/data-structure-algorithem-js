const maximunSubarray = require('./maximum-subarray');

test('maximum subarray', () => {
  expect(maximunSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  expect(maximunSubarray([1])).toEqual(1);
  expect(maximunSubarray([5, 4, -1, 7, 8])).toEqual(23);
  expect(maximunSubarray([-2, -1])).toEqual(-1);
});
