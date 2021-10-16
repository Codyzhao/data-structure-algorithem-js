const generateParenthesis = require('./generateParenthesis');

test('strSgenerateParenthesistr', () => {
  expect(generateParenthesis(3)).toEqual([
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
  ]);
  expect(generateParenthesis(1)).toEqual(['()']);
});
