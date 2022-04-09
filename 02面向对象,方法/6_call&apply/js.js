
function fun() {
    console.log(this);
}

// 函数对象方法，通过函数对象来调用
// call() 和 apply()


// 调用这两个方法时函数都会运行
// fun.apply();             // Window
// fun.call();              // Window


// 调用时可以将一个对象作为第一个参数
// 对象会成为函数执行的this
var obj = {
    name:"obj",
    sayName:function(){
        console.log(this.name);
    }
}
// fun.call(obj)            // { name: 'obj', sayName: [Function: sayName] }
// fun.apply(obj)           // { name: 'obj', sayName: [Function: sayName] }

// obj.sayName()            // obj

function fun2(a,b) {
    console.log(a,b);
}


// call()函数对象后可以跟着函数输入项
// fun2.call(obj,2,3)       // 2 3
// fun2.apply(obj,2,3)      // 直接报错
// apply()函数需要把实参放在数组内
// fun2.apply(obj,[2,3])    // 2 3


