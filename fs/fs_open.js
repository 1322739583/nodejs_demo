const fs = require("fs");

fs.open("./logs/log.txt",(err,fd)=>{
    console.log(fd);
    fs.fstat(fd,(err,stats)=>{
        console.log(stats);
    })
})

fs.open("./logs",(err, fd)=>{
    console.log(fd);
    fs.fstat(fd,(err,stats)=>{
        console.log(stats);
    })
})