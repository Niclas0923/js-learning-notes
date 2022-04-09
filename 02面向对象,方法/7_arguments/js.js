
// 与this同时传入对象的一个参数arguments
// 它是一个类数组对象

function fun() {
    console.log(arguments);
}
function fun1(a,b) {
    console.log(arguments);
    console.log(arguments.length);
}

// fun();                           // [Arguments] {}
// fun1(10,11);                     // [Arguments] { '0': 10, '1': 11 }    2
// 即使不定义实参，也可以直接在函数中调用

function fun2() {
    console.log(arguments[0]);
}
// fun2(12)                         // 12



// 其中有一个属性是cllee
function fun3() {
    console.log(arguments.callee);
    console.log(arguments.callee == fun3);
}
// fun3()                           // [Function: fun3] true