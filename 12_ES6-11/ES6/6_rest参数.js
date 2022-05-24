
/* 
    es6中引入rest参数来来代替argyuments
*/

function data(){
    console.log(arguments);
}

data("11","22")         // [Arguments] { '0': '11', '1': '22' }


// rest参数
function data2(...ss){
    console.log(ss);
    // 由于返回的是数组，所以可以使用数组的一系列方法
    // 并且rest参数必须放在所有参数的最后
}

data2("11","22")        // [ '11', '22' ]