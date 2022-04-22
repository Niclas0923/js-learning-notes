
// 引入fs
let fs = require("fs")

// 同步的方式写入文件
let s1 = fs.openSync("./hello.txt",'w')
// 返回值是文档标识符


// 同步写入
/*
     写入内容
     fd         文件标识符
     string     要写入的内容
     position   写入的起始位置
     encoding   写入编码
* */
fs.writeSync(s1,"hello")

// 关闭文档
fs.closeSync(s1)




// 异步文件写入
fs.open("./hello2.txt",'w',function (err,fd){
    /*
        这个回调函数有两个参数
        err     错误,如果没有错误则为null
        fd      文件描述符
    * */
    if (err){
        console.log("出错")
    }else {
        fs.write(fd,'zhr',function (err,fd){
            if (!err){
                fs.close(fd)
                console.log("写入成功,文件已关闭")
            }
        })
    }
})



// 简单写入
/*
    异步
        fs. writeFile(path:路径 ,data: 内容, [options], callback:Function)
    同步
        fs. writeFileSync(path:路径 ,data: 内容, [options])


    options 选填，传入一个对象，有三个元素
        encoding : 默认utf-8
        mode :  权限
        flag : 写入模式，默认 w
            r   只读
            w   写入
            a   追加
    一般省略不写
* */
fs.writeFile('./hello3.txt',"挺不错的吧",function (err){
    if (!err){
        console.log('写入成功')
    }
})




// 流式文件写入
/*
    用于大文件写入，来减少内存的占用
* */

let ws = fs.createWriteStream('./hello4.txt')

// 监听开始和结束
/*ws.on('open',function () {
    console.log("开始")
})
    由于只会开启和结束一次，所以用once即可
    这样不会占用空间*/

ws.once('open',function () {
    console.log("开始")
})
ws.once('close',function () {
    console.log("结束")
})


ws.write("通过流式写入文件法写入文件")
ws.write("通过流式写入文件法写入文件")
ws.write("通过流式写入文件法写入文件")
ws.write("通过流式写入文件法写入文件")

// ws.close()       // 关闭文档，但是有可能写入没完成所以说不常用
ws.end()

