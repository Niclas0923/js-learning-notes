
function sss(a,b,c = 12){
    return a + b + c
}
console.log(sss(1,2))       // 15

// 与解构赋值结合使用
function ssss({name,age,sex=0}){
    console.log(name)
    console.log(age)
    console.log(sex)
}  
ssss({
    name:12
    ,age:12
})