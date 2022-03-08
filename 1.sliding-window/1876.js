// 1876. Substrings of Size Three with Distinct Characters
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let good = 0;

  for (let i = 0; i < s.length - 2; i++) {
    const subString = s.slice(i, i + 3);
    const set = new Set(subString);
    set.size === 3 && good++;
  }

  return good;
};

console.log(countGoodSubstrings("xyzzaz"));
console.log(countGoodSubstrings("aababcabc"));
