const topKFrequent = require('./topKFrequent');

test('topKFrequent', () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  expect(topKFrequent([1], 1)).toEqual([1]);
});
