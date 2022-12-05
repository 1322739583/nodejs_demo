const fs = require("fs");
//1.删除一个文件
// fs.rm("./logs/today/abc/cde/log.txt",(err)=>{
//     if (err) throw err
//     console.log("删除成功")
// })
//2.删除一个目录
fs.rm("./logs/today",{recursive:true},(err)=>{
    if (err) throw err
    console.log("删除成功")
})

console.log("end")