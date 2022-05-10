## let
let声明的变量只在其声明的块或子块中可用，这一点，与var相似。二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。
var 最大的坑在于 var 的循环，会先将var 的值存起来，最后做绑定
而 let 才能绑定真正想要的值
```js
for(var i = 1; i < 6; i++) {
  document.getElementById('my-element' + i)
    .addEventListener('click', function() { alert(i) })
}
```
```js
'use strict';

for(let i = 1; i < 6; i++) {
  document.getElementById('my-element' + i)
    .addEventListener('click', function() { alert(i) })
}
```

