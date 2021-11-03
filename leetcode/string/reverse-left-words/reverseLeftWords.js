/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords1 = function (s, n) {
  if (n <= 0 || n > s.length) return s;
  s = [...s];

  for (let i = 0; i < s.length - n; i += n) {
    let slow = i,
      fast = slow + n,
      count = n;
    while (count--) {
      [s[slow], s[fast]] = [s[fast], s[slow]];
      slow++;
      fast++;
    }
  }
  return s.join('');
};

function reverse(arr, start, end) {
  let left = start,
    right = end;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

var reverseLeftWords = function (s, n) {
  if (n <= 0 || n > s.length) return s;
  s = [...s];

  reverse(s, 0, n - 1); // reverse before n
  reverse(s, n, s.length - 1); // reverse after n
  reverse(s, 0, s.length - 1); // reverse entire arr
  return s.join('');
};

module.exports = reverseLeftWords;
