function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (map.has(another)) {
      return [map.get(another), i];
    }
    map.set(nums[i], i);
  }
  return null;
}

module.exports = twoSum;
