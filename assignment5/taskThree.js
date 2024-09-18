//: combineArrays Function: Create a function called combineArrays that takes multiple arrays as arguments. The function should:
//	Use the spread operator to combine all arrays into one.
//	Remove duplicate elements from the combined array.
//	Return the new array with unique elements.

function combineArrays(...arrays) {
    const combined = arrays.flat(); 
    return combined;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [5, 6, 7];

console.log(combineArrays(arr1, arr2, arr3)); // Output: [1, 2, 3, 4, 5, 6, 5, 6, 7]
