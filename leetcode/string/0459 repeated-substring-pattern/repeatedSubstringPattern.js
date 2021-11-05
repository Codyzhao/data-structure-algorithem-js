/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 0) return false;

  const getNext = (s) => {
    let next = [];
    let j = 0;

    next.push(j);

    for (let i = 1; i < s.length; ++i) {
      while (j > 0 && s[i] !== s[j]) j = next[j - 1];
      if (s[i] === s[j]) j++;
      next.push(j);
    }

    return next;
  };

  let next = getNext(s);

  if (
    next[next.length - 1] !== 0 &&
    // 数组长度减去最长相同前后缀的长度相当于是第一个周期的长度，也就是一个周期的长度，如果这个周期可以被整除，就说明整个数组就是这个周期的循环
    s.length % (s.length - next[next.length - 1]) === 0
  )
    return true;
  return false;
};

module.exports = repeatedSubstringPattern;
