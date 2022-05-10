## [vue $refs的基本用法](https://www.cnblogs.com/xueweijie/p/6907676.html)

```vue
<div id="app">
    <input type="text" ref="input1"/>
    <button @click="add">添加</button>
</div>
```

```vue
<script>
new Vue({
    el: "#app",
    methods:{
    add:function(){
        this.$refs.input1.value ="22"; //this.$refs.input1  减少获取dom节点的消耗
        }
    }
})
</script>
```

一般来讲，获取DOM元素，需document.querySelector（".input1"）获取这个dom节点，然后在获取input1的值。

但是用ref绑定之后，我们就不需要在获取dom节点了，直接在上面的input上绑定input1，然后$refs里面调用就行。

然后在javascript里面这样调用：this.$refs.input1  这样就可以减少获取dom节点的消耗了