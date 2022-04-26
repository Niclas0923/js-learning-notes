
// 导入express模块
const express = require('express')

// 创建express对象
const app = express()

// 通过send反回参数
app.get('/main.html',function (req, res) {
    res.send({name:'zhr',age:19})
})

// 获取url中传递的参数
// req.query
app.get('/',function (req, res) {
    console.log(req.query)
    res.send(req.query)
})


// 获取url中的动态参数
//  req.params
app.get('/user/:id',function (req, res) {
    console.log(req.params)
    res.send(req.params)
})




// 开启监听
app.listen(8888,function () {
    console.log('8888端口监听中')
})