const myPromise = require("./myPromise")

let results = [];

const p1 = myPromise("hello", 3000)
const p2 = myPromise("hello again", 2000)
const p3 = myPromise("hello again again", 1000)
let promises = [p1, p2, p3];
Promise.all(promises)
    .then(res => console.log(res))
    .catch(err => console.log("ups"))
    .finally(() => console.log("Finally"))