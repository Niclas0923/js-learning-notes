
const http = require('http')

/*
    http.createServer()
    建立服务器的模块
* */

// 创建web服务对象
const  server = http.createServer()

// 绑定request事件
server.on('request',function (req,res) {
    console.log("有人访问了服务器")
})

// 调用server.listen监听某一端口
server.listen(8888,function () {
    console.log('8888端口监听中')
})