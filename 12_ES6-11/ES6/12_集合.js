
/* 
    set
        集合，类似于数组，但是成员的值都是唯一的
        可以使用扩展运算符和for of 遍历

        size    返回元素个数
        add     添加一个元素
        delete  删除元素，返回boolean值
        has     检测集合中是否包含某个元素，返回boolean值
*/

let s = new Set()

console.log(s,typeof s)

// 里面可以接收一个可叠戴数据，一般是数组
let s2 = new Set(['大事','小事','小事'])

console.log(s2,typeof s2)       // { '大事', '小事' } object 会自动去重

// 元素个数
console.log(s2.size)            // 2

// 添加
s2.add("好事")
console.log(s2)                 // Set(3) { '大事', '小事', '好事' }

// 删除
s2.delete("小事")
console.log(s2)                 // Set(2) { '大事', '好事' }

// 是否存在
console.log(s2.has('好事'))     // true

// 清空
/* s2.clear()
console.log(s2)                 // Set(0) {} */

// 遍历
for(let i of s2){
    console.log(i)
}



/* 
    应用
*/
let arr = [1,2,3,4,5,4,3,2,1]

// 数组去重
let result = [...new Set(arr)]
console.log(result)

// 交集
let arr2 = [4,5,6,7]
// 先去重,再筛选是否在2中同时含有，如果有则返回true
result = [...new Set(arr)].filter( item => new Set(arr2).has(item) )

console.log(result)

// 并集
result = [... new Set([...arr,...arr2])]
console.log(result)

// 差集
// 1有2没有
let diff = [...new Set(arr)].filter( item => !(new Set(arr2).has(item)) )