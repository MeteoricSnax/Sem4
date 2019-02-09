const filterDir = require("./day2_2");

const pathToFile = process.argv[2];
const ext = "."+process.argv[3];

filterDir(pathToFile,ext,(err,data)=>{
    if(err){
        throw new Error("uupppp " +err);
    }
    console.log(data.join("\n"));
});

day2_2(pathToFile, ext)
.then(d=>console.log(d.join("\n")))
.catch(d=>console.log("upps", e));