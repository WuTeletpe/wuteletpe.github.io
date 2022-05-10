// 事件  
===   
// 事件是用来处理响应的一个机制  
// 这个响应可以来自于用户(点击, 鼠标移动, 滚动), 也可以来自于浏览器  
//  
// 下面的链接描述了所有事件, 不过我们先从最常用的事件学起, click 事件  
// https://developer.mozilla.org/en-US/docs/Web/Events  
//  
// 常用例子, 给按钮添加一个点击的事件  
```javascript
// 1, 获得按钮
var loginButton = document.querySelector('#id-button-login')
// 2, 声明一个函数, 用于在按钮点击后执行
var clicked = function() {
    log('按钮被点击到了')
}
// 3, 添加事件, 使用 addEventListener 函数, 它有两个参数
// 第一个是事件的名字, 第二个是事件发生后会被自动调用的函数
loginButton.addEventListener('click', clicked)
//
// 添加完成, 可以自己在浏览器试试, 记得打开 console
```


// 给多个元素挂上同一个事件  
// 选择多个元素使用函数 querySelectorAll  
```javascript
var buttons = document.querySelectorAll('.radio-button')
// 循环遍历每个元素, 并且绑定点击事件
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    button.addEventListener('click', function(event){
        // 注意, 这次我们直接定义了函数作为参数传递, 这样做是合法的
        // 另外, 我们增加了一个 event 参数
        // 浏览器会给事件响应函数传递一个参数, 它代表了事件本身
        // 我们可以用 event.target 取出响应事件的元素
        var self = event.target
        // clearActive 函数是我们自己定义的
        // 目的是删除其他元素的 active class
        clearActive()
        // add 可以增加一个 class
        self.classList.add('active')
    })
}

var clearActive = function() {
    var active = document.querySelector('.active')
    if (active != null) {
        // 使用 classList 可以访问一个元素的所有 class
        // remove 可以删除一个 class
        active.classList.remove("active")
    }
}
```

<A HREF="javascript:void(0)">单此处什么也不会发生</A>

jquery 提供的会在整个文档加载完后才发生的事件
$('document').ready(function() {
    console.log('xxx')
    })


### 消除鼠标右键弹出的菜单
```js
e(".word-container").addEventListener("contextmenu", function(event) {
    //取消默认的浏览器自带右键 很重要！！
    event.preventDefault();
})
```
