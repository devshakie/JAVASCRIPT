// QUESTION FOUR
//Write a function to check if two given strings are anagrams of each other. 
//Two strings are anagrams if they contain the same characters in the same frequency 
//but in different orders.
function areAnagrams(str1, str2) {
    //split the string into an array of characters, sort the array and join the array back into a string
    //and compare them
    return (
      str1.toLowerCase().split("").sort().join("") ===
      str2.toLowerCase().split("").sort().join("")
    );
  }
  console.log(areAnagrams("Listen", "Silent"));
  console.log(areAnagrams("Hello", "World"));
  