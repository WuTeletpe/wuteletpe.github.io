```
jQuery 是一个常用的 js 库, 提供了 DOM 操作, AJAX 封装, 兼容性等功能
具体的, 上课再说

你需要新建一个 HTML 文件并且引入 jQuery 的 js 代码才能使用 js


按照功能, jQuery 常见的用法划分如下
```
## a. 选择器
// 1. $  
// 2. find children 某元素的子节点
// 3. siblings  某元素的兄弟所有节点  .next()下一个  .prev() 上一个
// 4. closest, parent  closest--从祖先节点中找最近的 且 满足条件的节点
1. --选择器
$('body')  
$('#id-button-add')  
$('.cell')  
	$("[href='#']")	所有 href 属性的值等于 "#" 的元素

element,element     div,p       选择所有 <div> 元素和所有 <p> 元素。
element element     div p       选择 <div> 元素内部的所有 <p> 元素。
element>element     div>p       选择父元素为 <div> 元素的所有 <p> 元素。
element+element     div+p       选择紧接在 <div> 元素之后的所有 <p> 元素。

2. --子节点
### 直接子元素
```js
$("div").children();
$("div").children("p.1")
```
### 所有子元素
```js
$("div").find("*"); // 所有子/孙/...元素
$("div").find("span");
```
3. --兄弟节点

4. --父节点及祖先节点
  $('td').parent()
  $('td').parent('tr') 从父元素中找

  $("td").parents('tr') 从祖先元素中找

## b. dom 操作
1. append   向DOM元素添加节点 (参数可以是html)
2. remove   删除DOM元素
3. empty    删除所有子DOM元素
4. show, hide, toggle
5. 转化为DOM节点 item[0](不会消除掉其中的事件)

## c. class 操作
1. addClass removeClass
2. toggleClass


## d. 属性、特性操作
1. attr, prop, data
2. removeAttr
prop
```js
// 返回属性的值：

$(selector).prop(property)
// 设置属性和值：

$(selector).prop(property,value)
```
## e. 取值
1. val
2. text --相当于innerText
3. html --相当于innerHTML
$(e).html()

## f. 事件
1. on
2. change
3. event.target


## g. 数组方法
1. each   --对数组每个元素执行
2. map    --对数组每个元素执行，得到结果后组成新数组
3. grep   --相当于filter
1.1
```js
// each 就是数组遍历 然后对每个元素（用this来索引）执行回调函数
$('a').each(function () {
    log(this.innserHTML)
})
后来被原生的map取代
```
## h. ajax
1. contentType, dataType
2. beforeSend, complete
```js
$.ajax({
    url: "http:localhost:9000/api/sessionList",
    success: function(result) {
        console.log("success:",result)
    }
});
```
