const http = require("http");
const renderHtmlModule = require("./module/renderHtml")
const renderStatusModule = require("./module/renderStatus")

const url = require("url")

http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        return
    }
    const urlNode="https://nodejs.org:8888/zh-cn/docs/guides?name=tom&age=10#tag=100"
    const urlObj = url.parse(urlNode,true);
    console.log(urlObj)
    console.log(url.format(urlObj));
    //res.writeHead(renderStatusModule.renderStatus(pathName), {"Content-Type": "text/html;charset=utf-8"})
  //  res.write(renderHtmlModule.renderPath(pathName))
 //   res.end()
}).listen(8888, () => {
    console.log("server start");
})