/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (arr, k) => {
  let left = 0;
  let i = 0;
  for (; i < arr.length; i++) {
    if (arr[i] === 0) k--;
    if (k < 0) {
      if (arr[left] === 0) k++;
      left++;
    }
  }
  return i - left;
};

longestOnes([0, 0, 0, 1], 4);
longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3);
