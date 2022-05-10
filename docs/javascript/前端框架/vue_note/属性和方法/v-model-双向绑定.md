Vue 还提供了 v-model 指令，它能轻松实现表单输入和应用状态之间的双向绑定。

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```
```js
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```



```html
<input v-model="searchText">
```

等价于：

```html
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

---

注意:以下部分介绍的是一个套路: **如何让自定义的组件可以使用v-model进行双向绑定**

理解一遍即可，用时赋值粘贴

当用在组件上时，`v-model` 则会这样：

```html
<custom-input
  v-bind:value="searchText"		   // 让 searchText 改变时 value 属性会改变
  v-on:input="searchText = $event" // 让发生input事件时 searchText 会改变
></custom-input>
```

为了让它正常工作，这个组件内的 `<input>` 必须：

- 将其 `value` 特性绑定到一个名叫 `value` 的 prop 上
- 在其 `input` 事件被触发时，将新的值通过自定义的 `input` 事件抛出

写成代码之后是这样的：

```js
Vue.component('custom-input', {
  props: ['value'],	// 把上一段代码中的 value 属性声明成一个prop(因为这是一个自定义的组件必须要声明清楚它拥有哪些属性可以指定，而input是原生的html元素，默认就有value属性，所以不用指定就可以直接)
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"//在输入时触发input事件，修改searchText
    >
  `
})
```

现在 `v-model` 就应该可以在这个组件上完美地工作起来了：

```html
<custom-input v-model="searchText"></custom-input>
```

1. 用户进行输入-->原生```<input>```的原生input事件
2. 原生input事件-->使用emit触发一个名为input的事件，携带本次输入的值
3. emit触发的名为input事件-->```<custom-input>```监听名为input的事件，改变searchText的值
4. ```<custom-input>``` v-bind:value="searchText" -->searchText被改变使得value属性被改变
5. custom-input组件在props里声明了value是一个属性所以4.才可以改变它
6. 原生```<input>```v-bind:value="value"-->使得custom-input的value属性(引号里的value)被改变时，原生```<input>```的value被改变