//http的helo例子

//require是没有提示的
let http = require("http")
// //1.创建服务
http.createServer((req, res) => {
    //是会输出两次的
    console.log("run")
    if (req.url==="/favicon.ico"){
        return
    }
    console.log(req.url)

    // res.writeHead(200,{"Content-Type":"text/plain"})
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write("<html><h1>你好 Node</h1></html>")
    res.end()
}).listen(8888, () => {
    console.log("server start");
})





