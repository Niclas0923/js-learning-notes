var a = 1;

// && 表示 and
// || 表示 or

if (a>10 &&typeof(a)=="number") {
    console.log("是数字，并且大于10")
} else {
    console.log("不是数字或是数字但小于10")
}


if (a>10 || a<0) {
    console.log("大于10或小于0")
} else {
    console.log("0到10中间")
}

// 三元运算符
// 判断式?语句1:语句2;
// true执行语句1，false执行语句2
// 例:
var a = 10,b = 12;
a>b?console.log("a大"):console.log("b大");

// 获取a与b的最大值
var max = a > b ? a : b;
console.log(max)


// if 语句
if (a>b) {
    c = a
    
} else if(a<b){
    c = b

}else {
    c = a
}
console.log(c)

// switch 语句
var i = 1;
switch (i) {
    case i = 1:
        console.log("i = 1")
        break;
    case i = 2:
        console.log("i = 2")
        break;
    default:
        console.log("i != 1 && i != 2 ")
        break;
}

// while 语句
while (i <= 5) {                // 1 2 3 4 5     判断后运行
    console.log(i)
    i+=1
}

// for 循环
for (let i = 0; i < 5; i++) {       
    console.log(i)                  // 0 1 2 3 4
}

// 打断循环和持续循环   break continue
for (let i = 0; i < 5; i++) {       
    console.log(i)                  // 0 1 2
    if (i == 2){
        break;
    }
}
// 终止当前循环，进入下一循环
for (let i = 0; i < 5; i++) {
    if (i == 2){
        continue;
    }
    console.log(i)              // 0 1 3 4
}