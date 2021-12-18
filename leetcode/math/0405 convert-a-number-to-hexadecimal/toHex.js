/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  var arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  if (num === 0) return arr[0];

  let res = '';

  if (num < 0) {
    num += Math.pow(2, 32);
  }

  while (num > 0) {
    let rem = num % 16;
    res = arr[rem] + res;
    num = Math.floor(num / 16);
  }
  return res;
};
