/* 
    一种新的数据类型，表示独一无二的
        类似字符串的数据类型

        特点
            值是唯一的，用于解决命名冲突的问题
            它的值不能与其他类型的值参与运算，比较也不行
            通过它定义的对象属性不能使用 for in循环遍历，但是可以使用 Reflect.ownKeys 获取键名
*/

// 创建

let s = Symbol()
console.log(s,typeof s);        // Symbol() symbol      唯一性不可见

let s2 = Symbol("s2")
console.log(s2,typeof s2);      // Symbol(s2) symbol    传入值只是一个标志
let s3 = Symbol("s2")
console.log(s2 === s3)          // false

let s4 = Symbol.for('s4')
console.log(s4,typeof s4);      // Symbol(s4) symbol    这里的传入值可以用于找到一个定值
let s5 = Symbol.for('s4')
console.log(s4 === s5)          // true


// 使用
/* 
    用于向对象内安全的添加方法
*/

const sss = {

}

const meathod = {
    up : Symbol(),
    down : Symbol()
}

// 第一种方式
sss[meathod.up] = function(){
    console.log("up")
}
sss[meathod.down] = function(){
    console.log("down")
}
console.log(sss)        // 里面会有两个symbol类型命名的函数
// 调用
sss[meathod.up]()       // up


// 第二种方式
const sss2 = {
    [Symbol.for('ll')]:function(){
        console.log("ll")
    }
}
// 调用
sss2[Symbol.for('ll')]()


/* 
    Symbol的内置值
    https://www.bilibili.com/video/BV1uK411H7on?p=17&spm_id_from=pageDriver
    需要时来看吧，感觉用不太到
*/