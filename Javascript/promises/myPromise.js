module.exports = function myPromise(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false; // Math.random() * 10 < 2;
            if (msg === "hello again") {
                return reject(new Error("UPPPs"));
            }
            return resolve(msg.toUpperCase());
        }, delay);
    })

}
/*
function myPromise(msg,delay){
  }*/