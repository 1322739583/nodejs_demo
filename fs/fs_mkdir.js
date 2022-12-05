const fs = require("fs");

fs.mkdir("./logs/today/abc/cde",{recursive:true},(err,path)=>{
    console.log(err)
    if (err&&err.code==="EEXIST"){
        console.log("file already exists")
    }
    console.log(path)
})