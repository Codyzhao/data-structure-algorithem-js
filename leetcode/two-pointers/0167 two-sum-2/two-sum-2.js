// const twoSum2 = (numbers, target) => {
//   if (numbers.length < 2) return [];
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }

//   return [];
// };

const twoSum2 = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    }
    if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      j--;
    }
  }

  return null;
};

module.exports = twoSum2;
