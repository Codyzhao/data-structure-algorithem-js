const isHappy1 = (n) => {
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

function getN(n) {
  if (n === 1 || n === 0) {
    return n;
  }
  let res = 0;
  while (n) {
    res += (n % 10) * (n % 10);
    n = parseInt(n / 10);
  }
  return res;
}

const isHappy2 = (n) => {
  const sumSet = new Set();
  while (n !== 1 && !sumSet.has(n)) {
    sumSet.add(n);
    n = getN(n);
  }
  return n === 1;
};

const isHappy = (n) => {
  if (getN(n) == 1) return true;
  let a = getN(n),
    b = getN(getN(n));
  // 如果 a === b
  while (b !== 1 && getN(b) !== 1 && a !== b) {
    a = getN(a);
    b = getN(getN(b));
  }
  return b === 1 || getN(b) === 1;
};

module.exports = isHappy;
