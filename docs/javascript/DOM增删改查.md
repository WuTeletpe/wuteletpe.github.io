```
/*
DOM(文档对象模型) 是浏览器对 html 文件的描述方式
DOM API 是浏览器提供给 JavaScript 操作 html 页面内元素的方式
简而言之, 浏览器提供了一些内置函数来让我们操作页面(增删改查)
*/
```

// 查找元素  
// ===  
//  
// 查找元素使用 document.querySelector() 函数  
// 这个函数的参数是一个选择器(和 CSS 选择器一样)  
// 选择器语法和 CSS 选择器一样, 现在只用 3 个基础选择器  
// 元素选择器  
```javascript
var body = document.querySelector('body')
// class 选择器, 用的是   .类名
var form = document.querySelector('.login-form')
// id 选择器, 用的是   #id
var loginButton = document.querySelector('#id-button-login')
// log 出来看看
log('selector', body, form, loginButton)
```
// 获得父元素
```js
(ie 中才有 parentElement)
e.parentNode
```
// 最近的直系父节点
```js
e.closest('.todo-cell')
```
// 操作元素的属性
// 获得拥有的类
```js
e.classList --> DOMTokenList 类有 contains 函数
if(e.classList.contains('todo-delete')) {
    ...
}
```
// ===  
//  
// 获得特定属性值  
```javascript
var user = document.querySelector('#id-input-username')
var userValue = user.getAttribute('value')
log('user value', userValue)
// 不存在的属性会返回 null, 它在 js 中代表不存在
log('没有的属性', user.getAttribute('不存在'))

// 设置特定属性值
user.setAttribute('value', '新用户名')

// 查询属性是否存在
log(user.hasAttributes())       // 查看元素是否有属性
log(user.hasAttribute('value')) // 查看元素是否有特定属性

// 删除某个属性
user.removeAttribute('type')

// 获得所有属性
var attributes = user.attributes
log('所有属性', attributes)
```


// 操作元素(创建, 删除, 修改)  
// ===  
//  
// 用 document.createElement 函数创建一个元素  
```javascript
var button = document.createElement('button');
// 用 innerHTML 设置属性
button.innerHTML = '注册用户'
// <button>注册用户</button>
```

// 修改  
// 用 appendChild 给一个元素添加子元素  
// 这里我们给 .login-form 添加刚才创建好的按钮  
```javascript
var form = document.querySelector('.login-form')
form.appendChild(button)
```
更方便的方法 element.insertAdjacentHTML
```js
form.insertAdjacentHTML('beforeend', '<div> new </div>')
```
注意 使用 outerHTML + insertAdjacentHTML 无法保留原来的事件
应该使用 insertAdjacentElement

// 删除元素  
```javascript
var pwd = document.querySelector('#id-input-password')
// form.removeChild(pwd)
// pwd.remove()
```
