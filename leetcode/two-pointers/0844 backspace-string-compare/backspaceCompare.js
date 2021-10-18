/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  const handleBackSpace = (str) => {
    let stack = [];
    let i = 0;
    while (i < str.length) {
      if (str[i] === '#') stack.pop();
      else stack.push(str[i]);
      i++;
    }
    return stack.join('');
  };
  return handleBackSpace(S) === handleBackSpace(T);
};

module.exports = backspaceCompare;
