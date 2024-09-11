// QUESTION THREE
function isPalindrome(s) {
    return s === s.split("").reverse().join("");
  }
  function longestPalindromicSubstring(s) {
    let longestPalindromicSubstring = "";
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        let subStr = s.slice(i, j);
        if (
          isPalindrome(subStr) &&
          subStr.length > longestPalindromicSubstring.length
        ) {
          longestPalindromicSubstring = subStr;
        }
      }
    }
    return longestPalindromicSubstring;
  }
  console.log(longestPalindromicSubstring("babad"));
  console.log(longestPalindromicSubstring("cbbd"));
  