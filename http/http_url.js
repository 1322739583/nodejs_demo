const http = require("http");
const renderHtmlModule = require("./module/renderHtml")
const renderStatusModule = require("./module/renderStatus")

const url = require("url")

http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        return
    }

    const pathName = url.parse(req.url).pathname;
    const urlObj = url.parse(req.url);
    console.log(urlObj);
    // console.log(pathName);
    console.log(url.parse(req.url),true)
    res.writeHead(renderStatusModule.renderStatus(pathName), {"Content-Type": "text/html;charset=utf-8"})
    res.write(renderHtmlModule.renderPath(pathName))
    res.end()
}).listen(8888, () => {
    console.log("server start");
})