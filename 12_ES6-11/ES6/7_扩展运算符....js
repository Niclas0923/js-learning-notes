/* 
    ...
    可以将数组转换成用逗号隔开的参数序列
*/

const ss = [123,123,234]

function chunwan() {
    console.log(arguments);
}

chunwan(...ss)      // { '0': 123, '1': 123, '2': 234 }     一个参数变三个实参


/* 
    应用
*/

// 数组合并

const m = [111,222]

console.log(ss.concat(m))       // es5

console.log([...ss,...m])       // es6

// 数组克隆

const m1 = [...m]           // 此时是生成一个新的地址，存储m中的内容，而不是地址复制，但是还是浅拷贝，里面的引用还是地址

// 将伪数组转为真正的数组 

// let divs = document.getSelectorAll("div");        // 假设有啊，这里没有通过html引用，所以没用

// divs = [...divs]
