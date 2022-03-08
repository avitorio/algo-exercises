/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = k - 1;
  let res = Infinity;

  while (r < nums.length) {
    res = Math.min(res, nums[r] - nums[l]);
    l = l + 1;
    r = r + 1;
  }
  console.log(res);
  return res;
};

minimumDifference([90], 1);
minimumDifference([9, 4, 1, 7], 2);
minimumDifference([4, 2, 1, 3], 1);
minimumDifference([1, 3, 6, 10, 15], 3);
