const fs = require("fs");

fs.rename("./logs/tomorrow","./logs/tomorrow",(err)=>{
    if (err) throw err
    console.log("rename succeed")
})