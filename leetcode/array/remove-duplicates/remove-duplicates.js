const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let last = 0;
  let finder = 0;

  while (last < nums.length) {
    while (nums[finder] === nums[last]) {
      finder++; // if next is the same value, keep looking
      if (finder === nums.length) {
        return last + 1;
      }
    }

    nums[last + 1] = nums[finder]; // set the unique value next to current value
    last++;
  }

  return last + 1;
};

module.exports = removeDuplicates;
