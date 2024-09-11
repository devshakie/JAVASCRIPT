//QUESTION EIGHT
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    // Reverse the cleaned string
    let revString = cleanedStr.split("").reverse().join("");
  
    return cleanedStr === revString;
  }
  
  console.log(isPalindrome("Aba"));
  console.log(isPalindrome("Racecar"));
  console.log(isPalindrome("Palindrome"));
  console.log(isPalindrome("Madam"));
  console.log(isPalindrome("Hello"));
  