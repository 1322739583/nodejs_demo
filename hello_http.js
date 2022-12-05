//http的helo例子

//require是没有提示的
let http = require("http")

// //1.创建服务
http.createServer((req, res) => {
    res.write("Hello Node")
    res.end()
}).listen(3000, () => {
    console.log("server start");
})





