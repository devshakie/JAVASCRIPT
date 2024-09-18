function extractProperties(object, ...properties) {
    return object.map((obj) => {
        const newObj = {};
        properties.forEach((prop) => {
            if (prop in obj) {
                newObj[prop] = obj[prop];
            }
        })
        return newObj;
    })
}
const objects = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }];
console.log(extractProperties(objects, 'a', 'c')); 