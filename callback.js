//引入文件模块
var fs=require("fs")

var data = fs.readFileSync("package.json");
console.log(data.toString())
//
// fs.readFile("package.json",function(err,data) {
//     if (err) console.error(err)
//     console.log(data.toString())
// });
console.log("程序结束！")