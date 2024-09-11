//QUESTION SEVEN
function longestCommonPrefix(strs) {
    // If the array is empty, return "-1"
    if (strs.length === 0) return "-1";
  
    // Sort the array of strings
    strs.sort();
  
    // Get the first and last strings after sorting
    let first = strs[0];
    let last = strs[strs.length - 1];
    let minLength = Math.min(first.length, last.length);
  
    let i = 0;
    // Find the common prefix between the first and last
    // strings
    while (i < minLength && first[i] === last[i]) {
      i++;
    }
  
    // Check if there's no common prefix
    if (i === 0) return "''";
  
    // Return the common prefix
    return first.substring(0, i);
  }
  
  console.log(longestCommonPrefix(["flower", "flow", "flight"]));
  console.log(longestCommonPrefix(["dog", "racecar", "car"]));
  console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
  console.log(longestCommonPrefix(["prefix", "prefixes", "preform"]));
  console.log(longestCommonPrefix(["apple", "banana", "cherry"]));