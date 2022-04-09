// 重复对象函数
function body(name,age,gender) {
    var sss = {
        name:name,
        age:age,
        gender:gender,
        sayName:function(){
            console.log(this.name)
        }
    }
    return sss
}

sunwuk = body('孙悟空',18,'男')
// console.log(sunwuk)
// 出现问题是不能确定属性
// 添加属性重复对象函数

//构造函数
function Person(){
}
var aaa = new Person();
// console.log(aaa)                    //Person {}
//

// 流程1创建一个对象    2将新建的对象设置为函数中的this  3执行函数  4  将对象作为返回值返回
function sayName(){
    console.log(this.name)
}


function Person(name,age,gender){

    this.name = name,
    this.age = age,
    this.gender = gender,
    this.sayName = sayName
}
var aaa = new Person("haiduan",12,'男');            // 与普通函数的区别就是一个 new
// console.log(aaa)                         // Person{...}
// aaa.sayName()                            // haiduan

// 但是会出现污染作用域的情况，所以采用原型对象