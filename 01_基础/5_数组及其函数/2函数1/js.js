
var ss = [ 0, 1, 2, 3, 12 ];

//遍历
// forEach 函数
// 需要一个函数作为参数
// IE 浏览器不兼容
ss.forEach(function(i){
    // console.log(i);              // 0 1 2 3 12
});
// 每次循环，浏览器会向函数传入遍历到的内容和它所在的序号(每次最后还会传入整个数组(???????这么耗资源的???))



// 返回区域内的数组
// 不改变原数组
// console.log(ss.slice(2,3));      // [ 2 ]
// console.log(ss.slice(0,3));      // [ 0, 1, 2 ]
// console.log(ss.slice(3));        // [ 3, 12 ]
// console.log(ss.slice(1,-1));     // [ 1, 2, 3 ]



// 截取数组中的一部分,可以同时添加到截取部分数组
// 改变原数组
// var i = ss.splice(0,2,110)
// 第一个数是起始位置，第二个数是截取个数
// console.log(ss);                 // [ 110, 2, 3, 12 ]
// console.log(i);                  // [ 0, 1 ]



// 连接多个数组
var b = [0]
// 不会对原数组产生影响
// console.log(ss.concat(b,10));       // [ 0, 1, 2, 3, 12, 0, 10 ]



// 数组转换为字符串
// 括号内可以选择连接两项之间的符号，默认,
// console.log(ss.join());              // 0,1,2,3,12
// console.log(ss.join(" "));           // 0 1 2 3 12



// 反转数组
// 会直接修改原数组
// console.log(ss.reverse());           // [ 12, 3, 2, 1, 0 ]



// 对原数组进行排序
// 会直接修改原数组
// console.log(ss.sort());              // [ 0, 1, 12, 2, 3 ]   并非按大小排序，按编码排序
// 也可以直接用函数
var ll = ss.sort(function(a,b){
    // if (a>b){
    //     return 1        // 大于0交换
    // }else{
    //     return -1       // 小于0不交换
    // }
    // 下面这个同样的效果
    return a-b
})
// console.log(ll);                     // [ 0, 1, 2, 3, 12 ]      



