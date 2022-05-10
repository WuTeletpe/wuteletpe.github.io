```
Promise最大的好处是在异步执行的流程中，把 执行代码 和 处理结果 的代码清晰地分离了：

Promise 要求传入的是一个两参数函数，两个参数都是函数，
第一个参数(我们叫它resolve)接收一个参数。
第二个参数(我们叫它reject)接收一个参数。
Promise对象.then(xxx) xxx参数是一个单参数函数，这个参数会被赋值为 resolve 接收的参数
Promise对象.catch(xxx) xxx参数是一个单参数函数，这个参数会被赋值为 reject 接收的参数或执行过程中的异常
```
```js
var log = console.log.bind(console)
function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}
var p1 = new Promise(test);
var p2 = p1.then(function (result) {
    console.log('成功：' + result);
});
var p3 = p2.catch(function (reason) {
    console.log('失败：' + reason);
});
```
```
$ node .\test.js
set timeout to: 1.0593921669510307 seconds.
call reject()...
失败：timeout in 1.0593921669510307 seconds.

$ node .\test.js
set timeout to: 0.8377023767780711 seconds.
call resolve()...
成功：200 OK
```

```js
// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    log('start new Promise...');
    resolve(123);
});

p.then(multiply)
 .then(add)
 .then(multiply)
 .then(add)
 .then(function (result) {
    log('Got value: ' + result);
});
```

![1567752167211](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1567752167211.png)