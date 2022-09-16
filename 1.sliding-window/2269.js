// 2269. Find the K-Beauty of a Number
// https://leetcode.com/problems/find-the-k-beauty-of-a-number/
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  // convert number into string (basically to be able to use .length)
  const numString = num.toString();

  //store count
  let count = 0;

  // loop through each character
  for (let i = 0; i <= numString.length - k; i++) {
    // create an int from the substring
    const substring = parseInt(numString.slice(i, i + k));

    // check if the substring is a divisor of the main num
    if (num % substring === 0) count++;
  }
  return count;
};

divisorSubstrings(240, 2);
divisorSubstrings(430043, 2);
