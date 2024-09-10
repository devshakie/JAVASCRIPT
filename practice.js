let name = "Shakks";
let lastName = `Kanana`;

//Returns number of characters in the string
console.log(lastName.length);

//Checks the position of  character
console.log(name.charAt('4'));

//Joins two or more strings
console.log(name.concat(lastName));

// Checks if a string contains a specified substring
let sentence = "Its super sunny outside";
console.log(sentence.includes('super'))

//Returns the index of the first occurrence of a specified value in a string
console.log(sentence.indexOf('s'));

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

console.log(name.split(''));
console.log(sentence.substr(5, 9))

const trimSentence = " hey am tired "
console.log(trimSentence.trim())
console.log(trimSentence.trimStart())
console.log(trimSentence.trimEnd())

function palindrome(string) {
let revString = string.toLowerCase().split('').reverse().join('');
if (string.toLowerCase() === revString) {
    return `${string} is a palindrome`;
}

    return `${string} is not a palindrome`;

}
console.log(palindrome('cat'));
console.log(palindrome('madam'));

