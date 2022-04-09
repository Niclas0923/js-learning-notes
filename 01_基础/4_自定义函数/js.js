function maoxian() {
    console.log("再见");
    console.log("再见");
    console.log("再见");
}
// console.log(typeof maoxian)      // function
// maoxian();

function zaijian([a,b,c]){
    console.log(a);
    console.log(b);
    console.log(c);
}
// zaijian(["xian","hidn","wi"])    // xian hidn wi

function jiahe(a,b){
    return a+b
}

console.log(jiahe(10,11))        // 21

// 立即执行函数
(function(){
    alert("我是一个匿名函数～～～")
})();

