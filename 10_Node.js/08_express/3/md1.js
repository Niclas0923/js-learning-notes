
const express = require('express')

// 调动express.Router()来创建路由对象
var router = express.Router()
    
// 挂载具体的路由
router.get('/ss/',function(req,res){
    res.send('dd')
})

// 用module.exports()向外共享路由对象
module.exports = router