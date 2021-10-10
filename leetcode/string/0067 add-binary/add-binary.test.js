const addBinary = require('./add-binary');

test('addBinary', () => {
  // expect(addBinary('11', '1')).toBe('100');
  // expect(addBinary('1010', '1011')).toBe('10101');
  expect(addBinary('1111', '1111')).toBe('11110');
});
