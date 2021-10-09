const validParenthese = (s) => {
  if (s.length === 0 || s.length % 2 !== 0) {
    return false;
  }
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]); // push to stack if is is starting parenthese
    } else if (s[i] !== map[stack.pop()]) {
      return false; // return false if the closing parenthese doesn't match with the prev starting parenthese
    }
  }
  return stack.length === 0;
};

module.exports = validParenthese;
