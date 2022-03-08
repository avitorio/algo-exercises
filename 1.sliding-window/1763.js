// 1763. Longest Nice Substring
// https://leetcode.com/problems/longest-nice-substring/

var longestNiceSubstring = function (s) {
  function isLongestNiceSubstring(a) {
    if (a.length < 2) return "";
    let checker = new Set(a);
    for (let i = 0; i < a.length; i++) {
      if (
        !checker.has(a[i].toLowerCase()) ||
        !checker.has(a[i].toUpperCase())
      ) {
        let s1 = isLongestNiceSubstring(a.substring(0, i));
        let s2 = isLongestNiceSubstring(a.substring(i + 1, a.length));

        return s2.length > s1.length ? s2 : s1;
      }
    }
    return a;
  }

  return isLongestNiceSubstring(s);
};

console.log(longestNiceSubstring("YazaAay"));
