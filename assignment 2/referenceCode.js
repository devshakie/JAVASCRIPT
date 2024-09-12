// A variable is a storage place. 
// Think of it as a container, a room, or a space that can contain items.
// Your room is a storage that contains beds, a TV, a gas cooker, etc.
// For that, it can be stored in a variable named `myRoom`, which is an array.
let myRoom = ['bed', 'chair', 'gas cooker', 'table', 'tv'];

// Data types of variable names:
// 1: String
// 2: Number - (Integer, Float, Double, Infinity, NaN)
// 3: Array
// 4: Boolean
// 5: Object
// 6: Undefined
// 7: BigInt
// 8: Symbol
// 9: Null - Represents the intentional absence of any value

// In low-level languages, types are very strict.
// Example: In Java, one cannot say `String name = 5`
// In JavaScript, you can say `let name = 5`
let name = 2000;
let myName = 78999;
let result = name + myName;
console.log(result); // Output: 80999

// In JavaScript, there are 3 ways to declare variables:
// 1. `var` keyword: A `var` value can be changed
// 2. `let` keyword: A `let` value can be changed
// 3. `const` keyword: A `const` value is constant, meaning the value will never change. Changing it will lead to an error

// Integer
let myKiswahiliMarks = 67;
console.log(typeof myKiswahiliMarks); // Output: number

// Float/Double
let bankBalance = 23.78;
console.log(typeof bankBalance); // Output: number

// Infinity
let yearsInHeaven = Infinity;
console.log(typeof yearsInHeaven); // Output: number

// A character is automatically a string.
// Anything in JavaScript placed inside quotes is a string
let firstChar = 'A';
console.log(typeof firstChar); // Output: string
let sname = "John";

// Let's declare a boolean
// A boolean value is always true or false
let isAdmin = false;
let isPermitted = true;

// Let's declare undefined, which means no value
let student;
console.log(typeof student); // Output: undefined

// Null value
let age = null;
console.log(age); // Output: null

// An object variable can contain all types of variables.
// You can use commas and colons in objects
let countryInfo = { citizenShip: 'Kenyan', idNumber: 44455567 };
let marks = [34, 56, 67, 78];
let info = { fname: 'Titus', sname: 'Kimutai', age: 23, isStudent: true, countryInfo, marks };

// Arrays can also contain other data types, including arrays themselves, hence array of arrays
// An array of objects
let moreInfo = [countryInfo, marks, info];
console.log(moreInfo);

// Once you declare a variable, you need to give it a name, and that’s what is called a variable name
var first_name = 'Eluid Murithi'; // String
const phoneNumber = 254789567364; // Integer using const, hence it can never be changed
// phoneNumber = 345564734893; // Uncommenting this will lead to an error since you are trying to change the value of a constant
console.log(phoneNumber); // Output: 254789567364
