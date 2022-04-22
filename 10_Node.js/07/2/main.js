
const http = require('http')

// 创建web服务对象
const  server = http.createServer()

// 绑定request事件
server.on('request',function (req,res) {
    // 设置响应头来解决中文乱码的问题
    res.setHeader('Content-Type','text/html:charset=utf-8')
    // 返回客户端请求的url地址
    // 值是从端口号后面开始的
    console.log(req.url)
    // 返回客户端的请求类型
    console.log(req.method)
    // 向客户端发送内容并结束这次请求过程
    res.end(req.url)
})

// 调用server.listen监听某一端口
server.listen(8888,function () {
    console.log('8888端口监听中')
})