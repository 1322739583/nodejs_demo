//新版本的url写法
const http = require("http");
const renderHtmlModule = require("./module/renderHtml")
const renderStatusModule = require("./module/renderStatus")

const url = require("node:url")


http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        return
    }

    const myUrl=new URL(req.url,"http://127.0.0.1:8888")
    console.log(myUrl)

    const newUrl='http://127.0.0.1:8888/user/info?name=tom&age=10'
    console.log(url.format(newUrl, { fragment: false, unicode: true, auth: false }));

    // console.log(url.format(, {unicode: true, auth: false, fragment: false, search: false}));


}).listen(8888, () => {
    console.log("server start");
})