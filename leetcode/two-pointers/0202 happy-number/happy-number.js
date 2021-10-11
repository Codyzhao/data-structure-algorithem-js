const isHappy = (n) => {
  if (n < 0) return false;
  const seen = new Map();

  while (n !== 1 && !seen.has(n)) {
    seen.set(n, true);
    n = getSqr(n);
  }

  return n === 1;
};

function getSqr(num) {
  num = num + '';
  let res = 0;
  for (let i = 0; i < num.length; i++) {
    res += Math.pow(parseInt(num[i], 10), 2);
  }
  return res;
}

module.exports = isHappy;
