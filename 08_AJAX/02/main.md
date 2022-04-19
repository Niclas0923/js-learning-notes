# HTTP  
    超文本传输协议

## 请求报文

### 格式一：
        行      GET     /s?ie=utf8  HTTP/1.1
        头      Host: baidu.com
                Cookie: ~~~
                User-Agent: chrome 100
        空行
        体      (git的体为空)

### 格式二：
        行      POST     /s?ie=utf8  HTTP/1.1
        头      Host: baidu.com
                Cookie: ~~~
                Content-type: application/x-www-form-urlencoded
                User-Agent: chrome 100
        空行
        体      username=admin&password=admin


## 相应报文

### 格式：
        行      HTTP/1.1  200 ok(相应状态码和字符串404~~)
        头      Content-Type: text/html;charset=utf-8
                Content-;ength: 2048
                Content-encoding: gzip
        空行
        体      (HTML文本)