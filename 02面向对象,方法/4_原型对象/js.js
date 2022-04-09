// 原型对象
// 创建函数的同时解析器会向函数中添加一个属性prototype

// 如果函数作为普通函数调用，这个属性没有任何作用

function Person(){

}
// console.log(Person.prototype);           // {} 

// 作为构造函数调用时

var aa = new Person()

// console.log(aa.prototype);               // undefined
// console.log(aa.__proto__);               // {}
// console.log(aa.__proto__ == Person.prototype);      // true

// 原型对象相当于一个公共空间，所有人都可以访问这里
// 直接在这个空间里构造函数，所有子项都可以访问

function Person(name,age,gender){

    this.name = name,
    this.age = age,
    this.gender = gender
}

Person.prototype.sayName= function(){
    console.log(this.name);
}

var aaa = new Person("haiduan",12,'男'); 

aaa.sayName();