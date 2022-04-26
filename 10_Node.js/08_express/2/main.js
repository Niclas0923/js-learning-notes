
// 导入express模块
const express = require('express')

// 创建express对象
const app = express()

/*
    托管静态资源
        express.static()
        可以静态开放public目录下的图片，css文件，js文件

        目录名不会出现在静态地址中
* */
app.use(express.static('./test'))


// 需要多个静态资源分享可以多次调用这个函数

// 如果我需要访问路径之前必须加前缀
app.use('/test',express.static('./test'))

// 开启监听
app.listen(8888,function () {
    console.log('8888端口监听中')
})