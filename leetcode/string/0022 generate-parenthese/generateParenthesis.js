/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const res = [];
  function backtrack(left, right, s) {
    if (s.length === n * 2) {
      res.push(s);
      return;
    }

    if (left < n) backtrack(left + 1, right, s + '(');
    if (left > right) backtrack(left, right + 1, s + ')');
  }

  backtrack(0, 0, '');

  return res;
};

module.exports = generateParenthesis;
