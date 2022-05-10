## v-text

v-text可以将一个变量的值渲染到指定的元素中。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <!--vue的版本：2.5.15-->
  <script src="vue.js"></script>
</head>

<body>
  <div id="div1">
    <span v-text="name"></span>
  </div>
</body>

<script>
  new Vue({
    el: '#div1',
    data: {
      name: 'hello smyhvae'
    }
  });
</script>

</html>
```

结果：


![](http://img.smyhvae.com/20180313_1645.png)

### 差值表达式和 v-text 的区别

```html
  <!-- 差值表达式 -->
  <span>content:{{name}}</span>

  <!-- v-text -->
  <span v-text="name">/span>
```

**区别1**： v-text 没有闪烁的问题，因为它是放在属性里的。

**区别2** :插值表达式只会替换自己的这个占位符，并不会把整个元素的内容清空。v-text 会**覆盖**元素中原本的内容。

为了解释区别2，我们来用代码举例：

```html
  <!-- 差值表达式 -->
  <p>content:++++++{{name}}------</p>

  <!-- v-text -->
  <p v-text="name">------++++++</p>
```

上方代码的演示结果：

![](http://img.smyhvae.com/20180506_2320.png)

其实，第二行代码中，只要浏览器中还没有解析到`v-text="name"`的时候，会显示`------++++++`；当解析到`v-text="name"`的时候，name的值会直接替换`------++++++`。
