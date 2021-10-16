/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let output = 0;

  let i = g.length - 1;
  let j = s.length - 1;

  while (i >= 0 && j >= 0) {
    if (g[i] <= s[j]) {
      output++;
      i--;
      j--;
    } else {
      i--;
    }
  }

  return output;
};

module.exports = findContentChildren;
