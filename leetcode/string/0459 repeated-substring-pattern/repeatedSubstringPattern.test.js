const repeatedSubstringPattern = require('./repeatedSubstringPattern');

test('repeatedSubstringPattern', () => {
  expect(repeatedSubstringPattern('abab')).toBe(true);
  expect(repeatedSubstringPattern('aba')).toBe(false);
  expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true);
});
