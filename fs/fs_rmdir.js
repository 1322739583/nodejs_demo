const fs = require("fs");

fs.rmdir("./logs/today",{recursive:false},(err)=>{
    if (err) throw err
    console.log("删除成功")
})