object / dict
js的"对象"和"字典"同义
1. 定义:花括号
var obj = {
  key: value,//key两边可以加引号，可以省略
}
2. 访问方式
  2.1 obj["key"]//也可以obj[变量名],
  2.2 obj.key//此时key不能含空格
3. 增加元素
  3.1 obj["age"] = 2
  3.2 obj.age = 2
4. 删除
  4.1 delete obj.age//delete 关键字
5. 长度
Object.keys(myObj).length
6. 是否包含某个key
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // 返回true
"model" in mycar // 返回true
7. 遍历
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
8. 只得到 keys 和只得到 values
```js
var keys = Object.keys(dict)
var values = Object.values(dict)
```
