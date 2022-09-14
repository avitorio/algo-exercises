// 1763. Longest Nice Substring
// https://leetcode.com/problems/longest-nice-substring/

var longestNiceSubstring = function (s) {
  function isLongestNiceSubstring(a) {
    // Word needs at least 2 chars
    if (a.length < 2) return "";

    // Creating a set from the string allows for quick upper and lower case checking.
    let checker = new Set(a);

    // Create a loop to go over each letter
    for (let i = 0; i < a.length; i++) {
      // If the current letter is not found in upper and lower case form...
      if (
        !checker.has(a[i].toLowerCase()) ||
        !checker.has(a[i].toUpperCase())
      ) {
        // ...slice the word into two, creating one new word before and after the letter
        // and feed those new words to the isLongestNiceSubstring function
        let s1 = isLongestNiceSubstring(a.slice(0, i));
        let s2 = isLongestNiceSubstring(a.slice(i + 1, a.length));

        // We then return the largest found word
        return s2.length > s1.length ? s2 : s1;
      }
    }

    // This returns only nice substrings
    return a;
  }

  return isLongestNiceSubstring(s);
};

console.log(longestNiceSubstring("YazaAay"));
console.log(longestNiceSubstring("Bb"));
