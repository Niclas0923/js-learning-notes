/*
    Buffer(缓冲区)
        类似数组
        用来存储二进制文件
* */

let str = "hello zhr"

// Buffer不用引入，直接使用就行
let buf = Buffer.from(str)

console.log(buf)            // <Buffer 68 65 6c 6c 6f 20 7a 68 72>
console.log(buf.length)     // 9

/*
    存储的是二进制数据，二进制转化为16进制输出
* */

console.log(buf.length)     // 获取占用内存字节大小
console.log(str.length)     // 获取字符串长度

let str2 = '张'
let buf2 = Buffer.from(str2)

console.log(buf2.length)    // 3

//  创建一个10个字节的buffer
let buf3 = Buffer.alloc(10)
buf3[0] = 88 ; buf3[2] = 0xff
console.log(buf3)       // <Buffer 58 00 ff 00 00 00 00 00 00 00>

/*
    buffer是一个底层命令
    创建时直接分配内存区块，之后长度就不能改变了
    所以你标签超过了，也会直接修改，不会报错，但是会覆盖掉一些别的数据
*/


/*
    如果给一个超过255的数字，会转换为二进制并去除后8位之外的数字之后写入
    300     100101100
    2c       00101100
* */
buf3[4] = 300
console.log(buf3)       // <Buffer 58 00 ff 00 2c 00 00 00 00 00>

// 在控制台输出的一定是十进制
console.log(buf3[4])    // 44   300 -256

// 转化为其他进制
console.log(buf3[4].toString(16),buf3[4].toString(2))
// 2c 101100


/*
    allocUnsafe
    有可能产生有其他数据的buffer，所以说是Unsafe
    但是性能比直接要好
* */
console.log(Buffer.allocUnsafe(10))

// 转化为字符串
console.log(buf2.toString())        // 张
