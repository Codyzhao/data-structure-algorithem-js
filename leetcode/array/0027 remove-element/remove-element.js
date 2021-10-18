const removeElement1 = (nums, val) => {
  const numsLength = nums.length;
  if (numsLength === 0) return 0;

  let validLength = 0;

  for (let i = 0; i < numsLength; i++) {
    if (nums[i] !== val) {
      // when encounter valid number
      if (i !== validLength) {
        // but current index is not the same as lastest valid index
        const currentValidValue = nums[i];
        nums[i] = nums[validLength];
        nums[validLength] = currentValidValue; // move this valid value next to the last valid value
      }
      validLength++;
    }
  }

  return validLength;
};

const removeElement = (nums, val) => {
  if (nums.length === 0) return 0;

  let i = 0,
    j = 0;

  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
    i++;
  }

  return j;
};

module.exports = removeElement;
