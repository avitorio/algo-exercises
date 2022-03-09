/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity;
  let soFar = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    soFar += nums[windowEnd];

    if (windowEnd - windowStart == k - 1) {
      let avg = soFar / k;
      max = Math.max(max, avg);
      soFar -= nums[windowStart];
      windowStart++;
    }
  }

  console.log(max);
  return max;
};

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
