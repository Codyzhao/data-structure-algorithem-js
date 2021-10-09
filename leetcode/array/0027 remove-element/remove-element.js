const removeElement = (nums, val) => {
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

module.exports = removeElement;
