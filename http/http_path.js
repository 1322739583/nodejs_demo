const http = require("http");
const renderHtmlModule=require("./module/renderHtml")
const renderStatusModule=require("./module/renderStatus")

http.createServer((req,res)=>{
    if (req.url==="/favicon.ico"){
        return
    }
    console.log(req.url)
    res.writeHead(renderStatusModule.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
    res.write(renderHtmlModule.renderPath(req.url))
    res.end()
}).listen(8888,()=>{
    console.log("server start");
})



