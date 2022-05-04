
// 创建一个类
class obj{
    a:number
    b:string
    bb:number
    // 静态属性，放在对象上的属性
    static ss = 12
    // 只读属性
    readonly m = 111
    // 这个函数会在制造子对象时执行，每次都会执行
    // 可以传参来赋值
    constructor(bb:number) {
        this.a = 12
        this.b = 'hhh'
        this.bb = bb
    }
    // 后面可以配置方法，任何子对象可以直接执行
    logc(){
        console.log("c")
        // 这里的this就是这个实例
        console.log(this)
    }
}

const ss = new obj(12)

// 静态属性
console.log(obj.ss);

// 访问属性就直接.即可
console.log(ss.a);

// 方法调用
ss.logc()


/*
*   继承
*       使用一个对象来继承之前的属性
*       如果父对象有这个方法则覆盖
*       扩展方法就直接写入，扩展元素也是，但是constructor重写要再用supper引入父对象的constructor
* */

class cat extends obj{
    constructor() {
        super(12);

    }
    mmmm(){
        // 这样可以直接调用父类的方法和获取父类中的元素(虽然this里面都有。。。)
        super.logc()
    }
}
const m = new cat()
console.log(m.b);

/*
    抽象类
        抽象类就是一种特殊的类，不能产生实例，但是可以被继承
        在class前加上abstract来制作

* */

abstract class so{
    // 定义一个抽象方法
    // 这样子类中必须有这种方法才行，元素同理
    abstract sss():void
}