## v-html


`v-text`是纯文本，而`v-html`会被解析成html元素。

注意：使用v-html渲染数据可能会非常危险，因为它很容易导致 XSS（跨站脚本） 攻击，使用的时候请谨慎，能够使用{{}}或者v-text实现的不要使用v-html。

代码举例：

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
        <p v-text="msg"></p>
        <p v-html="msg"></p>

    </div>
    <script src="vue2.5.16.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                msg: '<h1>我是一个大大的h1标题</h1>'
            }
        })
    </script>

</body>

</html>
```

运行结果：

![](http://img.smyhvae.com/20180506_2330.png)
