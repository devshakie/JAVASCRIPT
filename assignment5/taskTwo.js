//Create a function called mergeObjects that accepts an indefinite number of objects. The function should:
//	Use the spread operator to merge all objects into one.
//	Ensure that if multiple objects contain the same key, the last object's value for that key should be used.
//	Return the merged object.

function mergeObjects(...objects) {
    return { ...objects.reduce((acc, obj) => ({ ...acc, ...obj }), {}) };
  }
  
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

  console.log(mergeObjects(obj1,obj2));
  