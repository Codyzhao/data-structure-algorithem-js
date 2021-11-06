/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  if (s.length < 1) return s;

  s = [...s];
  const stack = [s[0]];
  let i = 1;

  while (i < s.length) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    i++;
  }
  return stack.join('');
};

module.exports = removeDuplicates;
