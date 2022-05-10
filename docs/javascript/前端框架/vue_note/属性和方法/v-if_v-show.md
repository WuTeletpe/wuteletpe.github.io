控制切换一个元素是否显示也相当简单：
v-if
```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```
```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```
继续在控制台输入 app3.seen = false，你会发现之前显示的消息消失了。


v-else
不需要表达式

限制：前一兄弟元素必须有 v-if 或 v-else-if。

用法：

为 v-if 或者 v-else-if 添加“else 块”。
```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

v-else-if
类型：any

限制：前一兄弟元素必须有 v-if 或 v-else-if。

用法：

表示 v-if 的 “else if 块”。可以链式调用。
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```


另一个用于根据条件展示元素的选项是 v-show 指令。用法大致一样：
```html
<h1 v-show="ok">Hello!</h1>
```
不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。(ok为false时 display 变为 none 但html中仍然存在)
