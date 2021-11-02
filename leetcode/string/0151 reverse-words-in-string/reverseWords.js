/**
 * @param {string} s
 * @return {string}
 */
function reverse(arr, start, end) {
  let left = start;
  let right = end;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

function removeExtraSpace(arr) {
  let slow = 0,
    fast = 0;
  while (fast < arr.length) {
    if (arr[fast] === ' ' && (fast === 0 || arr[fast - 1] === ' ')) {
      fast++;
    } else {
      arr[slow++] = arr[fast++];
    }
  }

  arr.length = arr[slow - 1] === ' ' ? slow - 1 : slow;
}

var reverseWords = function (s) {
  s = [...s.trim()];

  removeExtraSpace(s);

  console.log(s.join(''));

  reverse(s, 0, s.length - 1);

  let start = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === ' ' || i === s.length) {
      reverse(s, start, i - 1);
      start = i + 1;
    }
  }

  return s.join('');
};

module.exports = reverseWords;
