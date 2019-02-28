const filterDir = require("./dirFilterPromise");

const directory = process.argv[2];
const filter = "."+process.argv[3];

filterDirFiltered(directory,filter,(err,data)=>{
    if(err){
        throw new Error("uupppp " +err);
    }
    console.log(data.join("\n"));
    
});

day2_2(directory, filter)
.then(d=>console.log(d.join("\n")))
.catch(d=>console.log("upps", e));