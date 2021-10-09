// const searchInsertPosition = (nums, target) => {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let finder = 0;
//   let shouldInsertAt = 0;

//   while (finder < nums.length) {
//     if (nums[finder] === target) {
//       return finder;
//     }

//     if (nums[finder] < target) {
//       shouldInsertAt++;
//     } else {
//       return shouldInsertAt;
//     }

//     finder++;
//   }
//   return shouldInsertAt;
// };

const searchInsertPosition = (nums, target) => {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > target) {
      high = mid - 1;
      if (mid === 0) return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
      if (mid === nums.length - 1) return mid + 1;
    } else {
      return mid;
    }
    if (target > nums[mid - 1] && target <= nums[mid]) return mid;
  }
  return -1;
};

module.exports = searchInsertPosition;
