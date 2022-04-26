
// 导入express模块
const express = require('express')

// 创建express对象
const app = express()

/* 
    当一个请求到达服务器后可以调用多个中间件对请求进行预处理
        中间件必须传递一个next参数，不传递就是普通的拦截器

        next函数是多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由
*/

const mv = function (req, res, next) {
    console.log('这是一个最简单的中间件函数')
    // 中间件业务处理完毕后不许调用naxt()函数
    // 表示流转关系交给下一个中间件或路由使用
    next()
}



// 开启监听
app.listen(8888,function () {
    console.log('8888端口监听中')
})