
const http = require('http')
const path = require('path')
const fs = require('fs')

// 创建web服务对象
const  server = http.createServer()

// 绑定request事件
server.on('request',function (req,res) {
    // 获取请求的url地址
    const url = req.url
    let urlIn
    console.log(url)
    if(url === '/' || url === '/main.html'){
        urlIn = path.join(__dirname,'/main.html')
        // 设置响应头来解决中文乱码的问题
        res.setHeader('Content-Type','text/html;charset=utf-8')
    }else{
        // 设置响应头
        // 不同的文件类型都要重新设置
        if(path.extname(url) === '.css'){
            res.setHeader('Content-Type','text/css')
        }else if(path.extname(url) === '.js'){
            res.setHeader('Content-Type','text/javascript')
        }else if(path.extname(url) === '.jpeg'){
            res.setHeader('Content-Type','image/jpeg')
        }
        urlIn = path.join(__dirname, url)
    }
    fs.readFile(urlIn,'utf-8',function (err,data) {
        if (!err){
            res.end(data)
        }
    })
})

// 调用server.listen监听某一端口
server.listen(8888,function () {
    console.log('8888端口监听中')
})