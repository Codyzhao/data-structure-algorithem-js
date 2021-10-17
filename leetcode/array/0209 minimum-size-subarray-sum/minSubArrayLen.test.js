const minSubArrayLen = require('./minSubArrayLen');

test('minSubArrayLen', () => {
  expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
  // expect(minSubArrayLen(4, [1, 4, 4])).toEqual(1);
  // expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toEqual(0);
  // expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toEqual(3);
});
