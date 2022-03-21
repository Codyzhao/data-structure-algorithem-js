/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || digits.length === 0) return [];

  let map = [
    '', // 0
    '', // 1
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz', // 9
  ];

  if (digits.length === 1) return map[digits].split('');

  let path = [];
  let result = [];

  function backtrack(str, index) {
    if (path.length === digits.length) {
      result.push(path.join(''));
      return;
    }
    for (const letter of map[str[index]]) {
      path.push(letter);
      backtrack(str, index + 1);
      path.pop();
    }
  }

  backtrack(digits, 0);
  return result;
};
