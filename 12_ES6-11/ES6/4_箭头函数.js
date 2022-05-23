/* 
    箭头函数是一种简写化的函数
    其中的this不是自己，而是自己的上一级，可以用于保留this
        这里的上一级是声明时所在的上一级，不一定是调用
        并且不能通过call等函数改变
    它不能作为构造函数来实例化对象
    不能使用arguments来保存实参
*/
const ss = ()=>{
    console.log(this);
}
ss()
const ff = {

}
ss.call(ff)

// 简写
/* 
    1
        当箭头函数的实参有且只有一个时
        可以省略小括号
*/
let add = n =>{
    return n + n
}
/* 
    2
        当代码体只有一条的时
        可以省略花括号
        并且return也要省略
*/
let add2 = n => n + n

console.log(add2(12))