const numberOfMatches = require('./numberOfMatches');

test('numberOfMatches', () => {
  expect(numberOfMatches(7)).toBe(6);
  expect(numberOfMatches(14)).toBe(13);
  expect(numberOfMatches(1)).toBe(0);
  expect(numberOfMatches(2)).toBe(1);
});
