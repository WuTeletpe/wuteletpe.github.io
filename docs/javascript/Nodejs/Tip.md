http://javascript.ruanyifeng.com/nodejs/packagejson.html
## ./表示当前路径

## 引入文件
```js
// 被引入的文件 utils.js
var foo = function () {

}

exports.foo =  foo
```
```js
// 引入文件的文件
const foo = require('./utils')

```
