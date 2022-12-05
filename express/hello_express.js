const express = require("express")
//接收过来的express是一个函数
const app=express()

app.get("/",(req, res)=>{
    res.send("Hello World")
})

const port=8888
app.listen(port,()=>{
    console.log(`listinning on port:${port}`)
})