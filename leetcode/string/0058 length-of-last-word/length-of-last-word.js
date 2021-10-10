const lengthOfLastWord = (s) => {
  s = s.trim();
  if (s.length === 0) return 0;
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      break;
    }
    res++;
  }
  return res;
};

module.exports = lengthOfLastWord;
