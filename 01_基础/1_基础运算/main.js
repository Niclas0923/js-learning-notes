//声明变量
var yanse;
// 声明并赋值
var maoxian = 12;
// 打印输出
console.log(maoxian);
// document.write('12');
// console.log("今天天气不错")    // 字符串输出

// 多项声明
var a = 12,b = "14";

// 未知量输出
// console.log(maidan)
// ReferenceError: maidan is not defined

//表示最大值，最小值
a = Number.MAX_VALUE
console.log(a)          // 1.7976931348623157e+308
a = Number.MIN_VALUE
console.log(a)          // 5e-324



// 运算
a = 2;
b = a + 2;          // 4
console.log(b);

// 其中浮点运算运算有问题
console.log(0.1+0.2)    // 0.30000000000000004

b = a * 4;
console.log(b);     // 8 

b = a % 2;          // 求余数
console.log(b);     // 0

// 先操作再加
b = a++;
console.log(a,b);   // 3 2  a加了1，b等于之前的a
// 先加再操作
b = ++a;
console.log(a,b);   // 4 4  a加了1，b等于之前的a

// var sss = prompt("请输入一个数据：");         //会强制调取浏览器，很难受
// console.log(isNaN(sss));

// 字符串中的单双引号问题
var sstr = "ta说:\"赶紧润!\"";

// \n换行符   \t制表符

console.log(sstr)

// 其他进制的数
// 16 0x
a = 0x10;
console.log(a);     // 16
// 8 0
a = 013;
console.log(a);     // 11 
// 2 0b
a = 0b01011;
console.log(a);     // 11
     
a = "070";
// a = parseInt(a);
// console.log(a);     //70  56    不同浏览器处理方式不同
// 用以下方法
console.log(parseInt(a,10))     // 70
console.log(parseInt(a,8))      // 56

// 表示每个变量单独占用空间，并非指针
var a = 12,b = a;
a++
console.log("a ="+a)            // a =13
console.log("b ="+b)            // b =12

