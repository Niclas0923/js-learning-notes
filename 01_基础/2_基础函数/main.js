
var a = 12,
    b = "14";

// 变量类型输出
console.log(typeof (a)) //number
console.log(typeof (b)) //string
console.log(typeof (a == 12)) //boolean


// isNaN来判断是否为数字，是返回false
console.log(isNaN(a)) //false


// 变量类型强制转换
// 强行转字符串
// a = toString(a)
a = a.toString()                // 这两种方法都行
console.log(typeof (a)) //string
a = a + ""                                  // 隐式转换
console.log(typeof (a)) //string
// 强行转数字
a = Number("12");
console.log(typeof (a)) //number
// 强行转浮点数
a = parseFloat("11.25")
console.log(typeof (a)) //number
// 获取指定数据的整数部分
a = 11.29
a = parseInt(a)
console.log(a)          //11

// 读取数值，要求返回
// a = prompt("里面可以给出提示，类似python的input")        // 直接运行会报错，必须浏览器运行
// 再打印输出
// document.write(a)                    // 直接运行会报错，必须浏览器运行