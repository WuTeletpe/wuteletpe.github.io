## v-bind：属性绑定机制

`v-bind`：用于绑定**属性**。是单向的，可以js改变html不能html改变js

```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```

```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```

* 该指令的意思是：“将这个元素节点的 title 特性和 Vue 实例的 message 属性保持一致”。
* 可以绑定给 style属性 一个字典，花括号代表字典
* 可以绑定给 class 一个字典 "类名"->true/false ,也可以是一个数组
* 对于 v-bind:xx= 后的 内容，相当于 仍是 js模式 而非 string模式
* 如果你再次打开浏览器的 JavaScript 控制台，输入 app2.message = '新消息'，就会再一次看到这个绑定了 title 特性的 HTML 已经进行了更新。

注意：如果使用v-bind的元素是一个组件，就必须在组件的定义中写触发