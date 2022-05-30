
/* 
    迭代是用于遍历的操作
    只要数据结构部署了iterator接口就可以进行遍历

    新的遍历命令
        for  of

*/

const ss = ['11','22','33']

let iterator = ss[Symbol.iterator]()
// 调用next方法会自动指向数组的第一个成员
// console.log(iterator.next())


for (let i of ss){      // for in 输出的是角标，for of 输出的是值
    // 之后再调用会向后继续指
    console.log(iterator.next())
    console.log(i);
}

// 循环完再调用就会发现done的值是true，表示遍历完成
console.log(iterator.next())



/* 
    自定义遍历数据
*/

const ssss = {
    sss:'sss',
    ooo:[
        1,
        2,
        3,
        4
    ],
    // 用for of 来遍历ssss，并按顺序输出 ooo
    [Symbol.iterator](){
        let index = 0
        return {
            next : ()=>{
                if ( index < this.ooo.length){
                    const ss1 = {
                        value : this.ooo[index] ,
                        done : false
                    }
                    index++
                    return ss1
                }else{
                    return {
                        value : undefined ,
                        done : true
                    }
                }
                
            }
            
        }
    }
}

for(let i of ssss){
    console.log(i)
}