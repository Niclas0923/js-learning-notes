
/* 
    es6中允许在打括号内直接写入变量和函数，作为对象的属性和方法
*/

let a = "ss"
let change = function(){
    console.log("1111");
}

const mmm = {
    a,
    change,
    // 并且函数的书写可以简写
    callback(){
        console.log("back")
    }
}