## v-on：事件绑定机制--html影响js的手段

### `v-on:click`：点击事件

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
  <!--这个div区域就是MVVM中的 View-->
  <div id="div1">
    <!-- 给button节点绑定按钮的点击事件 -->
    {{name}}
    <button v-on:click="change">改变name的值</button>
  </div>


</body>

<script>
  //new出来的对象就是MVVM中的 View Module
  var myVue = new Vue({
    el: '#div1', //当前vue对象将接管上面的div区域
    data: { //data就是MVVM中的 module
      name: 'smyhvae'
    },

    //注意，下方这个 `methods` 是Vue中定义方法的关键字，不能改
    //这个 methods 属性中定义了当前Vue实例所有可用的方法
    methods: {
      change: function() { //上面的button按钮的点击事件
        this.name += '1';
      }
    }
  });
</script>

</html>
```


上方代码中，我们给button按钮绑定了点击事件。注意，这个button标签要写在div区域里（否则点击事件不生效），因为下方的View module接管的是div区域。

### `v-on`的简写形式

例如：

```html
    <button v-on:click="change">改变name的值</button>
```

可以简写成：

```html
    <button @click="change">改变name的值</button>
```


### v-on的常用事件

v-on 提供了click 事件，也提供了一些其他的事件。


- v-on:click

- v-on:keydown

- v-on:keyup

- v-on:mousedown

- v-on:mouseover

- v-on:submit

- ....

## 举例：文字滚动显示（跑马灯效果）

我们利用上面几段所学的内容，做个跑马灯的小例子。要实现的效果是：类似于LED屏幕上，滚动显示的文字。
**完整版代码**：

针对上面的四个步骤，为了实现这个案例，完整版代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <p>{{msg}}</p>
        <input type="button" value="跑马灯走起" @click="startMethod">
        <input type="button" value="跑马灯停止" @click="stopMethod">

    </div>
    <script src="vue2.5.16.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                msg: '生命壹号，永不止步～～～',
                intervalId: null
            },
            methods: {
                startMethod: function () {

                    //【重要】在开启定时器之前，先进行判断，避免出现多个定时器
                    //如果出现了多个定时器，后面的“停止定时器”操作是无效的
                    if (this.intervalId != null) return; //【注意】这个定时器的this，一定不要忘记了

                    //添加定时器：点击按钮后，让字符串连续滚动
                    this.intervalId = setInterval(() => {
                        // 获取 msg 的第一个字符
                        var start = this.msg.substring(0, 1);
                        // 获取 后面的所有字符
                        var end = this.msg.substring(1);
                        // 重新拼接得到新的字符串，并赋值给 this.msg
                        // 注意： VM实例，会监听自己身上 data 中所有数据的改变，只要数据一发生变化，就会自动把 最新的数据，从data 上同步到页面中去
                        this.msg = end + start;
                        console.log(this.msg);
                    }, 400);
                },

                stopMethod: function () {
                    // 停止定时器：点击按钮后，停止字符串的滚动
                    clearInterval(this.intervalId);
                    // 每当清除了定时器之后，需要重新把 intervalId 置为 null
                    this.intervalId = null;
                }
            }
        })
    </script>

</body>

</html>
```


**上方代码的总结**：

- 在Vue的实例中，如果想要获取data里的属性、methods里面的方法，都要通过`this`来访问。这里的**this指向的是Vue的实例对象**。

- VM实例，会监听自己身上 data 中所有数据的改变，只要数据一发生变化，就会自动把最新的数据，从 data 上同步到页面中去。这样做 的好处是：**程序员只需要关心数据，不需要考虑如何重新渲染DOM页面；减少DOM操作**。

- 在调用定时器 id 的时候，代码是`this.intervalId`，这个`this`一定不要漏掉了。
