/* 
    Promise
        是es6引入的异步编程的新解决方案
        语法上是一个构造函数
        用于封装一步操作并可以获取其成功或失败结果
 */

        /* 
            这个对象有三个状态
                初始化      不调用就是初始化状态
                成功        调用resolve表示成功
                失败        调用reject表示失败

                then方法，成功时调用第一个函数，失败调用第二个函数
        */
const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let data = "数据"
        resolve(data)

        // reject('数据读取失败')
    }, 1000);
})

p.then((value)=>{
    // 成功
    console.log(value)
},(reason)=>{
    // 失败
    console.error(reason)
})


/* 
    文件读取应用
*/

const fs = require('fs')
const path = require('path')

const p1 = new Promise((a,b)=>{
    // 路径问题通过path解决
    const ss = path.join(__dirname,'./11_promise-text-1.md')
    fs.readFile(ss,(e,d)=>{
        // 失败返回失败
        if(e) b('失败')
        // 成功返回数据
        a(d)
    })
})
p1.then((value)=>{
    console.log(value.toString())
},(reason)=>{
    console.log(reason)
})





/* 
    Promise.prototype.then 方法
*/

const ppp = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("用户数据")
    }, 1000);
})

/* 
    调用的这个then方法返回结果是一个promise对象
        它的状态是由then的执行结果来决定的
*/
// const sss = ppp.then( value =>{
//     console.log(value)
    // 1 若返回值为一个非promise对象的状态，则其状态为成功，返回值就是对象的成功值
    // return value

    // 2 若返回值是promise对象，则对象的状态就是它的状态
    /* return new Promise((resolve,reject)=>{
        
    }) */

    // 3 如果抛出错误则也是失败的情况
    // throw new Error("出错了")
// },reason=>{
//     console.error(reason)
// })

// console.log(sss);




/* 
    then 方法的链式调用
*/

p.then((value)=>{
    
},(reason)=>{
    
})
// 这里对返回结果再进行调用
.then((value)=>{
    
})



/* 
    实例，链式调用来异步读取两个文件，拼接后输出
*/
// const fs = require("fs")
// const path  = require("path")

const duqu = new Promise((resolve,reject)=>{
    // 读取第一个文件，并返回数据到then中
    fs.readFile(path.join(__dirname,"./11_promise-text-1.md"),(err,data)=>{
        resolve(data)
    })
})

duqu.then(value=>{
    // then中返回一个promise对象
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,"./11_promise-text-2.md"),(err,data)=>{
            resolve([value,data])
        })
    })
}).then(value=>{
    // 对数组进行拼接
    console.log(value.join('\n').toString())
})




/* 
    catch方法
        用于指定promise失败时的回调
*/

const sssool = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('错误')
    },1000)
})

sssool.catch((reason)=>{
    console.log(reason)
})