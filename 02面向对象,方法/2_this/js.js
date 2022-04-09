
// 解析器调用函数会隐含一个参数this
// 以函数的方式调用，this = window
// 以方法的形式调用 this = 方法名


function fun(){
    // console.log(this);
    console.log(this.name)

}

// fun();                       // Window

var obj ={
    name:"ll",
    sss:fun
}
// console.log(obj.sss);        //  输出的内容就是fun函数

obj.sss()           // ll


