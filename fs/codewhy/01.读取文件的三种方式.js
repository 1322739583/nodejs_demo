const fs = require('fs')
//1.同步读取
// utf-8和utf8都是可以的，直接接toString也可以，本质上也是转utf-8
////////////////////////////1.同步读取/////////////////////////////////
// try {
//     const res1 = fs.readFileSync('./hello fs1.txt', {encoding: 'utf-8'})
//     console.log( res1.path)
// }catch (e){
//     //异常处理，如果没有try catch 直接抛出异常，
//     // 我们是没有办法通过code errno这样的属性来判断是什么错误的。
//     console.log("01.读取文件的三种方式.js e :",e )
//     console.log("01.读取文件的三种方式.js e :",e.path )
//     console.log("01.读取文件的三种方式.js e :",e.errno )
//     console.log("01.读取文件的三种方式.js e :",e.code )
// }
///////////////////////////////////////////////////////////
//通过toString输出字符串
// console.log("01.读取文件的三种方式.js res :",res1.toString() )

///////////////////////////2.异步读取////////////////////////////////
//2.异步读取
//重要的是第三个参数，回调函数里面有err和data两个参数
// fs.readFile('./hello fs.txt', {encoding: 'utf8'}, (err, res) => {
//     if (err) {
//         console.log("存在错误：", err)
//         return
//     }
//     console.log("01.读取文件的三种方式.js res :", res)
// })
///////////////////////////////////////////////////////////

//3.promise调用
fs.promises.readFile('./hello fs.txt',{encoding:'utf8'}).then(res=>{
    console.log("01.读取文件的三种方式.js res :",res )
}).catch(err=>{
    console.log("01.读取文件的三种方式.js err :",err )
})