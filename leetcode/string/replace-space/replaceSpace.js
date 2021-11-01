/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  const strArr = [...s];
  let count = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') count++;
  }

  let left = strArr.length - 1;
  let right = strArr.length + count * 2 - 1;

  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--;
    } else {
      strArr[right--] = strArr[left--];
    }
  }

  return strArr.join('');
};

module.exports = replaceSpace;
