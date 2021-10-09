const { expect } = require('@jest/globals');
const strStr = require('./str-str');

test('strStr', () => {
  // expect(strStr('hello', 'll')).toBe(2);
  // expect(strStr('aaaaa', 'bba')).toBe(-1);
  // expect(strStr('', '')).toBe(0);
  expect(strStr('aaabaaabbbabaa', 'babb')).toBe(-1);
});
