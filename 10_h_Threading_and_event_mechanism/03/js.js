var onmessage = function(event){
    console.log("分线程启动")

    var sss = event.data
    function feibo(n) {
        return n<=2 ? 1 :feibo(n-1) + feibo(n -2)
    }

    var ss = feibo(sss)
    postMessage(ss)
    // alert(ss)    // 不能直接调用，alert是Window的方法，这里没有
}