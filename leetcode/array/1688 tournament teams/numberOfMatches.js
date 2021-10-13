/**
 * @param {number} n
 * @return {number}
 */
// var numberOfMatches = function (n) {
//   if (n <= 1) return 0;

//   let matches = 0;

//   while (n > 1) {
//     matches += Math.floor(n / 2);
//     n = n % 2 === 0 ? n / 2 : Math.floor(n / 2) + 1;
//   }

//   return matches;
// };

var numberOfMatches = function (n) {
  return n - 1;
};

module.exports = numberOfMatches;
