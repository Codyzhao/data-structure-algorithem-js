/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const op = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };

  for (let i = 0; i < tokens.length; i++) {
    if (Object.keys(op).includes(tokens[i])) {
      let a = parseInt(stack.pop(), 10),
        b = parseInt(stack.pop(), 10);
      const res = op[tokens[i]](b, a);
      stack.push(res);
    } else {
      stack.push(tokens[i]);
    }
  }

  return Math.floor(stack[0]);
};

module.exports = evalRPN;
