const isHappy = require('./happy-number');

test('isHappy', () => {
  expect(isHappy(19)).toBe(true);
  expect(isHappy(2)).toBe(false);
});
