const majorityElement = require('./majorityElement');

test('majorityElement', () => {
  expect(majorityElement([3, 2, 3])).toBe(3);
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  expect(majorityElement([2, 2, 3, 3, 3, 3])).toBe(3);
});
