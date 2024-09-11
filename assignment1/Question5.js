//QUESTION FIVE
// Write a function to remove duplicate characters from a string while
// preserving the order of the first appearance of each character.
function removeDuplicates(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === i) {
        result += str[i];
      }
    }
    return result;
  }
  console.log(removeDuplicates("programming"));
  console.log(removeDuplicates("hello world"));
  console.log(removeDuplicates("aaaaa"));
  console.log(removeDuplicates("abcd"));
  console.log(removeDuplicates("aabbccdd"));
  