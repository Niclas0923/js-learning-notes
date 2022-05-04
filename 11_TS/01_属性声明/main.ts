
// 类型声明
let a :number
let b :string = 'hello'

a = 12
// a = 'hello'
// 报错

let c :boolean=true

console.log(a, b, c);

// 函数中的定义
// 返回值的定义
function ssss(a: number):number{

    return a
}

// 定义多种加|即可
let d :number|boolean
d = 12
d = false

// 函数中选填的项目加一个问号即可
function dd(a ?:number):number{
    return a?12+a:12
}


// any,可以赋值所有,和js一样了,但是没意义了所以不用
// unknown,只是修改自己随意,但是赋值的时候就会报错,要判断

let e:unknown
e = 'hello'
e = true

// d = e    // 报错
if (typeof e === 'boolean'){
    // 这样就正常使用了
    d = e
}

// 类型断言,你知道这个是一个类型,但是ts没有识别出来,就可以直接断言
// <类型>变量       变量 as 类型

// c = e    // 即时类型一样也会报错
c = <boolean>e
c = e as boolean


// void 表示函数没有返回值
function sss() :void{
    console.log(12)
}


// never 表示没有结果,报错
function sse():never{
    throw new Error("报错")
}

// 设置对象属性
let aa : {name:string}
// 不写或者超出就会报错
aa = {name:'dd'}