// array(列表) 常用操作  
// 创建列表  
// 使用 [] 符号, 每个元素用逗号分隔  
```javascript
var a = [1, 3, 4, 5]
// 现在 a 是一个 array，拥有 4 个元素
```

// 可以用 .length 返回 array 的长度  
var length = a.length
log(length)

// 访问元素  
// 对于列表中的每个元素, 可以通过下标（就是元素在列表中的序号，从 0 开始）访问  
// 下标访问语法是 [] 中括号  
```javascript
log('用下标访问 array 中的元素')
log(a[0])
log(a[1])
log(a[2])
log(a[3])
// 因为一共只有 4 个元素, 所以访问不存在的下标会出错
log(a[4])
```

## 遍历
// 手动访问元素当然是低效的  
// 可以用循环来访问元素, 这个过程叫 遍历列表  
```javascript
log('循环访问 array 所有元素')
length = len(a)
for(var i = 0; i < array.length; i++) {
    log(array[i])
}
```
// 更方便的遍历方式
```js
for (var i of table_attr.split(' ')) {
    log(i)
}
```
不要对数组用 for in
## 向 array 中添加新元素  
// 可以用列表的 push 函数往列表末尾插入一个元素  
// 并且, 这个新元素可以是任意类型, 这里是一个字符串  
```javascript
a.push('新元素')
log(a)
// [1, 3, 4, 5, '新元素']
a.push(0)
log(a)
// [1, 3, 4, 5, '新元素', 0]
// 多添加几个元素
a.push(12)
a.push(23)
a.push(34)
log(a)
```
## 向 array 添加 array (连接)
```js
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

## 搜索- 元素是否在数组中 有误
```js
var attrs_has_dot = ['value', 'name']
attrs_has_dot.includes('value')
```

## 弹出
**shift() 弹出第一个数据**
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift()
// fruits结果输出:
// Orange,Apple,Mango
```


**pop() 移除最后一个数组元素**
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
// fruits 结果输出：
// Banana,Orange,Apple
```
## 删除- 删除数组中的某个元素
```js
var array_remove = function(array, element) {
    var index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
    }
}

// If you just want to make the element at index i no longer exist, but you don't want the indexes of the other elements to change:
delete array[i];

```

## 字符串化 join
join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
```js
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// 默认为 ","
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain

```
