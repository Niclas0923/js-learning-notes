//  引入express

const { response } = require('express');
const express = require('express');

// 创建应用对象

const app = express();

// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装

app.get('/json-js',(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    let ss = {
        name:"zhr",
        age:19
    }
    let sss = JSON.stringify(ss)
    // 设置响应体
    response.send(sss)
})

app.get('/ie',(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置响应体
    response.send('Hello IEd')
})

// 延时相应
app.get('/delay',(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('延时相应')
    }, 3000);
})


// 监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已启动,8000端口监听ing")
})

// 通过nodemon运行js文件可以修改后直接自己重启服务器