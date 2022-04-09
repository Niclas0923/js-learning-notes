
var ss = "maoxian";

// 在底层，字符串以字符数组的形式保存
console.log(ss.length);                 // 7


// 返回指定位置的字母
console.log(ss.charAt(2));              // o
console.log(ss[2]);                     // o
// 返回字母编码
console.log(ss.charCodeAt(2));          // 111


// 返回编码对应的字符
console.log(String.fromCharCode(112));  // p


// 检索字符串
console.log(ss.indexOf("x"));           // 3
// 可以指定查找开始位置
console.log(ss.indexOf("a",3));         // 5
// 搜索,返回位置
console.log(ss.search("a"));            // 1


// 检索字符串(从最后开始)
console.log(ss.lastIndexOf("a"));       // 5


// 截取字符串
console.log(ss.slice(1,5));             // aoxi
console.log(ss.substring(1,5));         // aoxi
// 第二个不支持负值且第二个值小于第一个会交换


// 切割为数组
console.log(ss.split("a"));             // [ 'm', 'oxi', 'n' ]

// 替换
// 只替换第一个
console.log(ss.replace("a","@__@"))

// 去除全部空格（要正则表达式）
var mmm = "            eee            "
console.log(mmm.replace(/\s/g,""))          // eee