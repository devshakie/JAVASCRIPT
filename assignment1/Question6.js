//QUESTION SIX
function countDistinctPalindromes(s) {
    let palindromes = new Set();
  
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        let subStr = s.slice(i, j);
        if (subStr === subStr.split("").reverse().join("")) {
          palindromes.add(subStr); // Add only distinct palindromes
        }
      }
    }
  
    return palindromes.size; // Return the number of distinct palindromes
  }
  
  
// Test cases
console.log(countDistinctPalindromes("ababa")); // Output: 5 (a, b, aba, bab, ababa)
console.log(countDistinctPalindromes("aaa")); // Output: 3 (a, aa, aaa)
console.log(countDistinctPalindromes("abc")); // Output: 3 (a, b, c)
