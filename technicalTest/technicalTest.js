//Write a JavaScript program to list the properties of a JavaScript object.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno: 12
};

console.log(Object.keys(Object(student)).join(","))
 
//Write a JavaScript program to delete the rollno property from
//the following object.Also print the object before or after deleting the property.
console.log(student)
delete student.rollno;
console.log(student);

//Write a JavaScript program to get the length of a JavaScript object.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
length = Object.keys(student).length;
console.log(length);

//Write a JavaScript program to display the reading
//status(i.e.display book name, author name and reading status) of the following books.
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

library.forEach(function (book) {
    console.log(`Book Name:${book.title}, Author Name:${book.author}, Reading Status:${book.readingStatus}`)
        
});

//Write a JavaScript program that returns a subset of a string.

function subStrings(str) {
    let subset = [];
    for (let i = 0; i < str.length; i++){
        for (let j = i+1; j < str.length+ 1; j++){
            subset.push(str.slice(i,j))

        }
    }
    return subset;

}
let result = subStrings("dog");
console.log(result);

//Write a JavaScript program to sort an array of JavaScript objects.
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
library.sort(function (a, b) {
    return b.libraryID - a.libraryID;
})
console.log(library)
 
//Write a JavaScript function to print all the methods in a JavaScript object.

function all_methods(obj) {
 
    const properties = Object.getOwnPropertyNames(obj);
    return properties; 
}

console.log(all_methods(Array));


//Write a JavaScript function to parse an URL.
function parseURL(url) {
    try {
        
        const parsedUrl = new URL(url);
        return {
            href: parsedUrl.href,
            protocol: parsedUrl.protocol,
            host: parsedUrl.host,
            hostname: parsedUrl.hostname,
            port: parsedUrl.port,
            pathname: parsedUrl.pathname,
            search: parsedUrl.search,
            hash: parsedUrl.hash
        };
    } catch (error) {
       
        console.error('Invalid URL:', error);
        return null;
    }
}


const url = 'https://teach2give.github.io/Javascript-Docs/stings.html#string-properties';
console.log(parseURL(url));




// Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
function getAllPropertyNames(obj) {
    let properties = [];
    for (let key in obj) {
        properties.push(key);
    }

    return properties;
}

console.log(getAllPropertyNames(Array.prototype));



//Write a JavaScript function to retrieve all the values of an object's properties.
function getAllValues(obj) {
    return Object.values(obj);
}
console.log(getAllValues({ a: "books", b: "pens", c: "pencils" }));



//Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function objectToPairs(obj) {
    return Object.entries(obj);
}
console.log(objectToPairs({ a: "books", b: "pens", c: "pencils"}));



// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
function invertObject(obj) {
    const inverted = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}
console.log(invertObject({ a: "books", b: "pens", c: "pencils" }));



//Write a JavaScript function to check whether an object contains a given property.
function hasProperty(obj, prop) {
    return prop in obj;
 
}
console.log(hasProperty({ a: "books", b: "pens" }, 'pens')); 
console.log(hasProperty({ a: "books", b: "pencils" }, 'pens')); 
