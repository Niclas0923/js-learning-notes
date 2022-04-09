
// 对象创建

// 用new调用的函数是构造函数
var sss = new Object();
// var sss = {};

// console.log(typeof sss)      // object
 
// 添加属性
sss.maoxian = 12;
// console.log(sss)             // { maoxian: 12 }

// 覆盖属性
sss.maoxian = "jianshou";
// console.log(sss)             // { maoxian: 'jianshou' }

// 删除属性
delete sss.maoxian;
// console.log(sss)             // {}

// 特殊属性名
sss["983467"] = 12;
// console.log(sss)             // { '983467': 12 }

// 变量通过变量名查找
var n = "983467";
// console.log(sss[n])          // 12



// 对象是指针式复制
delete sss[n];
sss.mm = 12;
var mm1 = new Object();
mm1 = sss
// console.log(sss)         // { mm: 12 }
// console.log(mm1)         // { mm: 12 }
sss.mm = 14
// console.log(sss)         // { mm: 14 }
// console.log(mm1)         // { mm: 14 }
mm1 = null;                 //断开连接指向null了
// console.log(sss)         // { mm: 14 }
// console.log(mm1)         // null

// 函数也可以作为对象的数据
sss ={
    name:"ooooh",
    sayname:function(){
        console.log(sss.name) 
    }
}
// sss.sayname()            // ooooh



// 输出对象中的每个属性
// for(var i in sss){
//     console.log(i)
//     console.log(sss[i])
// }
// for(var i in Document){
//     console.log(i)
//     console.log(Document[i])



// 输出对象中，相当于输出对象.toString()
// console.log(sss == sss.toString())       // true



// 检查对象中是否有某一属性的函数

// in运算符
// console.log(n in sss)        // true

// 函数
// console.log(sss.hasOwnProperty("name"));             // true
// 但是不能查找是否在原型对象中。hasOwnProperty就属于在原型对象的原型中

function Sssoo(){
}
Sssoo.prototype.aa = 12;

// 只能这样查找

// console.log(Sssoo.prototype.hasOwnProperty("aa"));          // true
// console.log("aa" in Sssoo.prototype);                       // true