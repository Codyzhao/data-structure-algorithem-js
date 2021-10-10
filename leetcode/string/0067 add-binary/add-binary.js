// const addBinary = (a, b) => {
//   if (a.length === 0) return b;
//   if (b.length === 0) return a;

//   const max = Math.max(a.length, b.length);

//   let res = new Array(max).fill(0);
//   let array1 = [...a];
//   let array2 = [...b];

//   for (let i = 0; i < max; i++) {
//     if (!array1[i]) {
//       array1.unshift('0');
//     }
//     if (!array2[i]) {
//       array2.unshift('0');
//     }
//   }

//   for (let i = max - 1; i >= 0; i--) {
//     switch (parseInt(array1[i], 10) + parseInt(array2[i], 10) + res[i]) {
//       case 0:
//         res[i] = 0;
//         break;
//       case 1:
//         res[i] = 1;
//         break;
//       case 2:
//         res[i] = 0;
//         res[i - 1] !== undefined ? (res[i - 1] = 1) : res.unshift(1);
//         break;
//       case 3:
//         res[i] = 1;
//         res[i - 1] !== undefined ? (res[i - 1] = 1) : res.unshift(1);
//         break;
//     }
//   }

//   return res.join('');
// };

const addBinary = (a, b) => {
  let carry = 0;
  let result = '';

  let len1 = a.length - 1;
  let len2 = b.length - 1;

  for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
    let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = `${sum}${result}`;
  }
  return result;
};

module.exports = addBinary;
