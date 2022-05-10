和 HTML 元素一样，我们经常需要向一个组件传递内容，像这样：

```html
<alert-box>
  Something bad happened.
</alert-box>
```

可能会渲染出这样的东西：

![1564206856920](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1564206856920.png)Vue 自定义的 `<slot>` 元素可以向组件传递**内容**：

```js
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
```

如你所见，我们只要在需要的地方加入插槽就行了——就这么简单！