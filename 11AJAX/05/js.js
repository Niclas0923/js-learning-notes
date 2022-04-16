//  引入express

const { response } = require('express');
const express = require('express');

// 创建应用对象

const app = express();

// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
// 处理GET命令
app.get('/js',(request,response)=>{
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin",'*')
    // 设置响应体
    response.send('hello')
})
// 处理POST命令
app.post('/js',(request,response)=>{
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin",'*')
    // 设置响应体
    response.send('hello post')
})

// 监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已启动,8000端口监听ing")
})