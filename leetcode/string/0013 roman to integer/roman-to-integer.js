// const romanToInteger = (s) => {
//   const map = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
//   };

//   let res = 0;

//   for (let i = 0; i < s.length; i++) {
//     let queryTerm = s[i] + s[i + 1];

//     if (!map.hasOwnProperty(queryTerm)) {
//       queryTerm = s[i];
//     } else {
//       i++;
//     }
//     res += map[queryTerm];
//   }
//   return res;
// };

const romanToInteger = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      result += map[s[i + 1]] - map[s[i]];
      i++;
    } else {
      result += map[s[i]];
    }
  }

  return result;
};

module.exports = romanToInteger;
