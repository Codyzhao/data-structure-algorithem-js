/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let j = s.length - 1;
  for (let i = 0; i < j; i++) {
    let tempJ = s[j];
    s[j] = s[i];
    s[i] = tempJ;
    j--;
  }
  return s;
};

module.exports = reverseString;
