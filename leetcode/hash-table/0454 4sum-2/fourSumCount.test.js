const fourSumCount = require('./fourSumCount');

test('fourSumCount', () => {
  expect(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])).toEqual(2);
  expect(fourSumCount([0], [0], [0], [0])).toEqual(1);
});
