/* 
    生成器就是一个特殊的函数
        用于进行异步编程
*/

function * ss(){
    console.log(1111);
    // 通过yield可以进行分割
    yield '第一部分'
    console.log(2222)
    yield '第二部分'
    console.log(3333)
    yield '第三部分'
    console.log(4444)
}

// 执行
let sss = ss()

sss.next()      // 1111
// 每次执行都是执行下一个区间的语句
sss.next()      // 2222
sss.next()      // 3333
sss.next()      // 4444

for (let i of ss()){
    // 这样会把间隔符的内容也输出出来
    console.log(1)
    console.log(i)
    // 很明显看出来，第一次执行不输出间隔符，之后的输出是连着间隔符一起输出的
}

let sss2 = ss()

console.log(sss2.next())    //{ value: '第一部分', done: false }
console.log(sss2.next())
console.log(sss2.next())
// 原理与迭代器是类似的

/*
    生成器的函数参数
*/

function * ssso(arg){
    
    console.log(arg)
    const one = yield 111
    console.log(one)
    yield 222
}

const sss3 = ssso('A')
console.log(sss3.next())    // 运行第一部分 A 之后输出next { value: 111, done: false }
/* 
    next方法可以传入实参
    穿入的值作为上一个yield语句的返回值
*/
console.log(sss3.next('B'))     // B


/* 
    应用
*/

/* 
    异步编程
        1s后控制台输出111   2s后输出222     3s后输出333
*/

// 原生
// setTimeout(()=>{
//     console.log(111)
//     setTimeout(()=>{
//         console.log(222)
//         setTimeout(()=>{
//             console.log(333)
//         },3000)
//     },2000)
// },1000)
// 阅读和调试都不方便，这被称为回调地狱


// 生成器函数
function one() {
    setTimeout(() => {
        console.log(111)
        iterator.next()
    }, 1000);
}
function two() {
    setTimeout(() => {
        console.log(222)
        iterator.next()
    }, 2000);
}
function three() {
    setTimeout(() => {
        console.log(333)
        iterator.next()
    }, 3000);
}

function * gen(){
    yield one()
    yield two()
    yield three()
}

// 调用
let iterator = gen()
iterator.next()
// 可以实现但是感觉不太好


