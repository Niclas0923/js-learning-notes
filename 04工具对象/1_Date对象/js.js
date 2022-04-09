// Date对象表示时间

var d = new Date();

// console.log(typeof d);               // object
// console.log(d);
// 2022-03-25T02:28:40.630Z(终端运行)
// Fri Mar 25 2022 10:29:59 GMT+0800 (中国标准时间)(浏览器运行)



// 一定是：月/日/年 时:分:秒
var d2 = new Date("12/3/2009");
// console.log(d2);
// 2009-12-02T16:00:00.000Z
// Thu Dec 03 2009 00:00:00 GMT+0800 (中国标准时间)


// 获取日期
var ss = d2.getDate();
// console.log(ss);             // 3
// 获取星期几
ss = d2.getDay();
// console.log(ss);             // 4
// 返回0-6，0表示周天
// 获取月份
ss = d2.getMonth();
// console.log(ss);             // 11
// 0表示一月
// 获取年份
ss = d2.getFullYear();
// console.log(ss);             // 2009
// ...还有一堆

// 获取时间戳
ss = d2.getTime();
// console.log(ss);             // 1259769600000

// 获取当前时间戳
var m1 = Date.now();

for (var i=0;i<100;i++){
    console.log(i);
}
var m2 = Date.now();

console.log(m2 - m1)         // 3    3毫秒