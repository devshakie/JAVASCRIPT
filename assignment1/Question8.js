//QUESTION EIGHT
//Modify the palindrome function to be case insensitive, meaning it should ignore
// upper and lower case differences when checking for a palindrome.
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
  