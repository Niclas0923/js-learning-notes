var ss = require("./md")

console.log(ss.name1)       //孙悟空

console.log(ss.name2)       //undefined

/*
    为什么用module.exports可以传出来，但是exports不行?
* */

var obj = {}
obj.a = {}
var sss = obj.a
sss.age = 10

sss = {}

console.log(obj.a.age)      // 10

console.log(sss.age)        //undefined

/*
    exports直接更改的话就是更改了指向，就不是指向原来的module.exports了
    而module.exports是改变了内部的值
* */

/*
    所以说
        module.exports可以直接赋值一个对象
        exports只能通过"."的方式添加属性
* */