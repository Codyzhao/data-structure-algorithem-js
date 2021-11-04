const strStr1 = (haystack, needle) => {
  const h = haystack.length;
  const n = needle.length;
  if (n === 0) return 0;
  if (h < n) return -1;

  let staringIndex = -1;

  for (let i = 0; i < h; i++) {
    if (haystack[i] === needle[0]) {
      staringIndex = i;
      if (haystack.slice(i, n + i) === needle) {
        return staringIndex;
      }
      staringIndex = -1;
    }
  }

  return staringIndex;
};

// const strStr = (haystack, needle) => {
//   const h = haystack.length;
//   const n = needle.length;
//   if (n === 0) return 0;
//   if (h < n) return -1;

//   let i = 0;
//   let j = 0;

//   while (i < h) {
//     if (haystack[i] === needle[0]) {
//       while (j < n) {
//         if (needle[j] !== haystack[i + j]) {
//           j = 0;
//           break;
//         }

//         if (j === n - 1) {
//           return i;
//         }
//         j++;
//       }
//     }
//     i++;
//   }

//   return -1;
// };

const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;

  const getNext = (needle) => {
    let next = [];
    let j = -1;
    next.push(j);

    for (let i = 1; i < needle.length; i++) {
      while (j >= 0 && needle[i] != needle[j + 1]) {
        j = next[j];
      }
      if (needle[i] === needle[j + 1]) {
        j++;
      }
      next.push(j);
    }
    return next;
  };

  let next = getNext(needle);
  let j = -1;

  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j];
    }

    if (haystack[i] === needle[j + 1]) {
      j++;
    }

    if (j === needle.length - 1) {
      return i - needle.length + 1;
    }
  }

  return -1;
};

module.exports = strStr;
