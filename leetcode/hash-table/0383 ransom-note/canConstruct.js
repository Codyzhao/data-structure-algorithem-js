/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct1 = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const map = new Map();

  [...magazine].forEach((letter) => {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  });

  for (let i = 0; i < ransomNote.length; i++) {
    if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
      return false;
    }
    map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
  }

  return true;
};

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const strArr = new Array(26).fill(0),
    base = 'a'.charCodeAt();
  for (const s of magazine) {
    strArr[s.charCodeAt() - base]++;
  }
  for (const s of ransomNote) {
    const index = s.charCodeAt() - base;
    if (!strArr[index]) return false;
    strArr[index]--;
  }
  return true;
};

module.exports = canConstruct;
