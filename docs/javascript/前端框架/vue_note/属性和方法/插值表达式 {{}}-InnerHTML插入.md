## Vue初体验

新建一个空的项目，引入vue.js文件。写如下代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--1、导入Vue的包-->
    <script src="vue2.5.15.js"></script>
</head>
<body>
<!--这个div区域就是MVVM中的 View-->
<div id="div1">
    {{name}}
</div>
</body>

<script>
    // 2、创建一个Vue的实例
    //new出来的对象就是MVVM中的 View Module（调度者）
    var myVue = new Vue({
        el: '#div1', //当前vue对象将接管上面的div1区域
        data: {//data就是MVVM中的 module
            name: 'smyhvae'
        }
    });
</script>
</html>
```
* {{}} 中的值会访问 vue对象的 data，当 data[name]改变时 {{name}} 也随之改变
* 注意不能用在 html 标签的 内部用来指定属性
