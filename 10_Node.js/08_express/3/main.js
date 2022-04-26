
// 导入express模块
const express = require('express')
const res = require('express/lib/response')

// 创建express对象
const app = express()

// 最简单的方法
app.get('/' , (req , res)=>{
   res.send('get')
})
app.post('/' , (req , res)=>{
    res.send('post')
})



// 模块化处理
/* 
    创建路由模块对应的js文件
    调动express.Router()来创建路由对象
    挂载具体的路由
    用module.exports()向外共享路由对象
    使用app.use来注册路由模块
*/

const md1 = require('./md1')

// 使用app.use来注册路由模块(用于注册全局中间件)
app.use(md1)

// 需要添加前缀可以在use里添加
app.use('/lll',md1)

// 开启监听
app.listen(8888,function () {
    console.log('8888端口监听中')
})