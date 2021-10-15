const removeOuterParentheses = require('./removeOuterParentheses');

test('removeOuterParentheses', () => {
  expect(removeOuterParentheses('(()())(())')).toBe('()()()');
  expect(removeOuterParentheses('(()(()))')).toBe('()(())');
  expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
  expect(removeOuterParentheses('()()')).toBe('');
});
