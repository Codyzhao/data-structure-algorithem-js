const { expect } = require('@jest/globals');
const isPalindrome = require('./valid-palindrome');

test('isPalindrome', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  expect(isPalindrome('race a car')).toBe(false);
  expect(isPalindrome(' ')).toBe(true);
  expect(isPalindrome('.,')).toBe(true);
  expect(isPalindrome('aa')).toBe(true);
  expect(isPalindrome('"ab_a"')).toBe(true);
});
