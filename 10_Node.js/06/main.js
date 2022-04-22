
// 同步文件读取
// 异步文件读取
// 简单文件读取
/*
    fs.readFile(path[,options],callback)
    fs.readFileSync(path[,options])
* */
let fs = require('fs')

fs.readFile('./hello.txt',function (err,data) {
    // 回调函数参数两个
    // err
    // data
    console.log(err,data)
    // null
    // <Buffer 68 65 6c 6c 6f 0a 68 65 6c 6c 6f 32 0a 68 65 6c 6c 6f 33>
    console.log(data.toString())    // 全部输出了
    // 此时可以直接写入到一个文件内，转移图片或视频等，因为是二进制文件
})


// 流式文件读取

let rr = fs.createReadStream('./hello.txt')
let oo = fs.createWriteStream('./ohh.txt')

rr.once('open',function () {
    console.log('开始读了')
})
rr.once('close',function () {
    console.log('读完了')
    // 读完关闭可写流
    oo.end()
})

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data时间
// 绑定完成后自动开始读取数据
/*rr.on('data',function (data) {
    console.log(data.toString())
    oo.write(data)
    // 每次最大读取655536字节
})*/


// 简单方式
/*
    pipe()可以将可读流直接写到可写流
    并且会自动关闭两个流
 */
rr.pipe(oo)




