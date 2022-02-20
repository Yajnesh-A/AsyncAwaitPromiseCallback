const promiseOne = Promise.resolve("First Promise");
const promiseTwo = 10;
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Resolve")
})

Promise.all([promiseOne,promiseTwo, promiseThree]).then((data)=>{
    console.log("Promise All data\n", data);
})