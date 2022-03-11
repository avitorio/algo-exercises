/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let subArrays = 0;
  let windowSize = 0;
  let windowSum = 0;
  for (let windowEnd = 0; windowEnd <= arr.length; windowEnd++) {
    if (windowSize === k) {
      if (windowSum / k >= threshold) subArrays++;
      windowSum -= arr[windowEnd - k];
      windowSize--;
    }
    windowSum += arr[windowEnd];
    windowSize++;
  }
  console.log(subArrays);
  return subArrays;
};

numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4);
numOfSubarrays([1, 1, 1, 1, 1], 1, 0);
