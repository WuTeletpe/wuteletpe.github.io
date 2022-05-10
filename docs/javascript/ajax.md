## AJAX
## ajax 的跨域问题：
即 file 协议下的 js 是不能访问 localhost 或者其他网站的，只能访问 file 协议下的，也就是自己网站上的
```javascript
// 创建 AJAX 对象
var r = new XMLHttpRequest()
// 设置请求方法和请求地址
r.open('GET', '/login', true)
// 注册响应函数
r.onreadystatechange = function() {
    console.log('state change', r)
}
// 发送请求
r.send()
```


```javascript
// 创建 AJAX 对象
var r = new XMLHttpRequest()
// 设置请求方法和请求地址
r.open('POST', '/login', true)
// 设置发送的数据的格式
r.setRequestHeader('Content-Type', 'application/json')
// 注册响应函数
r.onreadystatechange = function() {
    if (r.readyState === 4) {
        console.log('state change', r, r.status, r.response)
        var response = JSON.parse(r.response)
        console.log('response', response)
    } else {
        console.log('change')
    }
}
// 发送请求
var account = {
    username: 'gua',
    password: '123',
}
var data = JSON.stringify(account)
r.send(data)


// 可以封装成这样的一个函数
var ajax = function(method, path, headers, data, reseponseCallback) {

}
```
