Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。为了给博文组件传递一个标题，我们可以用一个 `props` 选项将其包含在该组件可接受的 prop 列表中：

```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。在上述模板中，你会发现我们能够在组件实例中访问这个值，就像访问 `data` 中的值一样。

一个 prop 被注册之后，你就可以像这样把数据作为一个自定义特性传递进来：

```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

![1564022635713](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1564022635713.png)

其实可以用v-bind把属性绑定到某个data中的变量上来实现

```js
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
```

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
></blog-post>
```

总结：props声明了一个属性列表,包含在其中的属性可以在```在html中使用该组件时通过"指定html标签的属性"指定```

![1564023603237](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1564023603237.png)

![1564023538222](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1564023538222.png)

![1564023494315](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1564023494315.png)