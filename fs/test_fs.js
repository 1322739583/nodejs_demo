const fs = require("fs")

fs.readFile("test.txt","utf8",(err,dataStr)=>{
    if (err!==null){
        console.log("read file faild!")
    }else {
        console.log(dataStr)
    }
})


fs.writeFile("test.txt","一二三","utf8",(err,str)=>{

})