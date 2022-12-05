const fs = require("fs");
//1.基本使用
// fs.readdir("../fs",(err,flies)=>{
//     for (let i = 0; i < flies.length; i++) {
//         console.log(flies[i])
//     }
// })

//2.带文件类型
fs.readdir("../fs",{withFileTypes:true},(err,flies)=>{
    for (let i = 0; i < flies.length; i++) {
        console.log(flies[i].name+" "+flies[i].isFile())
    }
})