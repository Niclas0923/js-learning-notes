
const path = require('path')

/*
    path.join()
        用于将多个路径拼接成一个完整的路径字符串
        返回值是拼接好的字符串
* */

const str = path.join('/a','/b/c','../','./d','e')
console.log(str)        // /a/b/d/e

/*
    path.basename()
        用于从字符串中将文件名解析出来
* */

const str2 = path.join(__dirname,'./css.css')
console.log(str2)
// /Users/yanhui/Documents/code/Front-end/js-learning-notes/10_Node.js/08/css.css

console.log(path.basename(str2),path.basename(str2,'.css'))
// css.css css

/*
    path.extname()
        获取文件的扩展名
* */

console.log(path.extname(str2))     //.css
