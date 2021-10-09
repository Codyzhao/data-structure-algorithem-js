const romanToInteger = require('./roman-to-integer');

test('roman to integer', () => {
  expect(romanToInteger('III')).toBe(3);
  expect(romanToInteger('IV')).toBe(4);
  expect(romanToInteger('IX')).toBe(9);
  expect(romanToInteger('LVIII')).toBe(58);
  expect(romanToInteger('MCMXCIV')).toBe(1994);
});
