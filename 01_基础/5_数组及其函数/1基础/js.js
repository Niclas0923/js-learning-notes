// 创建数组
// var ss = new Array();
var ss = []

// 基本信息
// console.log(ss);                 // []
// console.log(typeof ss);          // object
for(var i = 0;i<10;i++){
    ss[i] = i;
}
// console.log(ss);                 // [  0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// 获取数组的长度
// console.log(ss.length);          // 10
// lengeh只能获取连续数组的长度，非连续的只能获取到最大宽度，中间那些项是空着的是获取不到的

ss[11] = 12;
// console.log(ss.length);          // 12
// console.log(ss[10]);             // undefined


// 可以通过length来设置数组的长度
// 大于长度
ss.length = 15;
// console.log(ss)                  // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, <1 empty item>, 12, <3 empty items> ]
// 小于长度
ss.length = 4;
// console.log(ss);                 // [ 0, 1, 2, 3 ]     小于原长度，会删掉后面的部分


// 向数组最后添加
ss[ss.length] = 12;
// console.log(ss);                 // [ 0, 1, 2, 3, 12 ]
var m = ss.push(15);
// console.log(ss,m);               // [ 0, 1, 2, 3, 12, 15 ] 6
// 这个函数会返回数组最后的长度

// 删掉数组最后一项
m = ss.pop();
// console.log(ss,m);               // [ 0, 1, 2, 3, 12 ] 15
// 这个函数会返回删掉的项的内容

// 在开头添加新的元素
m = ss.unshift(9);
// console.log(ss,m);               // [ 9, 0, 1, 2, 3, 12 ] 6
// 这个函数会返回数组最后的长度

// 删除开头的元素
m = ss.shift();
// console.log(ss,m);               // [ 0, 1, 2, 3, 12 ] 9
// 这个函数会返回删掉的项的内容


// 遍历
// for 循环
for (i in ss){
    // console.log(i);              // 0 1 2 3 4
    // console.log(ss[i]);          // 0 1 2 3 12
}
