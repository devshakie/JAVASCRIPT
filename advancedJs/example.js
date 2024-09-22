
const myProm = new Promise((resolve, reject) => {
    console.log(`I am running please wait....`);
    const skills = []
    setTimeout(() => {
      if (skills.length > 0) {
        // fetching data from an API
        resolve(skills)
      } else {
        reject(`something went wrong`)
      }
    }, 3000)
  })
  
  // we need to consume the promise  
  // use .then to resolve or .catch to reject
  //imaging the skills are empty, we need to capture error
  // we use .catch
  myProm.then((result) => console.log(result))
    .catch((error) => console.log(error))