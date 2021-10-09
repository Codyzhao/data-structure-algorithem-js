const validParenthese = require('./valid-parentheses');

test('valid parentheses', () => {
  expect(validParenthese('()')).toBe(true);
  expect(validParenthese('()[]{}')).toBe(true);
  expect(validParenthese('([)]')).toBe(false);
  expect(validParenthese('(]')).toBe(false);
  expect(validParenthese('{[]}')).toBe(true);
});
