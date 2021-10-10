// const isPalindrome = (s) => {
//   if (s.length === 1) return true;
//   s = s
//     .trim()
//     .replace(/[\W _]/g, '')
//     .toLowerCase();

//   if (s.length === 0) return true;

//   let mid = Math.floor(s.length / 2);

//   const part1 = [...s.slice(0, mid)].reverse().join('');
//   const part2 = s.slice(mid, s.length);

//   return part1 === part2 || part1 == part2.substring(1, part2.length);
// };

const isPalindrome = (s) => {
  if (s.length === 1) return true;
  s = s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  if (s.length === 0) return true;

  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
};

module.exports = isPalindrome;
