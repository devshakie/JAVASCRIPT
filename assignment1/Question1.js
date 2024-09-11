//QUESTION ONE
function isPalindrome(str) {
  // Remove non-alphanumeric characters 
  let cleanedStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  // Reverse the cleaned string
  let revString = cleanedStr.split("").reverse().join("");

    // Compare the cleaned string with the reversed string
    return cleanedStr === revString;
  

}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Was it a car or a cat I saw"));
console.log(isPalindrome("Helo, World!"));
