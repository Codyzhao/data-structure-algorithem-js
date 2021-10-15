/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let res = '';
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) stack.push(s[i]);
    else {
      if (s[i] === '(') {
        stack.push(s[i]);
        res = res.concat(s[i]);
      } else {
        if (stack.length > 1) res = res.concat(s[i]);
        stack.pop();
      }
    }
  }
  return res;
};

module.exports = removeOuterParentheses;
