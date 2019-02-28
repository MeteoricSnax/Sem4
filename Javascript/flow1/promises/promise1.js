const fetch = require("node-fetch");

const url = "https://swapi.co/api/people/1";

fetch(url)
    .then(res => {
        if (res.status >= 400) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json()
    })
    .then(data => console.log("OK", data))
    .catch(e => {
        if (e.status) {
            e.fullError.then(msg => console.log("UWPSIE WOOPSIE", msg))
        }
        else {
            console.log("UPPPS", e)
        }
    })
    .finally(() => console.log("Finally in finally"));