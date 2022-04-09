// String()
// 把字符串类型转换为string类型

// Number()
// 把数字类型转换为Number类型

// Boolean()
// 把布尔类型转换为Boolean类型

var num = new Number(3);
console.log(num,typeof num);            // [Number: 3] object

var nnn = new String("baidu");
console.log(nnn,typeof nnn);            // [String: 'baidu'] object

var mmm = new Boolean(true);
console.log(mmm,typeof mmm);            // [Boolean: true] object

// 多个对象之间内容相同，但不能相互比较，因为是对象，比较的是内存id

// 对象转为布尔值，都是true，所以问题也很多

// 这种使用方法在开发中基本不使用，但是在js的作用机理中使用

// 比如在调用toString函数时，会先转为对象，在对对象调用函数，基本数据类型是没有函数可以调用的