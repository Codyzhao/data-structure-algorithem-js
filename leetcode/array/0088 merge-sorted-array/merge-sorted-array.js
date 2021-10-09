const mergeSortedArray = (nums1, m, nums2, n) => {
  for (let i = m + n; m > 0 && n > 0; i--) {
    if (nums1[m - 1] <= nums2[n - 1]) {
      nums1[i - 1] = nums2[n - 1];
      n--;
    } else {
      nums1[i - 1] = nums1[m - 1];
      m--;
    }
  }

  // if anything left on nums2, just replace the sum1 value with them
  while (n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n--;
  }

  return nums1;
};

module.exports = mergeSortedArray;
