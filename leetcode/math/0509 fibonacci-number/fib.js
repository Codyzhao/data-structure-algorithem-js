/**
 * @param {number} n
 * @return {number}
 */

const cache = new Map();

var fib = function (n) {
  if (cache.has(n)) {
    return cache.get(n);
  }
  if (n < 2) return n;
  const result = fib(n - 1) + fib(n - 2);
  cache.set(n, result);
  return result;
};

module.exports = fib;
