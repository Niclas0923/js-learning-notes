/*
    验证路径是否存在
        fs.existsSync(path)
    获取文件信息
        fs.statSync(path)
    删除文件
        fs.unlink(path,callback())
* */

/*
    列出文件
        fs.readdir(path,callback)
    截断文件
        fs.truncate(path.callback)
    建立目录
        fs.mkdir(path,callback)
    监视文件修改
        fs.watchFile(filename,listener)
            filename 要监视的文件名称
            listener 回调函数
* */