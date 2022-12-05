//简单的处理url拼接 已经废弃
var url  =require("url")
console.log(url.resolve("/one/two/three","four"))
console.log(url.resolve("/one/two/three","/four"))
console.log(url.resolve("/one/two/three/","four"))
console.log(url.resolve("localhost://one/two/three/","four"))
console.log(url.resolve("localhost://one/two/three","four"))
console.log(url.resolve("localhost://one/two/three","/four"))