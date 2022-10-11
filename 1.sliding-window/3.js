// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let left = 0,
    right = 0;
  let currentString = {};
  let maxLength = 0;
  for (right; right < s.length; right++) {
    if (currentString[s[right]] >= left) {
      left = currentString[s[right]] + 1;
    }
    currentString[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("bbbbbb"));
