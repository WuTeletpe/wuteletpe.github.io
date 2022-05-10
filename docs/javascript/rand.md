### 随机数
```js
let rand = function(min, max) {
    let r = Math.random()
    let buf = r * (max - min + 1)
    return (buf + min)
}
```
### 数组中随机取一个
```js
var items = Array(523,3452,334,31,...5346);
var item = items[Math.floor(Math.random() * items.length)]
```

### 数组中随机取多个
```js
var items = Array(523,3452,334,31,5346);
var n = 5

let randNInArray = function(items, n) {
    var set = new Set()
    while(set.size < n) {
        let item = items[Math.floor(Math.random() * items.length)]
        set.add(item)
    }
    return Array(...set)
}

```
