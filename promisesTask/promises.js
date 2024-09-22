const myProm = new Promise((resolve, reject) => {
    console.log("I am running, please wait...");
    const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
    
    setTimeout(() => {
        if (skills.length > 0) {
            resolve(skills);
        } else {
            reject("No skills found");
        }
    }, 3000);

})
//consuming the promise
 myProm.then((result) => console.log(result))
.catch((error)=> console.log(error));