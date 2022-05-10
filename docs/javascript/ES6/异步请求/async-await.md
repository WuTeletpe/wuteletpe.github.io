## async

async 是 ES7 才有的与异步操作有关的关键字，和 Promise ， Generator 有很大关联的。

### 语法

```
async function name([param[, param[, ... param]]]) { statements }
```

- name: 函数名称。
- param: 要传递给函数的参数的名称。
- statements: 函数体语句。

### 返回值

async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。


```js
async function helloAsync(){
    return "helloAsync";
}
  
console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}
 
helloAsync().then(v=>{
   console.log(v);         // helloAsync
})
```
async 函数中可能会有 await 表达式，async 函数执行时，如果**遇到 await 就会先暂停执行 ，等到触发的异步操作完成后**，恢复 async 函数的执行并返回解析值。

await 关键字仅在 async function 中有效。如果在 async function 函数体外使用 await ，你只会得到一个语法错误。

```js
function testAwait(){
   return new Promise((resolve) => {
       setTimeout(function(){
          console.log("testAwait");
          resolve();
       }, 1000);
   });
}
 
async function helloAsync(){
   await testAwait();
   console.log("helloAsync");
 }
helloAsync();
// testAwait
// helloAsync
```

await关键字只能出现在用async声明的函数体内,该函数会隐式地返回一个Promise对象，函数体内的return值，将会作为这个Promise对象resolve时的参数。

## await

await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用。

### 语法

```
[return_value] = await expression;
```

- expression: 一个 Promise 对象或者任何要等待的值。

### 返回值

返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。

如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。



### Promise 对象的状态变化

`async`函数返回的 Promise 对象，必须等到内部所有`await`命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到`return`语句或者抛出错误。也就是说，只有`async`函数内部的异步操作执行完，才会执行`then`方法指定的回调函数。

下面是一个例子。

```javascript
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)
// "ECMAScript 2017 Language Specification"
```

上面代码中，函数`getTitle`内部有三个操作：抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行`then`方法里面的`console.log`。