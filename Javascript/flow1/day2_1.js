const fs = require("fs");
const fileName = process.argv[2];

const content = fs.readFile(fileName, (err,data)=>{
    if(err){
        throw new Error("sheit niggah" + err);
    }
    const d = data.toString();
    console.log(d)
})