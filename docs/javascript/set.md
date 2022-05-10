## Set
Set 在其他语言里面称为集合
是一种和 Array 相似的数据结构
不同之处在于, Set 中的元素都是不重复的
用法如下  
```js
var s = new Set()
var s2 = new Set([1, 2, 3, 4, 2, 5, 3,])
// add 方法添加元素, 和 push 一样
s.add(1)
s.add(2)

// has 方法检查元素是否在 set 中
s.has(1) // true
s.has(3) // false

// size 属性相当于 length
s.size  // 2

// delete 方法删除一个元素
s.delete(1)
s.has(1)

s.size  // 1
```
set 类型的主要作用是去重, 我们作业中
做过的 union 等函数都是 set 的标配
函数, 不过在 js 中需要手动实现那些函数

set 的交集， 并集， 差集

### 遍历

```js
let mySet = new Set()
...
console.log(mySet); 
// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}

for (let item of mySet) {
    console.log(item);
}
```