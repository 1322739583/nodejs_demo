const fs = require("fs");

fs.opendir("../fs",(err,dir)=>{
    if (err) throw err
    console.log(dir.path)
})

fs.opendir("../fs",(err,dir)=>{
    if (err) throw err
    console.log(dir.path)

    let dirent
    while (dirent=dir.readSync()){
        console.log(dirent.name+" "+dirent.isFile())
    }

    dir.close((err)=>{
        if (err) throw err
        console.log("is closed")
    })

})

