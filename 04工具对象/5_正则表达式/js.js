// 创建正则表达式

// 后面的是正则表达式和匹配模式
// i 忽略大小写 g 全匹配
var oo = new RegExp(".+?","g");


var mm = "aa"

// 测试方法text()

console.log(oo.test(mm));               // true



// split()可以传递一个正则表达式作为参数
mm = '12nn49gjd93jf023'
oo = new RegExp("[a-z]")
console.log(mm.split(oo));              // [  '12', '', '49', '', '',  '93', '', '023'  ]
console.log(mm.split(/[^a-z]/));        // [ '', '', 'nn', '', 'gjd', '', 'jf', '', '', '']

// search()也可以用正则表达式作为参数
console.log(mm.search(/[\d]\w{2}[\d]{3}/));           // 10

// match()也可以。。。
// 返回一个数组
console.log(mm.match(/[\d](\w{2})[\d]{3}/));            //['3jf023','jf',index: 10,input: '12nn49gjd93jf023',groups: undefined]
console.log(mm.match(/[\d](\w{2})[\d]/g));              // [ '2nn4', '3jf0' ]


// 替换
console.log(mm.replace(/n/g,"@__@"))                // 12@__@@__@49gjd93jf023
// 去掉全部空格
var mmm = "            eee            "
console.log(mmm.replace(/\s/g,""))