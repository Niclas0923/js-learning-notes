var a = 11
function sss(){
    console.log("sss")
}
exports.a = a
exports.sss = sss

console.log(global.a)       // undefined

// b = 10      //这样就是全局变量了

// console.log(global.b)       // 10

console.log(arguments)      // 存在
// 可以证明是在函数内运行的

console.log(arguments.callee + '')   // function (exports, require, module, __filename, __dirname) {...}

/*
    函数运行时传入了5个实参
    exports
        暴露属性
    require
        函数，用来引入外部模块
    module
        当前模块本身,expotrs是module的属性
    __filename
        当前文件路径
    __dirname
        当前文件所在位置
* */
console.log(exports === module.exports)     //true
console.log(__filename)         // /Users/yanhui/Documents/code/Front-end/js-learning-notes/10_Node.js/01/js/01.js
console.log(__dirname)          ///Users/yanhui/Documents/code/Front-end/js-learning-notes/10_Node.js/01/js


